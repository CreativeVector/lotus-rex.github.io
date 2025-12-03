async function loadTableData(tbl) {
    document.getElementById("tableTitle").textContent = `${tbl} Manager`;
    document.getElementById("tableStatus").textContent = `Memuat data dari tabel '${tbl}'...`;
    document.getElementById("dataTable").innerHTML = '';
    pendingUpdates = [];
    document.getElementById("pendingCount").textContent = 0;

    // Memuat data. RLS harus mengizinkan peran 'anon'.
    const { data, error } = await supabaseClient.from(tbl).select("*");

    if (error) {
        document.getElementById("tableStatus").textContent = `Error memuat data: ${error.message}. Pastikan RLS mengizinkan peran 'anon'.`;
        tableData = [];
    } else {
        tableData = data;
        document.getElementById("tableStatus").textContent = `Berhasil memuat ${data.length} baris dari '${tbl}'.`;
    }

    currentPage = 1;
    renderTable();
}

function renderTable(filtered = null) {
    const tbl = filtered ?? tableData;
    const table = document.getElementById("dataTable");
    table.innerHTML = "";

    if (!tbl.length) { table.innerHTML = '<tr><td>Tidak ada data untuk ditampilkan.</td></tr>'; renderPagination(0); return; }

    const pkCol = Object.keys(tbl[0])[0]; // Asumsi PK adalah kolom pertama

    const header = table.insertRow();
    header.className = 'bg-gray-200';
    Object.keys(tbl[0]).forEach(col => {
        const th = document.createElement("th");
        th.innerText = col;
        th.className = 'py-3 px-6 text-xs font-medium text-gray-600 uppercase tracking-wider';
        header.appendChild(th);
    });

    const start = (currentPage - 1) * rowsPerPage;
    const rows = tbl.slice(start, start + rowsPerPage);

    rows.forEach(row => {
        const tr = table.insertRow();
        const isNewRow = row[pkCol] === null || row[pkCol] === undefined;
        Object.keys(row).forEach(col => {
            const td = tr.insertCell();
            if (col !== pkCol || isNewRow) {
                td.contentEditable = true;
            }
            td.innerText = row[col] ?? '';
            td.className = 'py-4 px-6 whitespace-nowrap text-sm text-gray-900 border-b border-gray-200';
            if (isNewRow) { tr.classList.add("bg-yellow-50"); }
            const isPending = pendingUpdates.some(u => u.id === row[pkCol] && u.col === col);
            if (isPending) { td.classList.add("edited"); }

            td.addEventListener("input", () => {
                const pkValue = isNewRow ? `NEW_${Date.now()}` : row[pkCol];
                const existingIndex = pendingUpdates.findIndex(u => u.id === pkValue && u.col === col);
                const updateObject = { 
                    id: pkValue, 
                    col: col, 
                    value: td.innerText, 
                    pkCol: pkCol, 
                    isNew: isNewRow 
                };

                if (existingIndex > -1) { pendingUpdates[existingIndex] = updateObject; }
                else { pendingUpdates.push(updateObject); }

                td.classList.add("edited");
                document.getElementById("pendingCount").textContent = pendingUpdates.length;
            });
        });
    });

    renderPagination(tbl.length);
}

// GANTI FUNGSI syncChanges yang sudah ada
async function syncChanges() {
    if (pendingUpdates.length === 0) { alert("Tidak ada perubahan tertunda."); return; }

    const tbl = currentTable;
    const updatesToProcess = [...pendingUpdates];
    pendingUpdates = [];
    
    document.getElementById("tableStatus").textContent = `Menyinkronkan ${updatesToProcess.length} perubahan...`;
    const syncButton = document.querySelector('.bg-green-500');
    syncButton.disabled = true;

    const newRowsToInsert = {}; // Mengelompokkan perubahan baris baru
    const existingUpdates = [];

    // 1. Kategorisasi dan Pengelompokan Data
    updatesToProcess.forEach(update => {
        if (update.isNew) {
            const tempId = update.id; // ID sementara seperti 'NEW_17500...'
            if (!newRowsToInsert[tempId]) {
                newRowsToInsert[tempId] = {};
            }
            newRowsToInsert[tempId][update.col] = update.value;
        } else {
            existingUpdates.push(update);
        }
    });

    let failedUpdates = 0;
    
    // 2. PROSES INSERT (Baris Baru)
    for (const tempId in newRowsToInsert) {
        const rowData = newRowsToInsert[tempId];
        const { error } = await supabaseClient
            .from(tbl)
            .insert([rowData]); // Insert baris baru

        if (error) {
            console.error("INSERT Gagal:", rowData, error.message);
            failedUpdates++;
        }
    }
    
    // 3. PROSES UPDATE (Baris Lama)
    for (const update of existingUpdates) {
        const { error } = await supabaseClient
            .from(tbl)
            .update({ [update.col]: update.value }) 
            .eq(update.pkCol, update.id); 

        if (error) {
            console.error("UPDATE Gagal:", update, error.message);
            failedUpdates++;
            // Jika gagal, kembalikan ke pendingUpdates (opsional)
        }
    }
    
    syncButton.disabled = false;
    
    if (failedUpdates === 0) {
        alert("✅ Sinkronisasi Selesai! Semua perubahan berhasil disimpan.");
        await loadTableData(tbl); // Muat ulang untuk mendapatkan PK baru
    } else {
         alert(`⚠️ Sinkronisasi selesai, tetapi ${failedUpdates} operasi GAGAL. Cek console.`);
         document.getElementById("tableStatus").textContent = `Sinkronisasi selesai. ${failedUpdates} GAGAL.`;
    }
    document.getElementById("pendingCount").textContent = pendingUpdates.length;
}

function filterTable() {
    const q = document.getElementById("searchInput").value.toLowerCase();
    const filtered = tableData.filter(row =>
        Object.values(row).some(value => String(value).toLowerCase().includes(q))
    );
    currentPage = 1;
    renderTable(filtered);
}
const maxVisiblePages = 5;
function renderPagination(totalRows) {
    const pages = Math.ceil(totalRows / rowsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    if (pages <= 1) return;

    // 1. Tentukan halaman awal dan akhir yang akan ditampilkan (misal: maksimum 5 tombol)
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(pages, startPage + maxVisiblePages - 1);

    // Sesuaikan start page jika kita mencapai batas akhir (agar selalu 5 tombol)
    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // --- Tombol Previous ---
    pagination.innerHTML += `
                <button onclick="goToPage(${currentPage - 1})" 
                        ${currentPage === 1 ? 'disabled' : ''}
                        class="py-1 px-3 m-1 rounded text-sm bg-white border hover:bg-gray-200 disabled:opacity-50">
                    &laquo; Prev
                </button>
            `;

    // --- Nomor Halaman ---
    for (let i = startPage; i <= endPage; i++) {
        pagination.innerHTML += `
                    <button onclick="goToPage(${i})" 
                            class="py-1 px-3 m-1 rounded text-sm ${i === currentPage ? 'bg-indigo-600 text-gray-500 font-semibold' : 'bg-white border hover:bg-gray-200'}">
                        ${i}
                    </button>
                `;
    }

    // --- Tombol Next ---
    pagination.innerHTML += `
                <button onclick="goToPage(${currentPage + 1})" 
                        ${currentPage === pages ? 'disabled' : ''}
                        class="py-1 px-3 m-1 rounded text-sm bg-white border hover:bg-gray-200 disabled:opacity-50">
                    Next &raquo;
                </button>
            `;
}

function goToPage(p) {
    currentPage = p;
    renderTable();
}
async function handleLogout() {
    const { error } = await supabaseClient.auth.signOut();
    if (!error) { window.location.href = '../login.html'; }
    else { alert("Logout gagal: " + error.message); }
}
function addNewRow() {
    if (!tableData.length) {
        alert("Tabel kosong, tidak dapat menentukan skema kolom.");
        return;
    }

    // 1. Dapatkan kolom skema dari baris pertama (asumsi semua baris memiliki skema yang sama)
    const newRow = {};
    Object.keys(tableData[0]).forEach(key => {
        // Atur nilai default ke null atau string kosong
        newRow[key] = null;
    });

    // 2. Tambahkan ke data lokal. PK akan bernilai null/undefined.
    tableData.unshift(newRow); // Tambahkan di bagian atas
    currentPage = 1; // Kembali ke halaman 1 untuk melihat baris baru
    renderTable();

    document.getElementById("tableStatus").textContent = `Baris baru ditambahkan. Jangan lupa Sync!`;
}
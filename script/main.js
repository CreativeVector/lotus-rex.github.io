// --- DOM ELEMENTS & SETUP ---
const contentArea = document.getElementById('content-area');
const pageTitleElement = document.getElementById('page-title');
const navItems = document.querySelectorAll('.nav-item');
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menu-toggle');
const sidebarOverlay = document.getElementById('sidebar-overlay');

const StatCard = (title, value, iconName, color) => `
    <div class="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between transition duration-300 hover:shadow-xl">
        <div>
            <p class="text-sm font-medium text-gray-500">${title}</p>
            <p class="text-3xl font-extrabold text-gray-900 mt-1">${value}</p>
        </div>
        <div class="p-3 rounded-full bg-opacity-10 ${color.replace('-500', '-100')}">
            <i data-lucide="${iconName}" class="w-8 h-8 ${color.replace('bg-', 'text-')}"></i>
        </div>
    </div>
`;
const pageTitles = {
    dashboard: 'Dashboard Utama',
    tools: 'Tools & Utilities',
    settings: 'Pengaturan Aplikasi'
};

const pageFiles = {
    dashboard: 'pages/dashboard.html',
    tools: 'pages/tools.html',
    settings: 'pages/settings.html'
};
// --- NAVIGATION LOGIC ---

/**
 * Mengambil konten HTML dari file terpisah dan menyuntikkannya ke dalam DOM
 * @param {string} pageKey - Kunci halaman (dashboard, tools, settings)
 */
async function renderPage(pageKey) {
    const filePath = pageFiles[pageKey];
    const title = pageTitles[pageKey] || 'Halaman';

    if (!filePath) {
        contentArea.innerHTML = `<div class="p-10 text-center text-red-500">Halaman tidak ditemukan untuk kunci: ${pageKey}</div>`;
        return;
    }

    try {
        // 1. Tampilkan loading/placeholder
        contentArea.innerHTML = `<div class="text-center p-10 text-gray-500">Memuat ${title}...</div>`;

        // 2. Ambil konten dari file terpisah
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Gagal memuat ${filePath}: ${response.statusText}`);
        }
        const contentHTML = await response.text();

        // 3. Perbarui DOM
        contentArea.innerHTML = contentHTML;
        pageTitleElement.textContent = title;

        // 4. Perbarui kelas navigasi
        navItems.forEach(item => {
            const itemPage = item.getAttribute('data-page');
            if (itemPage === pageKey) {
                // Class untuk item yang aktif
                item.className = item.className.replace('text-indigo-200 hover:bg-indigo-700/50 hover:text-white', 'bg-indigo-700 text-white shadow-md');
            } else {
                // Class untuk item yang tidak aktif
                item.className = item.className.replace('bg-indigo-700 text-white shadow-md', 'text-indigo-200 hover:bg-indigo-700/50 hover:text-white');
            }
        });

        // 5. Render ulang ikon Lucide
        lucide.createIcons();

        // **TAMBAHKAN INI:** Jika halaman adalah dashboard, panggil API
        if (pageKey === 'dashboard') {
            await fetchAndRenderExchangeRates();
        }

    } catch (error) {
        console.error("Kesalahan render halaman:", error);
        contentArea.innerHTML = `<div class="p-10 text-center text-red-500">Terjadi kesalahan: ${error.message}</div>`;
    }
}

// --- SIDEBAR TOGGLE (MOBILE) ---

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none');
    sidebarOverlay.classList.add('opacity-50', 'pointer-events-auto');
    menuToggle.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
    lucide.createIcons();
}

function closeSidebar() {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.remove('opacity-50', 'pointer-events-auto');
    sidebarOverlay.classList.add('opacity-0', 'pointer-events-none');
    menuToggle.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
    lucide.createIcons();
}

// --- EVENT LISTENERS & INISIASI ---

// Listener untuk Navigasi Sidebar
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const page = e.currentTarget.getAttribute('data-page');
        renderPage(page);
        closeSidebar(); // Tutup sidebar setelah navigasi (untuk mobile)
    });
});

// Toggle Sidebar (untuk mobile)
menuToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('-translate-x-full')) {
        openSidebar();
    } else {
        closeSidebar();
    }
});

// Tutup Sidebar saat klik overlay
sidebarOverlay.addEventListener('click', closeSidebar);

// Panggil renderPage pertama kali saat halaman dimuat
window.onload = function () {
    // Cek hash URL untuk navigasi langsung, default ke 'dashboard'
    const initialPage = window.location.hash.substring(1) || 'dashboard';
    renderPage(initialPage);
}

contentArea.addEventListener('click', (e) => {
    // Cari tombol yang memiliki data-tool attribute
    const toolButton = e.target.closest('[data-tool]');

    if (toolButton) {
        e.preventDefault();
        const toolKey = toolButton.getAttribute('data-tool');
        loadTool(toolKey);
    }
});
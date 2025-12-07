const CryptoToolsContent = `
    <h2 class="text-2xl font-bold text-pink-700 mb-4 flex items-center">
        <i data-lucide="lock" class="w-6 h-6 mr-3"></i> Kriptografi & Hash Tool
    </h2>
    <div class="bg-white p-6 rounded-xl shadow-lg space-y-8">
        
<div class="flex border-b border-gray-200">
    <button data-tab="aes" class="tab-button py-2 px-4 text-sm font-medium border-b-2 border-pink-500 text-pink-600 transition duration-150">AES-GCM (Browser)</button>
    <button data-tab="wpf-aes" class="tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-pink-600 hover:border-pink-300 transition duration-150">AES-CBC (WPF)</button>
    <button data-tab="hash" class="tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-pink-600 hover:border-pink-300 transition duration-150">File Hash (SHA-256)</button>
    <button data-tab="hybrid" class="tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-pink-600 hover:border-pink-300 transition duration-150">Simulasi Hybrid</button>
</div>

        <div id="crypto-tab-content">
            </div>

    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
// ... (Setelah initCodeConverter, sebelum loadTool)

// --- LOGIKA UTAMA KRIPTOGRAFI ---
const WPF_AES_TAB_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-pink-700">AES-CBC Kompatibel WPF (CryptoJS)</h3>
    <p class="text-sm text-gray-600 mb-4">Menggunakan AES-CBC, PKCS7 Padding, dan IV Nol untuk kompatibilitas dengan C#/.NET (WPF).</p>

    <div class="border p-4 rounded-lg bg-gray-50 mb-6">
        <h4 class="font-semibold text-gray-800 mb-3">Enkripsi</h4>
        <label for="encKey" class="block text-sm font-medium text-gray-700 mb-1">Kunci (Key) UTF8:</label>
        <input type="text" id="encKey" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 mb-4" placeholder="Masukkan kunci (misal: 1234567890123456)">

        <label for="encInput" class="block text-sm font-medium text-gray-700 mb-1">Teks Masukan:</label>
        <textarea id="encInput" rows="3" class="w-full p-3 border border-gray-300 rounded-lg font-mono text-sm mb-4" placeholder="Teks yang akan dienkripsi..."></textarea>
        
        <button id="wpf-aes-encrypt-btn" class="w-full px-4 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-150">
            <i data-lucide="lock" class="w-4 h-4 mr-2 inline-block"></i> Enkripsi ke Base64
        </button>
        
        <label for="encOutput" class="block text-sm font-medium text-gray-700 mt-4 mb-1">Hasil Enkripsi (Base64 Ciphertext):</label>
        <textarea id="encOutput" rows="3" readonly class="w-full p-3 border border-gray-300 rounded-lg bg-white font-mono text-sm"></textarea>
    </div>

    <div class="border p-4 rounded-lg bg-gray-50">
        <h4 class="font-semibold text-gray-800 mb-3">Dekripsi</h4>
        <label for="decKey" class="block text-sm font-medium text-gray-700 mb-1">Kunci (Key) UTF8:</label>
        <input type="text" id="decKey" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 mb-4" placeholder="Masukkan kunci yang sama">

        <label for="decInput" class="block text-sm font-medium text-gray-700 mb-1">Ciphertext Base64 Masukan:</label>
        <textarea id="decInput" rows="3" class="w-full p-3 border border-gray-300 rounded-lg font-mono text-sm mb-4" placeholder="Ciphertext yang akan didekripsi..."></textarea>
        
        <button id="wpf-aes-decrypt-btn" class="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150">
            <i data-lucide="unlock" class="w-4 h-4 mr-2 inline-block"></i> Dekripsi ke Teks
        </button>
        
        <label for="decOutput" class="block text-sm font-medium text-gray-700 mt-4 mb-1">Hasil Dekripsi (Teks UTF8):</label>
        <textarea id="decOutput" rows="3" readonly class="w-full p-3 border border-gray-300 rounded-lg bg-white font-mono text-sm"></textarea>
    </div>
`;

const AES_TAB_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-pink-700">AES-GCM (Enkripsi Simetris)</h3>
    <p class="text-sm text-gray-600 mb-4">Gunakan kata sandi yang sama untuk mengenkripsi dan mendekripsi. (AES-256 GCM)</p>
    
    <label for="aes-password" class="block text-sm font-medium text-gray-700 mb-1">Kata Sandi (Kunci):</label>
    <input type="text" id="aes-password" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 mb-4" placeholder="Masukkan kata sandi yang kuat">
    
    <label for="aes-input" class="block text-sm font-medium text-gray-700 mb-1">Teks Masukan:</label>
    <textarea id="aes-input" rows="4" class="w-full p-3 border border-gray-300 rounded-lg font-mono text-sm mb-4" placeholder="Teks yang akan dienkripsi atau dekripsi..."></textarea>
    
    <div class="flex space-x-4 mb-4">
        <button id="aes-encrypt-btn" class="flex-1 px-4 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-150">
            <i data-lucide="lock" class="w-4 h-4 mr-2 inline-block"></i> Enkripsi
        </button>
        <button id="aes-decrypt-btn" class="flex-1 px-4 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-150">
            <i data-lucide="unlock" class="w-4 h-4 mr-2 inline-block"></i> Dekripsi
        </button>
    </div>
    
    <label for="aes-output" class="block text-sm font-medium text-gray-700 mb-1">Hasil:</label>
    <textarea id="aes-output" rows="4" readonly class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"></textarea>
`;

const HASH_TAB_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-pink-700">File Hash Calculator (SHA-256)</h3>
    <p class="text-sm text-gray-600 mb-4">Hitung nilai hash (sidik jari digital) dari file yang Anda pilih.</p>
    
    <label for="hash-file-input" class="block text-sm font-medium text-gray-700 mb-1">Pilih File:</label>
    <input type="file" id="hash-file-input" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500 mb-4">
    
    <button id="hash-calculate-btn" class="w-full px-4 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-150">
        <i data-lucide="fingerprint" class="w-4 h-4 mr-2 inline-block"></i> Hitung Hash SHA-256
    </button>
    
    <label for="hash-output" class="block text-sm font-medium text-gray-700 mt-6 mb-1">Hasil Hash SHA-256:</label>
    <textarea id="hash-output" rows="2" readonly class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"></textarea>
`;

const HYBRID_TAB_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-pink-700">Simulasi Enkripsi Hybrid & RSA</h3>
    <p class="text-sm text-gray-600 mb-4">Implementasi RSA dan Hybrid di sisi klien sangat kompleks dan rentan. Ini adalah simulasi alur kerjanya:</p>
    
    <div class="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
        <h4 class="font-semibold text-yellow-800 flex items-center"><i data-lucide="key" class="w-4 h-4 mr-2"></i> Konsep Hybrid (Simulasi)</h4>
        <ul class="list-disc list-inside text-sm text-yellow-700 mt-2 space-y-1">
            <li>Pesan dienkripsi dengan **AES** (cepat).</li>
            <li>Kunci AES itu sendiri dienkripsi dengan **RSA Public Key** (lambat, tetapi mengamankan kunci).</li>
            <li>Penerima menggunakan **RSA Private Key** untuk mendekripsi kunci AES.</li>
            <li>Penerima menggunakan kunci AES untuk mendekripsi pesan.</li>
        </ul>
        <p class="mt-3 text-sm text-yellow-800">**Fungsi enkripsi/dekripsi AES di tab pertama adalah komponen simetris yang digunakan dalam sistem Hybrid.**</p>
    </div>
`;


// --- UTILITY FUNCTIONS ---

// Fungsi untuk mengkonversi ArrayBuffer ke string Hex
function arrayBufferToHex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), x => (('00' + x.toString(16)).slice(-2))).join('');
}

// Fungsi untuk mengkonversi string Hex ke ArrayBuffer
function hexToArrayBuffer(hex) {
    if (hex.length % 2 !== 0) throw new Error('Input Hex tidak valid.');
    const buffer = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        buffer[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return buffer.buffer;
}

// Fungsi untuk mendapatkan Key AES dari password (menggunakan PBKDF2)
async function getKeyFromPassword(password, salt, usage) {
    const enc = new TextEncoder();
    const keyMaterial = await crypto.subtle.importKey(
        "raw",
        enc.encode(password),
        { name: "PBKDF2" },
        false,
        ["deriveKey"]
    );
    return crypto.subtle.deriveKey(
        {
            name: "PBKDF2",
            salt: enc.encode(salt),
            iterations: 100000,
            hash: "SHA-256",
        },
        keyMaterial,
        { name: "AES-GCM", length: 256 },
        true,
        [usage]
    );
}


// --- INISIALISASI TOOLS KRIPTOGRAFI ---

function initCryptoTools() {
    const tabContentArea = document.getElementById('crypto-tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');

    // Default ke tab AES
    renderCryptoTab('aes');

    // Event listener untuk tombol tab
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabKey = button.getAttribute('data-tab');
            renderCryptoTab(tabKey);
        });
    });

    /**
     * Render dan inisialisasi logika spesifik untuk setiap tab
     */
    function renderCryptoTab(tabKey) {
        // Update styling tab
        tabButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-tab') === tabKey;
            btn.classList.toggle('border-pink-500', isActive);
            btn.classList.toggle('text-pink-600', isActive);
            btn.classList.toggle('border-transparent', !isActive);
            btn.classList.toggle('text-gray-500', !isActive);
            btn.classList.toggle('hover:border-pink-300', !isActive);
        });

        // Load content dan initialize
        switch (tabKey) {
            case 'aes':
                tabContentArea.innerHTML = AES_TAB_CONTENT;
                initAesGcm();
                break;
            case 'wpf-aes': // KASUS BARU
                tabContentArea.innerHTML = WPF_AES_TAB_CONTENT;
                initWpfAes();
                break;
            case 'hash':
                tabContentArea.innerHTML = HASH_TAB_CONTENT;
                initFileHash();
                break;
            case 'hybrid':
                tabContentArea.innerHTML = HYBRID_TAB_CONTENT;
                lucide.createIcons();
                break;
        }
        lucide.createIcons(); // Render ikon dalam konten tab
    }
}


// --- FUNGSI SPESIFIK TAB ---

function initAesGcm() {
    const passwordInput = document.getElementById('aes-password');
    const inputArea = document.getElementById('aes-input');
    const outputArea = document.getElementById('aes-output');
    const encryptBtn = document.getElementById('aes-encrypt-btn');
    const decryptBtn = document.getElementById('aes-decrypt-btn');
    const salt = 'MyUniqueSalt12345'; // Harus statis untuk dekripsi

    encryptBtn.addEventListener('click', async () => {
        const password = passwordInput.value;
        const plaintext = inputArea.value;

        if (!password || !plaintext) {
            outputArea.value = "Error: Masukkan kata sandi dan teks.";
            return;
        }

        try {
            const key = await getKeyFromPassword(password, salt, "encrypt");
            const iv = crypto.getRandomValues(new Uint8Array(12)); // Initialization Vector (IV) harus 12 byte untuk AES-GCM
            const encoded = new TextEncoder().encode(plaintext);

            const ciphertext = await crypto.subtle.encrypt(
                { name: "AES-GCM", iv: iv },
                key,
                encoded
            );

            // Gabungkan IV dan Ciphertext agar dapat didekripsi
            const ivHex = arrayBufferToHex(iv.buffer);
            const cipherHex = arrayBufferToHex(ciphertext);
            outputArea.value = `IV:${ivHex}\nCIPHER:${cipherHex}`;
        } catch (e) {
            outputArea.value = `Enkripsi Gagal: ${e.message}`;
        }
    });

    decryptBtn.addEventListener('click', async () => {
        const password = passwordInput.value;
        const input = inputArea.value; // Diharapkan format IV:hex\nCIPHER:hex

        if (!password || !input) {
            outputArea.value = "Error: Masukkan kata sandi dan teks enkripsi (IV dan CIPHER).";
            return;
        }

        try {
            const parts = input.split('\n');
            const ivHex = parts.find(p => p.startsWith('IV:')).replace('IV:', '');
            const cipherHex = parts.find(p => p.startsWith('CIPHER:')).replace('CIPHER:', '');

            const iv = hexToArrayBuffer(ivHex);
            const ciphertext = hexToArrayBuffer(cipherHex);

            const key = await getKeyFromPassword(password, salt, "decrypt");

            const decrypted = await crypto.subtle.decrypt(
                { name: "AES-GCM", iv: new Uint8Array(iv) },
                key,
                ciphertext
            );

            outputArea.value = new TextDecoder().decode(decrypted);
        } catch (e) {
            outputArea.value = `Dekripsi Gagal. Pastikan kata sandi dan format input benar. Error: ${e.message}`;
        }
    });
}
// ... (Setelah initFileHash)

// --- LOGIKA SPESIFIK TAB WPF AES ---

function initWpfAes() {
    const encInput = document.getElementById("encInput");
    const encKey = document.getElementById("encKey");
    const encOutput = document.getElementById("encOutput");
    const decInput = document.getElementById("decInput");
    const decKey = document.getElementById("decKey");
    const decOutput = document.getElementById("decOutput");
    const btnEncrypt = document.getElementById("wpf-aes-encrypt-btn");
    const btnDecrypt = document.getElementById("wpf-aes-decrypt-btn");

    // Fungsi utilitas yang mendefinisikan IV Nol
    function zeroIV() {
        // IV harus 16 byte (128 bit) untuk AES
        return CryptoJS.lib.WordArray.create(new Array(4).fill(0));
    }

    /**
     * FUNGSI ENKRIPSI (Sesuai dengan kode Anda)
     */
    function encryptForWPF() {
        const text = encInput.value;
        const key = encKey.value;

        if (!text || !key) {
            encOutput.value = "Error: Teks atau Kunci tidak boleh kosong.";
            return;
        }

        try {
            const encrypted = CryptoJS.AES.encrypt(
                CryptoJS.enc.Utf8.parse(text),
                CryptoJS.enc.Utf8.parse(key),
                { iv: zeroIV(), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
            );

            // Kita hanya mengambil bagian ciphertext, di-Base64-kan
            encOutput.value = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
        } catch (e) {
            encOutput.value = `Enkripsi Gagal: ${e.message}`;
        }
    }

    /**
     * FUNGSI DEKRIPSI (Sesuai dengan kode Anda)
     */
    function decryptFromWPF() {
        const cipher = decInput.value;
        const key = decKey.value;

        if (!cipher || !key) {
            decOutput.value = "Error: Ciphertext atau Kunci tidak boleh kosong.";
            return;
        }

        try {
            // Kita perlu membuat objek CipherParams yang hanya berisi ciphertext
            const decrypted = CryptoJS.AES.decrypt(
                { ciphertext: CryptoJS.enc.Base64.parse(cipher) },
                CryptoJS.enc.Utf8.parse(key),
                { iv: zeroIV(), mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
            );

            decOutput.value = decrypted.toString(CryptoJS.enc.Utf8);
        } catch (e) {
            decOutput.value = `Dekripsi Gagal. Pastikan Kunci dan Ciphertext benar. Error: ${e.message}`;
        }
    }

    // Event Listeners
    btnEncrypt.addEventListener('click', encryptForWPF);
    btnDecrypt.addEventListener('click', decryptFromWPF);

    // Set nilai default untuk memudahkan testing
    encKey.value = '1234567890123456';
    encInput.value = 'Teks rahasia yang akan diuji.';
    decKey.value = '1234567890123456';
}

function initFileHash() {
    const fileInput = document.getElementById('hash-file-input');
    const calculateBtn = document.getElementById('hash-calculate-btn');
    const outputArea = document.getElementById('hash-output');

    calculateBtn.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (!file) {
            outputArea.value = 'Error: Pilih file terlebih dahulu.';
            return;
        }

        outputArea.value = 'Menghitung hash...';

        try {
            const buffer = await file.arrayBuffer();
            const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
            const hashHex = arrayBufferToHex(hashBuffer);
            outputArea.value = hashHex;
        } catch (e) {
            outputArea.value = `Gagal menghitung hash: ${e.message}`;
        }
    });
}
const URLShortenerContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">URL Shortener</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <label for="long-url" class="block text-sm font-medium text-gray-700 mb-2">Masukkan URL Panjang:</label>
        <input type="url" id="long-url" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" placeholder="https://situs-saya-yang-sangat-panjang.com/halaman/detail/12345">
        
        <div class="mt-4 mb-4">
            <label class="block text-sm font-medium text-gray-700 mb-2">Pilih Layanan Pemendek URL:</label>
            <div id="api-choices" class="flex flex-wrap gap-4">
                <label class="inline-flex items-center">
                    <input type="radio" name="api_service" value="bitly" id="api-bitly" class="form-radio text-indigo-600" checked>
                    <span class="ml-2 text-gray-700">Bitly <span id="bitly-count-display" class="text-xs text-red-500 font-semibold"></span></span>
                </label>
                <label class="inline-flex items-center">
                    <input type="radio" name="api_service" value="shrtlnk" id="api-shrtlnk" class="form-radio text-indigo-600">
                    <span class="ml-2 text-gray-700">shrtlnk.dev</span>
                </label>
                <label class="inline-flex items-center">
                    <input type="radio" name="api_service" value="isgd" id="api-isgd" class="form-radio text-indigo-600">
                    <span class="ml-2 text-gray-700">is.gd</span>
                </label>
            </div>
            <p id="bitly-limit-msg" class="text-xs text-red-600 mt-2 hidden">Batas penggunaan Bitly (10x per bulan) sudah tercapai.</p>
        </div>
        <button id="shorten-btn" class="mt-4 w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150">
            Persingkat URL
        </button>
        <div id="short-url-result" class="mt-6 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-gray-700 hidden">
            </div>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;

const CurrencyConverterContent = `
    <h2 class="text-2xl font-bold text-orange-700 mb-4 flex items-center">
        <i data-lucide="wallet" class="w-6 h-6 mr-3"></i> Currency Converter
    </h2>
    <div class="bg-white p-6 rounded-xl shadow-lg space-y-6">
        <div id="converter-status" class="p-3 bg-blue-100 text-blue-800 rounded-lg text-sm">
            Memuat daftar mata uang...
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div class="md:col-span-2">
                <label for="amount-input" class="block text-sm font-medium text-gray-700 mb-1">Jumlah</label>
                <input type="number" id="amount-input" value="1.00" min="0.01" step="0.01" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 text-lg">
            </div>

            <div>
                <label for="currency-from" class="block text-sm font-medium text-gray-700 mb-1">Dari</label>
                <select id="currency-from" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"></select>
            </div>

            <div class="flex justify-center h-full">
                <button id="swap-currencies-btn" class="p-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition duration-150">
                    <i data-lucide="arrow-left-right" class="w-5 h-5"></i>
                </button>
            </div>

            <div>
                <label for="currency-to" class="block text-sm font-medium text-gray-700 mb-1">Ke</label>
                <select id="currency-to" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"></select>
            </div>
        </div>

        <div class="p-4 bg-orange-50 border border-orange-300 rounded-lg">
            <p class="text-sm font-medium text-orange-800 mb-1">Hasil Konversi (Standar):</p>
            <p id="conversion-output" class="text-2xl font-extrabold text-gray-900">0.00</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                <p class="text-sm font-medium text-gray-700 mb-1">Diterima Bersih (Biaya 3%):</p>
                <p id="output-3-percent" class="text-xl font-bold text-green-700">0.00</p>
            </div>
            <div class="p-4 bg-gray-50 border border-gray-300 rounded-lg">
                <p class="text-sm font-medium text-gray-700 mb-1">Diterima Bersih (Biaya 4%):</p>
                <p id="output-4-percent" class="text-xl font-bold text-red-700">0.00</p>
            </div>
        </div>

    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;

const CodeConverterContent = `
    <h2 class="text-2xl font-bold text-teal-700 mb-4 flex items-center">
        <i data-lucide="code-square" class="w-6 h-6 mr-3"></i> Code Converter (Bookmarklet ↔ JavaScript)
    </h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <label for="inputCode" class="block text-sm font-medium text-gray-700 mb-2">Kode Masukan (Bookmarklet atau JavaScript):</label>
        <textarea id="inputCode" rows="8" class="w-full p-3 border border-gray-300 rounded-lg font-mono text-sm focus:ring-teal-500 focus:border-teal-500" placeholder="Masukkan kode di sini..."></textarea>
        
        <div class="mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <button id="btnToJs" class="flex-1 px-4 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition duration-150 shadow-md">
                <i data-lucide="arrow-down-to-dot" class="w-4 h-4 mr-2 inline-block"></i> Ke JavaScript Rapi
            </button>
            <button id="btnToBookmarklet" class="flex-1 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md">
                <i data-lucide="arrow-up-right-from-circle" class="w-4 h-4 mr-2 inline-block"></i> Ke Bookmarklet
            </button>
        </div>
        
        <label for="outputCode" class="block text-sm font-medium text-gray-700 mt-6 mb-2">Hasil Konversi:</label>
        <textarea id="outputCode" rows="8" readonly class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"></textarea>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const QRCodeToolContent = `
    <h2 class="text-2xl font-bold text-green-700 mb-4 flex items-center">
        <i data-lucide="scan-line" class="w-6 h-6 mr-3"></i> QR Code Generator & Reader
    </h2>
    <div class="bg-white p-6 rounded-xl shadow-lg space-y-8">

        <div class="flex border-b border-gray-200">
            <button data-qr-tab="generator" class="qr-tab-button py-2 px-4 text-sm font-medium border-b-2 border-green-500 text-green-600 transition duration-150">Generator</button>
            <button data-qr-tab="reader" class="qr-tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-green-600 hover:border-green-300 transition duration-150">Reader</button>
        </div>

        <div id="qr-tab-content">
            </div>

    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;

const BarcodeToolContent = `
    <h2 class="2xl font-bold text-blue-700 mb-4 flex items-center">
        <i data-lucide="bar-chart-3" class="w-6 h-6 mr-3"></i> Barcode Generator & Reader
    </h2>
    <div class="bg-white p-6 rounded-xl shadow-lg space-y-8">

        <div class="flex border-b border-gray-200">
            <button data-barcode-tab="generator" class="barcode-tab-button py-2 px-4 text-sm font-medium border-b-2 border-blue-500 text-blue-600 transition duration-150">Generator (Simulasi)</button>
            <button data-barcode-tab="reader" class="barcode-tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-blue-600 hover:border-blue-300 transition duration-150">Reader</button>
        </div>

        <div id="barcode-tab-content">
            </div>

    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const QR_GEN_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-green-700">QR Code Generator</h3>
    <label for="qr-data-input" class="block text-sm font-medium text-gray-700 mb-1">Teks/URL:</label>
    <input type="text" id="qr-data-input" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 mb-4" placeholder="Masukkan URL atau Teks...">
    
    <div id="qrcode-output" class="p-6 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex justify-center items-center h-48">
        <p class="text-gray-500">Hasil QR Code akan muncul di sini.</p>
    </div>
`;

const QR_READER_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-green-700">QR Code Reader</h3>
    <p class="text-sm text-gray-600 mb-4">Pilih sumber pemindaian:</p>
    
    <div class="flex space-x-4 mb-4">
        <button data-reader-option="camera" class="reader-option-btn flex-1 px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-150 shadow-md">
            <i data-lucide="webcam" class="w-4 h-4 mr-2 inline-block"></i> Kamera
        </button>
        <button data-reader-option="file" class="reader-option-btn flex-1 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md">
            <i data-lucide="file-text" class="w-4 h-4 mr-2 inline-block"></i> File Gambar
        </button>
    </div>

    <div id="reader-container" class="mt-4 p-4 bg-gray-100 rounded-lg border">
        <div id="qr-reader-area" class="w-full" style="max-width:400px; margin: auto;"></div>
        <input type="file" id="qr-file-input" accept="image/*" class="hidden mt-4 w-full">
    </div>

    <label for="qr-reader-output" class="block text-sm font-medium text-gray-700 mt-4 mb-1">Hasil Pemindaian:</label>
    <textarea id="qr-reader-output" rows="2" readonly class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"></textarea>
`;

// --- KONTEN TAB SPESIFIK BARCODE (Simulasi Generator) ---

const BARCODE_GEN_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-blue-700">Barcode Generator (Simulasi)</h3>
    <p class="text-sm text-gray-600 mb-4">Untuk generator barcode yang kompleks (misal: EAN-13, Code 128) memerlukan library spesifik. Bagian ini hanya menampilkan placeholder.</p>
    <div class="p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
        <p class="text-yellow-800 font-medium">Fitur ini memerlukan integrasi library seperti JsBarcode. Saat ini, hanya disimulasikan.</p>
    </div>
`;

const BARCODE_READER_CONTENT = `
    <h3 class="text-xl font-semibold mb-3 text-blue-700">Barcode Reader</h3>
    <p class="text-sm text-gray-600 mb-4">Pilih sumber pemindaian:</p>
    
    <div class="flex space-x-4 mb-4">
        <button data-reader-option="camera" class="reader-option-btn flex-1 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-150 shadow-md">
            <i data-lucide="webcam" class="w-4 h-4 mr-2 inline-block"></i> Kamera
        </button>
        <button data-reader-option="file" class="reader-option-btn flex-1 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md">
            <i data-lucide="file-text" class="w-4 h-4 mr-2 inline-block"></i> File Gambar
        </button>
    </div>

    <div id="reader-container" class="mt-4 p-4 bg-gray-100 rounded-lg border">
        <div id="barcode-reader-area" class="w-full" style="max-width:400px; margin: auto;"></div>
        <input type="file" id="barcode-file-input" accept="image/*" class="hidden mt-4 w-full">
    </div>

    <label for="barcode-reader-output" class="block text-sm font-medium text-gray-700 mt-4 mb-1">Hasil Pemindaian:</label>
    <textarea id="barcode-reader-output" rows="2" readonly class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"></textarea>
`;

const HIBPCheckContent = `
    <h2 class="text-2xl font-bold text-red-700 mb-4">HIBP Check (Periksa Kebocoran Kata Sandi)</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="text-sm text-gray-600 mb-4">Periksa apakah kata sandi Anda pernah bocor dalam pelanggaran data publik. Aplikasi hanya mengirimkan 5 karakter pertama dari hash SHA-1 kata sandi Anda.</p>
        
        <label for="hibp-password-input" class="block text-sm font-medium text-gray-700 mb-2">Masukkan Kata Sandi:</label>
        <div class="relative mb-4">
            <input type="password" id="hibp-password-input" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Kata sandi yang ingin dicek">
            <button type="button" id="toggle-password-hibp" class="absolute inset-y-0 right-0 px-3 text-gray-500 hover:text-gray-800">
                <i data-lucide="eye" class="w-5 h-5"></i>
            </button>
        </div>
        
        <button id="check-hibp-btn" class="w-full px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md">
            Cek Kebocoran
        </button>
        
        <div id="hibp-result" class="mt-6 p-4 rounded-lg min-h-[50px] flex items-center justify-center whitespace-pre-wrap">
            <p class="text-gray-600">Tekan "Cek Kebocoran" untuk memulai.</p>
        </div>
    </div>
    <button class="mt-6 text-red-600 font-medium hover:text-red-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const PasswordGeneratorContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Password Generator (Generator Kata Sandi)</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        
        <div class="mb-4">
            <label for="password-length" class="block text-sm font-medium text-gray-700 mb-2">Panjang Kata Sandi (6-128):</label>
            <input type="range" id="password-length" min="6" max="128" value="16" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
            <div class="text-center text-indigo-700 font-semibold mt-1" id="length-display">16</div>
        </div>

        <div class="grid grid-cols-2 gap-4 mb-6 text-sm">
            <label class="inline-flex items-center">
                <input type="checkbox" id="gen-uppercase" checked class="form-checkbox text-indigo-600">
                <span class="ml-2 text-gray-700">Huruf Besar (A-Z)</span>
            </label>
            <label class="inline-flex items-center">
                <input type="checkbox" id="gen-lowercase" checked class="form-checkbox text-indigo-600">
                <span class="ml-2 text-gray-700">Huruf Kecil (a-z)</span>
            </label>
            <label class="inline-flex items-center">
                <input type="checkbox" id="gen-numbers" checked class="form-checkbox text-indigo-600">
                <span class="ml-2 text-gray-700">Angka (0-9)</span>
            </label>
            <label class="inline-flex items-center">
                <input type="checkbox" id="gen-common-symbols" checked class="form-checkbox text-indigo-600">
                <span class="ml-2 text-gray-700">Simbol Umum (!@#$)</span>
            </label>
            <label class="inline-flex items-center">
                <input type="checkbox" id="gen-unique-symbols" class="form-checkbox text-indigo-600">
                <span class="ml-2 text-gray-700">Simbol Unik (&*^%)</span>
            </label>
            <label class="inline-flex items-center">
                <input type="checkbox" id="gen-readable" class="form-checkbox text-indigo-600">
                <span class="ml-2 text-gray-700">Mudah Dibaca</span>
            </label>
        </div>

        <button id="generate-btn" class="w-full px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md">
            Generate Kata Sandi
        </button>

        <div id="password-result-container" class="mt-6 hidden">
            <label class="block text-sm font-medium text-gray-700 mb-2">Kata Sandi Baru:</label>
            <div class="flex items-center space-x-2">
                <input type="text" id="password-output" readonly class="w-full p-3 border border-gray-300 rounded-lg font-mono text-lg select-all bg-gray-50">
                <button id="copy-password-btn" class="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150">
                    <i data-lucide="copy" class="w-5 h-5"></i>
                </button>
            </div>
            <p id="password-strength" class="mt-2 text-sm font-semibold"></p>
        </div>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
async function sha1(str) {
    const buffer = new TextEncoder("utf-8").encode(str);
    const hashBuffer = await crypto.subtle.digest("SHA-1", buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex.toUpperCase();
}
function initHIBPCheck() {
    const passwordInput = document.getElementById('hibp-password-input');
    const checkBtn = document.getElementById('check-hibp-btn');
    const resultDiv = document.getElementById('hibp-result');
    const toggleBtn = document.getElementById('toggle-password-hibp');

    if (!checkBtn) return;

    // Toggle tampilan password
    toggleBtn.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        const icon = type === 'password' ? 'eye' : 'eye-off';
        // Asumsi Anda menggunakan library ikon seperti Lucide, ganti ikon di sini
        toggleBtn.innerHTML = `<i data-lucide="${icon}" class="w-5 h-5"></i>`; 
    });

    checkBtn.addEventListener('click', async () => {
        const password = passwordInput.value.trim();
        if (password.length < 4) {
            resultDiv.innerHTML = `<p class="text-red-600 font-bold">Kata sandi minimal 4 karakter.</p>`;
            resultDiv.classList.add('bg-red-100');
            return;
        }

        checkBtn.disabled = true;
        checkBtn.textContent = 'Menghitung Hash & Mengecek...';
        resultDiv.classList.remove('bg-green-100', 'bg-red-100', 'border-red-300', 'border-green-300');
        resultDiv.innerHTML = `<p class="text-gray-600">Menganalisis...</p>`;

        try {
            const hash = await sha1(password);
            const prefix = hash.substring(0, 5);
            const suffix = hash.substring(5);

            const apiUrl = `https://api.pwnedpasswords.com/range/${prefix}`;

            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error('Gagal mengakses API HIBP.');
            }

            const text = await response.text();
            
            // Mencari suffix (sisa hash) dalam respons
            const lines = text.split('\r\n');
            let foundCount = 0;
            
            for (const line of lines) {
                const [lineSuffix, count] = line.split(':');
                if (lineSuffix === suffix) {
                    foundCount = parseInt(count, 10);
                    break;
                }
            }

            if (foundCount > 0) {
                resultDiv.innerHTML = `
                    <p class="text-red-700 font-bold text-center">❌ BAHAYA! Kata sandi ini telah bocor</p><br>
                    <p class="text-center mt-2">Ditemukan <b>${foundCount.toLocaleString()}</b> kali dalam pelanggaran data. Segera ganti kata sandi Anda!</p>
                `;
                resultDiv.classList.add('bg-red-100', 'border', 'border-red-300');
            } else {
                resultDiv.innerHTML = `
                    <p class="text-green-700 font-bold text-center">✅ AMAN! Tidak ditemukan dalam database kebocoran HIBP.</p><br>
                    <p class="text-center mt-2">Selalu gunakan kata sandi unik dan kuat.</p>
                `;
                resultDiv.classList.add('bg-green-100', 'border', 'border-green-300');
            }

        } catch (error) {
            console.error(error);
            resultDiv.innerHTML = `<p class="text-red-700">Terjadi kesalahan: ${error.message}</p>`;
            resultDiv.classList.add('bg-red-100');
        } finally {
            checkBtn.disabled = false;
            checkBtn.textContent = 'Cek Kebocoran';
        }
    });
}
// --- FUNGSI UTAMA QR CODE & BARCODE ---

let qrCodeScanner = null; // Instansi global untuk scanner
let isCameraActive = false;

function stopScanner() {
    if (qrCodeScanner && isCameraActive) {
        qrCodeScanner.stop().then(() => {
            isCameraActive = false;
        }).catch(err => {
            console.error("Gagal menghentikan scanner:", err);
            isCameraActive = false;
        });
    }
}

function initQRCodeTool() {
    const tabContentArea = document.getElementById('qr-tab-content');
    const tabButtons = document.querySelectorAll('.qr-tab-button');

    // Default ke generator
    renderQrTab('generator');

    // Event listener untuk tombol tab
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabKey = button.getAttribute('data-qr-tab');
            renderQrTab(tabKey);
        });
    });

    function renderQrTab(tabKey) {
        stopScanner(); // Hentikan kamera jika tab berubah

        tabButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-qr-tab') === tabKey;
            btn.classList.toggle('border-green-500', isActive);
            btn.classList.toggle('text-green-600', isActive);
            btn.classList.toggle('border-transparent', !isActive);
            btn.classList.toggle('text-gray-500', !isActive);
        });

        if (tabKey === 'generator') {
            tabContentArea.innerHTML = QR_GEN_CONTENT;
            initQrGenerator();
        } else if (tabKey === 'reader') {
            tabContentArea.innerHTML = QR_READER_CONTENT;
            initQrBarcodeReader('qr-reader-area', 'qr-file-input', 'qr-reader-output');
        }
        lucide.createIcons();
    }
}

function initBarcodeTool() {
    const tabContentArea = document.getElementById('barcode-tab-content');
    const tabButtons = document.querySelectorAll('.barcode-tab-button');

    // Default ke generator simulasi
    renderBarcodeTab('generator');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabKey = button.getAttribute('data-barcode-tab');
            renderBarcodeTab(tabKey);
        });
    });

    function renderBarcodeTab(tabKey) {
        stopScanner(); // Hentikan kamera jika tab berubah

        tabButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-barcode-tab') === tabKey;
            btn.classList.toggle('border-blue-500', isActive);
            btn.classList.toggle('text-blue-600', isActive);
            btn.classList.toggle('border-transparent', !isActive);
            btn.classList.toggle('text-gray-500', !isActive);
        });

        if (tabKey === 'generator') {
            tabContentArea.innerHTML = BARCODE_GEN_CONTENT;
            lucide.createIcons();
        } else if (tabKey === 'reader') {
            tabContentArea.innerHTML = BARCODE_READER_CONTENT;
            // Panggil dengan ID Barcode yang benar
            initQrBarcodeReader('barcode-reader-area', 'barcode-file-input', 'barcode-reader-output');
        }
        lucide.createIcons();
    }
}

// --- FUNGSI GENERATOR QR CODE (MENGGUNAKAN qrcode.js) ---

function initQrGenerator() {
    const input = document.getElementById('qr-data-input');
    const outputDiv = document.getElementById('qrcode-output');

    let qr = null; // Instansi QR Code

    function generate() {
        const text = input.value.trim();
        outputDiv.innerHTML = ''; // Bersihkan output sebelumnya

        if (text) {
            // qrcode.js memerlukan DOM element, bukan ID
            qr = new QRCode(outputDiv, {
                text: text,
                width: 150,
                height: 150,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        } else {
            outputDiv.innerHTML = '<p class="text-gray-500">Masukkan teks untuk menghasilkan QR Code.</p>';
        }
    }

    // Generate saat input berubah (debounce opsional)
    input.addEventListener('input', generate);

    // Generate QR Code awal
    input.value = 'https://app-anda.com';
    generate();
}

// --- FUNGSI READER QR CODE & BARCODE (MENGGUNAKAN html5-qrcode) ---

function initQrBarcodeReader(readerAreaId, fileInputId, outputId) {
    const outputArea = document.getElementById(outputId);
    const readerOptionBtns = document.querySelectorAll('.reader-option-btn');
    const fileInput = document.getElementById(fileInputId);

    readerOptionBtns.forEach(btn => btn.addEventListener('click', (e) => {
        const option = e.currentTarget.getAttribute('data-reader-option');
        if (option === 'camera') {
            startCamera(readerAreaId, outputArea, fileInput);
        } else {
            stopScanner();
            startFileScan(fileInput, outputArea);
        }
    }));

    // Mulai kamera default saat pertama kali dimuat
    startCamera(readerAreaId, outputArea, fileInput);

    // Fungsi untuk memulai kamera
    function startCamera(readerId, output, fileInput) {
        stopScanner(); // Pastikan scanner lain dihentikan
        document.getElementById(readerId).style.display = 'block';
        if (fileInput) fileInput.style.display = 'none';

        qrCodeScanner = new Html5Qrcode(readerId);

        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        qrCodeScanner.start(
            { facingMode: "environment" }, // Prioritaskan kamera belakang
            config,
            (decodedText, decodedResult) => {
                // Berhasil dipindai
                output.value = decodedText;
                stopScanner(); // Hentikan kamera setelah berhasil
                alert(`Hasil: ${decodedText}`);
            },
            (errorMessage) => {
                // Error / Tidak ada kode yang ditemukan (Biarkan kosong)
            }
        ).then(() => {
            isCameraActive = true;
            output.value = 'Kamera aktif... Arahkan ke Kode.';
        }).catch((err) => {
            output.value = 'Gagal memulai kamera. Pastikan izin kamera diberikan.';
            console.error("Gagal memulai kamera:", err);
        });
    }

    function startFileScan(fileInput, output) {
        const readerArea = document.getElementById(fileInput.id.replace('-file-input', '-reader-area'));

        // Tampilkan input file, sembunyikan reader area kamera
        if (readerArea) readerArea.style.display = 'none';
        fileInput.style.display = 'block';
        output.value = 'Pilih file gambar untuk dipindai.';

        // Penting: Pastikan instansi global scanner dihentikan dan di-clear
        stopScanner();

        // Buat instansi Html5Qrcode (diperlukan untuk scanFile)
        // Kita akan menggunakan ID placeholder sementara karena kita tidak menginisialisasi kamera
        const fileScannerInstance = new Html5Qrcode("dummy-reader-id-file-scan");

        // Tambahkan div placeholder ke body (di luar area konten utama)
        // Ini diperlukan karena Html5Qrcode memerlukan elemen DOM untuk diinisialisasi,
        // meskipun kita hanya menggunakan fungsi scanFile statisnya.
        if (!document.getElementById("dummy-reader-id-file-scan")) {
            const dummyDiv = document.createElement('div');
            dummyDiv.id = "dummy-reader-id-file-scan";
            dummyDiv.style.display = 'none';
            document.body.appendChild(dummyDiv);
        }

        fileInput.onchange = null; // Bersihkan listener lama

        fileInput.onchange = (e) => {
            if (e.target.files.length === 0) return;

            output.value = 'Memproses gambar... Harap tunggu.';
            const imageFile = e.target.files[0];

            // Ganti getCandidatesFromImage dengan metode scanFile dari instansi scanner
            fileScannerInstance.scanFile(imageFile, /* showImage= */ true)
                .then(decodedText => {
                    // KODE DITEMUKAN
                    output.value = decodedText;
                    alert(`Hasil dari File: ${decodedText}`);
                })
                .catch(error => {
                    // KODE TIDAK DITEMUKAN ATAU ERROR PEMROSESAN
                    output.value = `Gagal memindai (error atau kode tidak ditemukan): ${error}`;
                    console.error('Error saat memindai file:', error);
                })
                .finally(() => {
                    e.target.value = null; // Reset input file
                });
        };

        fileInput.click();
    }
}

function beautifyJavaScript(code) {
    if (!code) return '';

    // 1. Tambahkan newline setelah semicolon (;) yang tidak diikuti oleh } atau )
    let pretty = code.replace(/;(?!\s*(\}|\]|\)|\}))/g, ';\n');

    // 2. Tambahkan newline sebelum { dan }
    pretty = pretty.replace(/([\{\}])/g, '\n$1\n');

    // 3. Hapus baris kosong berlebihan
    pretty = pretty.replace(/(\n){2,}/g, '\n\n');

    // 4. Tambahkan indentasi sederhana
    let indentLevel = 0;
    let finalCode = pretty.split('\n').map(line => {
        line = line.trim();
        if (line.endsWith('}')) {
            indentLevel--;
        }
        let indent = '    '.repeat(Math.max(0, indentLevel));
        if (line.endsWith('{')) {
            indentLevel++;
        }
        return indent + line;
    }).join('\n');

    return finalCode.trim();
}

// Global scope untuk elemen yang akan diakses di init
let inputCode, outputCode, btnToJs, btnToBookmarklet;


/**
 * FUNGSI 1: Bookmarklet ke JavaScript RAPI
 */
function convertToJs() {
    let input = inputCode.value.trim();
    const prefixRegex = /^javascript:\s*/i;

    if (!prefixRegex.test(input)) {
        outputCode.value = "⚠️ Kode tidak diawali 'javascript:'. Mengembalikan input asli.";
        return;
    }

    let jsUriEncoded = input.replace(prefixRegex, '');
    let decodedJs = "";

    // 1. Ganti Karakter Non-breaking Space (\u00A0) dengan spasi biasa
    jsUriEncoded = jsUriEncoded.replace(/\u00A0/g, ' ');

    // 2. Ganti encoding parsial umum (misalnya, %27 menjadi ') sebelum decoding umum
    jsUriEncoded = jsUriEncoded.replace(/%27/g, "'");

    let cleanedJs = jsUriEncoded;

    try {
        // Coba decode.
        decodedJs = decodeURIComponent(jsUriEncoded);

        // 4. Membersihkan (menghapus void(0) di akhir, dsb.)
        cleanedJs = decodedJs.replace(/;?\s*void\s*\(?\s*0\s*\)?\s*$/, '').trim();

    } catch (e) {
        // Jika decodeURIComponent GAGAL, kita asumsikan input sudah didecode sebagian.
        console.error("URI Decoding Gagal. Menggunakan kode mentah untuk pembersihan. Error:", e);

        // Membersihkan kode mentah ini (misalnya, menghapus void(0))
        cleanedJs = jsUriEncoded.replace(/;?\s*void\s*\(?\s*0\s*\)?\s*$/, '').trim();
    }

    // 5. ✨ BEAUITFY / FORMATTING ✨
    let finalOutput = beautifyJavaScript(cleanedJs);
    outputCode.value = finalOutput;
}

/**
 * FUNGSI 2: JavaScript RAPI ke Bookmarklet
 */
function convertToBookmarklet() {
    let jsCode = inputCode.value.trim();

    if (jsCode === "") {
        outputCode.value = "Masukkan kode JavaScript yang valid untuk diubah.";
        return;
    }

    // 1. Hapus semua Newline, Spasi, dan Tab berlebihan untuk meng-inline
    let minifiedCode = jsCode.replace(/(\/\*[\s\S]*?\*\/|(?<!:)\/\/.*)/g, '') // Hapus komentar
        .replace(/[\r\n\t]/g, '') // Hapus newline dan tab
        .replace(/\s{2,}/g, ' ') // Ganti spasi berlebihan dengan satu spasi
        .replace(/\s*([,;\{\}\(\)=><!])\s*/g, '$1') // Hapus spasi di sekitar operator/tanda baca
        .trim();

    // 2. Bungkus dalam IIFE jika belum dan tambahkan void(0) (bookmarklet sering menggunakan IIFE)
    if (!minifiedCode.startsWith('(function(') && !minifiedCode.startsWith('void(')) {
        minifiedCode = `(function(){${minifiedCode}})();`;
    }

    // 3. URI Encode
    let uriEncodedCode = encodeURIComponent(minifiedCode);

    // 4. Tambahkan awalan 'javascript:'
    let bookmarklet = `javascript:${uriEncodedCode}`;

    outputCode.value = bookmarklet;
}

// --- FUNGSI TOOLS AKTIF ---

function loadTool(toolKey) {
    let content = '';

    switch (toolKey) {
        case 'url-shortener':
            content = URLShortenerContent;
            pageTitleElement.textContent = 'URL Shortener';
            break;
        case 'code-converter':
            content = CodeConverterContent;
            pageTitleElement.textContent = 'Code Converter';
            break;
        case 'currency-converter':
            content = CurrencyConverterContent;
            pageTitleElement.textContent = 'Currency Converter';
            break;
        case 'crypto-tools':
            content = CryptoToolsContent;
            pageTitleElement.textContent = 'Kriptografi & Hash';
            break;
        case 'qr-code-tool':
            content = QRCodeToolContent;
            pageTitleElement.textContent = 'QR Code Tool';
            break;
        case 'barcode-tool':
            content = BarcodeToolContent;
            pageTitleElement.textContent = 'Barcode Tool';
            break;
        case 'primbon-tool':
            content = PrimbonToolContent;
            pageTitleElement.textContent = 'Primbon Jawa';
            break;
        case 'hibp-check':
            content = HIBPCheckContent;
            pageTitleElement.textContent = 'HIBP Check';
            break;
        case 'password-generator':
            content = PasswordGeneratorContent;
            pageTitleElement.textContent = 'Password Generator';
            break;
        default:
            return;
    }

    contentArea.innerHTML = content;
    lucide.createIcons();

    if (toolKey === 'url-shortener') {
        initURLShortener();
    } else if (toolKey === 'code-converter') {
        initCodeConverter();
    } else if (toolKey === 'currency-converter') {
        initCurrencyConverter();
    } else if (toolKey === 'crypto-tools') {
        initCryptoTools();
    } else if (toolKey === 'qr-code-tool') {
        initQRCodeTool();
    } else if (toolKey === 'barcode-tool') {
        initBarcodeTool();
    } else if (toolKey === 'primbon-tool') {
        initPrimbon();
    } else if (toolKey === 'hibp-check') {
        initHIBPCheck();
    } else if (toolKey === 'password-generator') {
        initPasswordGenerator();
    }
}

// --- INISIALISASI TOOLS ---
// ===============================================
// API CONFIGURATION AND BITLY LIMIT LOGIC
// ===============================================

const BITLY_ACCESS_TOKEN = '2e1bd871a13eab0c8ff6e97d8585965ba124a35c';

// Pengaturan Batasan Bitly
const MAX_BITLY_COUNT = 10;
const BITLY_COUNT_KEY = 'bitlyUsageCount';
const BITLY_DATE_KEY = 'bitlyLastResetDate';


// Helper 1: Mengecek dan mereset hitungan bulanan
function checkAndResetBitlyCount() {
    const today = new Date();
    const lastResetDateStr = localStorage.getItem(BITLY_DATE_KEY);

    let currentCount = parseInt(localStorage.getItem(BITLY_COUNT_KEY)) || 0;
    let needsReset = true;

    if (lastResetDateStr) {
        const lastResetDate = new Date(lastResetDateStr);
        // Cek apakah bulan dan tahunnya sama
        if (lastResetDate.getMonth() === today.getMonth() && lastResetDate.getFullYear() === today.getFullYear()) {
            needsReset = false;
        }
    }

    if (needsReset) {
        // Reset hitungan untuk bulan baru
        currentCount = 0;
        localStorage.setItem(BITLY_COUNT_KEY, currentCount);
        localStorage.setItem(BITLY_DATE_KEY, today.toISOString());
    }

    return currentCount;
}


// Helper 2: Mengupdate status UI Bitly
function updateBitlyUI(currentCount) {
    const countDisplay = document.getElementById('bitly-count-display');
    const bitlyRadio = document.getElementById('api-bitly');
    const limitMsg = document.getElementById('bitly-limit-msg');

    if (!countDisplay || !bitlyRadio) return;

    if (currentCount >= MAX_BITLY_COUNT) {
        // Batas tercapai
        countDisplay.textContent = `(Batas tercapai: ${currentCount}/${MAX_BITLY_COUNT})`;
        bitlyRadio.disabled = true;
        limitMsg.classList.remove('hidden');
        if (bitlyRadio.checked) {
            // Jika Bitly terpilih, pindahkan pilihan ke API lain (misal shrtlnk)
            document.getElementById('api-shrtlnk').checked = true;
        }
    } else {
        // Batas normal
        countDisplay.textContent = `(${currentCount}/${MAX_BITLY_COUNT})`;
        bitlyRadio.disabled = false;
        limitMsg.classList.add('hidden');
    }
}


// Helper 3: Menambah hitungan Bitly
function incrementBitlyCount(currentCount) {
    const newCount = currentCount + 1;
    localStorage.setItem(BITLY_COUNT_KEY, newCount);
    updateBitlyUI(newCount); // Perbarui tampilan setelah increment
}
function initPasswordGenerator() {
    const lengthInput = document.getElementById('password-length');
    const lengthDisplay = document.getElementById('length-display');
    const generateBtn = document.getElementById('generate-btn');
    const outputInput = document.getElementById('password-output');
    const copyBtn = document.getElementById('copy-password-btn');
    const resultContainer = document.getElementById('password-result-container');

    // Update tampilan panjang saat slider digeser
    lengthInput.addEventListener('input', () => {
        lengthDisplay.textContent = lengthInput.value;
    });

    if (!generateBtn) return;

    // --- Karakter Set ---
    const CHARS = {
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        numbers: '0123456789',
        commonSymbols: '!@#$%^&*',
        uniqueSymbols: '(){}[]=-_+.?><|~`' // Diperluas
    };

    // Karakter yang mudah membingungkan/mirip (untuk opsi "Mudah Dibaca")
    const AMBIGUOUS_CHARS = 'l1oO0i';


    // Fungsi utama Generator
    generateBtn.addEventListener('click', () => {
        const length = parseInt(lengthInput.value, 10);
        const includeUpper = document.getElementById('gen-uppercase').checked;
        const includeLower = document.getElementById('gen-lowercase').checked;
        const includeNumbers = document.getElementById('gen-numbers').checked;
        const includeCommon = document.getElementById('gen-common-symbols').checked;
        const includeUnique = document.getElementById('gen-unique-symbols').checked;
        const isReadable = document.getElementById('gen-readable').checked;

        let availableChars = '';
        let requiredChars = []; // Memastikan setidaknya satu karakter dari setiap jenis yang dipilih ada

        if (includeUpper) {
            availableChars += CHARS.uppercase;
            requiredChars.push(getRandomChar(CHARS.uppercase));
        }
        if (includeLower) {
            availableChars += CHARS.lowercase;
            requiredChars.push(getRandomChar(CHARS.lowercase));
        }
        if (includeNumbers) {
            availableChars += CHARS.numbers;
            requiredChars.push(getRandomChar(CHARS.numbers));
        }
        if (includeCommon) {
            availableChars += CHARS.commonSymbols;
            requiredChars.push(getRandomChar(CHARS.commonSymbols));
        }
        if (includeUnique) {
            availableChars += CHARS.uniqueSymbols;
            requiredChars.push(getRandomChar(CHARS.uniqueSymbols));
        }

        // Hapus karakter yang ambigu jika opsi "Mudah Dibaca" dipilih
        if (isReadable) {
            AMBIGUOUS_CHARS.split('').forEach(char => {
                availableChars = availableChars.replace(new RegExp(char, 'g'), '');
            });
        }

        if (availableChars.length === 0) {
            alert("Pilih setidaknya satu jenis karakter untuk membuat kata sandi.");
            return;
        }

        // Fungsi helper untuk mendapatkan karakter acak
        function getRandomChar(charSet) {
            return charSet[Math.floor(Math.random() * charSet.length)];
        }

        let password = '';

        // 1. Masukkan karakter yang diperlukan (untuk memastikan keragaman)
        requiredChars.forEach(char => {
            // Masukkan secara acak ke dalam password
            const index = Math.floor(Math.random() * (password.length + 1));
            password = password.slice(0, index) + char + password.slice(index);
        });

        // 2. Isi sisa panjang kata sandi
        while (password.length < length) {
            password += getRandomChar(availableChars);
        }

        // 3. Acak seluruh string sekali lagi untuk distribusi yang lebih baik
        password = password.split('').sort(() => 0.5 - Math.random()).join('');

        // Output dan Kekuatan
        outputInput.value = password;
        resultContainer.classList.remove('hidden');
        displayPasswordStrength(password);
    });

    // Fungsi untuk menampilkan kekuatan password (Contoh sederhana)
    function displayPasswordStrength(password) {
        // Implementasi sederhana: Cek panjang dan keragaman karakter
        const strengthDisplay = document.getElementById('password-strength');
        let score = 0;
        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;
        if (/[A-Z]/.test(password)) score += 1;
        if (/[a-z]/.test(password)) score += 1;
        if (/[0-9]/.test(password)) score += 1;
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        let level, color;
        if (score <= 2) {
            level = "Sangat Lemah"; color = "text-red-600";
        } else if (score <= 4) {
            level = "Sedang"; color = "text-yellow-600";
        } else {
            level = "Sangat Kuat"; color = "text-green-600";
        }

        strengthDisplay.textContent = `Kekuatan: ${level}`;
        strengthDisplay.className = `mt-2 text-sm font-semibold ${color}`;
    }

    // Fungsi Copy
    copyBtn.addEventListener('click', () => {
        outputInput.select();
        navigator.clipboard.writeText(outputInput.value)
            .then(() => alert('Kata sandi berhasil disalin!'))
            .catch(() => alert('Gagal menyalin kata sandi.'));
    });
}

function initURLShortener() {
    // 1. Inisialisasi dan Cek Batasan
    const currentCount = checkAndResetBitlyCount();
    updateBitlyUI(currentCount); // Tampilkan status awal

    const longUrlInput = document.getElementById('long-url');
    const shortenBtn = document.getElementById('shorten-btn');
    const resultDiv = document.getElementById('short-url-result');

    if (!shortenBtn) return;

    // --- Fungsi Internal untuk Menangani API Call ---
    async function executeShortening(service, longUrl) {
        let apiUrl = '';
        let options = {};
        let shortUrlKey = '';
        let errorKey = '';
        let successAction = () => { }; // Fungsi yang dijalankan saat sukses (misalnya increment hitungan)

        switch (service) {
            case 'bitly':
                if (currentCount >= MAX_BITLY_COUNT) {
                    throw new Error('Batas penggunaan Bitly telah tercapai bulan ini. Silakan pilih layanan lain.');
                }
                if (BITLY_ACCESS_TOKEN === 'YOUR_BITLY_ACCESS_TOKEN' || !BITLY_ACCESS_TOKEN) {
                    throw new Error('Token Akses Bitly belum diatur.');
                }
                apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
                options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${BITLY_ACCESS_TOKEN}`
                    },
                    body: JSON.stringify({ "long_url": longUrl })
                };
                shortUrlKey = 'link';
                successAction = () => incrementBitlyCount(currentCount); // Tambah hitungan Bitly
                break;

            case 'shrtlnk':
                apiUrl = 'https://api.shrtlnk.dev/v1/link'; // Mengasumsikan CORS bekerja di sini
                options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ url: longUrl })
                };
                shortUrlKey = 'short_url';
                break;

            case 'isgd':
                // Perhatian: Ini rentan terhadap masalah CORS (seperti yang Anda alami sebelumnya)
                apiUrl = `https://is.gd/create.php?url=${encodeURIComponent(longUrl)}&format=json`;
                options = { method: 'GET' };
                shortUrlKey = 'shorturl';
                break;

            default:
                throw new Error('Layanan pemendek URL tidak valid atau tidak dipilih.');
        }

        const response = await fetch(apiUrl, options);
        const data = await response.json();

        if (response.ok && data[shortUrlKey]) {
            successAction(); // Panggil increment jika Bitly
            return data[shortUrlKey];
        } else {
            // Penanganan error umum untuk semua API
            const errorMsg = data.message || data.errormsg || `API ${service} gagal. Status: ${response.status}`;
            throw new Error(errorMsg);
        }
    }
    // --- Akhir Fungsi Internal ---


    shortenBtn.addEventListener('click', async () => {
        const longUrl = longUrlInput.value.trim();
        const selectedService = document.querySelector('input[name="api_service"]:checked').value;

        if (!longUrl || !longUrl.startsWith('http')) {
            resultDiv.innerHTML = `<p class="text-red-600 font-bold">Harap masukkan URL yang valid (harus diawali http/https).</p>`;
            resultDiv.classList.remove('hidden');
            return;
        }

        shortenBtn.disabled = true;
        shortenBtn.textContent = `Memproses (${selectedService})...`;
        resultDiv.classList.add('hidden');
        resultDiv.innerHTML = '';

        try {
            const shortUrl = await executeShortening(selectedService, longUrl);

            // Tampilkan Hasil Sukses
            resultDiv.innerHTML = `
                <p class="text-sm font-medium mb-1">URL Pendek (${selectedService.toUpperCase()}):</p>
                <a href="${shortUrl}" target="_blank" class="text-indigo-600 truncate block font-mono bg-white p-2 rounded">${shortUrl}</a>
                <button class="mt-2 text-sm text-indigo-600 hover:text-indigo-800 font-semibold" onclick="navigator.clipboard.writeText('${shortUrl}').then(() => alert('URL disalin!'))">
                    [Salin URL]
                </button>
            `;
            resultDiv.classList.remove('hidden');

        } catch (error) {
            // Tampilkan Error
            resultDiv.innerHTML = `<p class="text-red-600 font-bold">Gagal (${selectedService.toUpperCase()}): ${error.message}</p>`;
            resultDiv.classList.remove('hidden');

        } finally {
            shortenBtn.disabled = false;
            shortenBtn.textContent = 'Persingkat URL';
        }
    });

    // Panggil update UI lagi untuk memastikan status benar jika user pindah tab
    updateBitlyUI(currentCount);
}

function initCodeConverter() {
    // Ambil elemen DOM dari CodeConverterContent
    inputCode = document.getElementById('inputCode');
    outputCode = document.getElementById('outputCode');
    btnToJs = document.getElementById('btnToJs');
    btnToBookmarklet = document.getElementById('btnToBookmarklet');

    // Tambahkan Event Listeners
    btnToJs.addEventListener('click', convertToJs);
    btnToBookmarklet.addEventListener('click', convertToBookmarklet);

    // Contoh untuk demonstrasi saat alat dimuat
    inputCode.value = "javascript:(function(){var a=prompt('Enter name:');if(a){document.body.innerHTML='Hello '+a;}else{alert('Canceled');}})();void(0)";

    // Jalankan konversi awal untuk mengisi outputCode
    convertToJs();
}

let exchangeRates = {}; // Menyimpan data kurs dari API

async function initCurrencyConverter() {
    const statusDiv = document.getElementById('converter-status');
    const amountInput = document.getElementById('amount-input');
    const currencyFrom = document.getElementById('currency-from');
    const currencyTo = document.getElementById('currency-to');
    // const convertBtn = document.getElementById('convert-btn'); // Dihapus!
    const swapBtn = document.getElementById('swap-currencies-btn');
    const outputDiv = document.getElementById('conversion-output');

    // Output Biaya Baru
    const output3Percent = document.getElementById('output-3-percent');
    const output4Percent = document.getElementById('output-4-percent');

    statusDiv.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 mr-1 inline-block animate-spin"></i> Memuat data kurs...`;

    // 1. Ambil Data Kurs dari API
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/IDR';
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Gagal mengambil data kurs.');
        const data = await response.json();

        exchangeRates = data.rates;
        const currencies = Object.keys(exchangeRates).sort();

        // 2. Isi Dropdown
        currencyFrom.innerHTML = currencies.map(c => `<option value="${c}">${c}</option>`).join('');
        currencyTo.innerHTML = currencies.map(c => `<option value="${c}">${c}</option>`).join('');

        // Set nilai default yang wajar
        currencyFrom.value = 'IDR';
        currencyTo.value = 'USD';

        statusDiv.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 mr-1 inline-block"></i> Data kurs siap. Basis: ${data.base}.`;
        statusDiv.classList.remove('bg-blue-100');
        statusDiv.classList.add('bg-green-100', 'text-green-800');

        lucide.createIcons();

        // Lakukan konversi awal
        convertCurrency();

    } catch (error) {
        statusDiv.innerHTML = `<i data-lucide="alert-triangle" class="w-4 h-4 mr-1 inline-block"></i> Gagal memuat kurs: ${error.message}`;
        statusDiv.classList.remove('bg-blue-100');
        statusDiv.classList.add('bg-red-100', 'text-red-800');
        console.error('Error memuat kurs:', error);
    }

    // 3. Fungsi Konversi Inti (DIUBAH)
    function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const from = currencyFrom.value;
        const to = currencyTo.value;

        // Fungsi utilitas untuk memformat output mata uang
        function formatCurrency(value, currencyCode) {
            return new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: currencyCode,
                minimumFractionDigits: 2,
                maximumFractionDigits: 4
            }).format(value);
        }

        if (isNaN(amount) || amount <= 0 || !exchangeRates[from] || !exchangeRates[to]) {
            outputDiv.textContent = 'Masukkan jumlah yang valid.';
            output3Percent.textContent = '0.00';
            output4Percent.textContent = '0.00';
            return;
        }

        // Rumus Konversi Standar (menggunakan IDR sebagai mata uang dasar API)
        const amountInIdr = amount / exchangeRates[from];
        const resultStandard = amountInIdr * exchangeRates[to];

        // Tampilkan Hasil Konversi Standar
        outputDiv.textContent = formatCurrency(resultStandard, to);

        // **LOGIKA PERHITUNGAN BIAYA BARU**

        // Perhitungan Biaya 3%
        const fee3Percent = 0.03;
        const netResult3 = resultStandard * (1 - fee3Percent);
        output3Percent.textContent = formatCurrency(netResult3, to);

        // Perhitungan Biaya 4%
        const fee4Percent = 0.04;
        const netResult4 = resultStandard * (1 - fee4Percent);
        output4Percent.textContent = formatCurrency(netResult4, to);
    }

    // 4. Event Listeners (Tanpa Tombol Konversi)
    swapBtn.addEventListener('click', () => {
        const temp = currencyFrom.value;
        currencyFrom.value = currencyTo.value;
        currencyTo.value = temp;
        convertCurrency(); // Konversi setelah swap
    });

    // Langsung konversi saat input atau dropdown berubah
    amountInput.addEventListener('input', convertCurrency);
    currencyFrom.addEventListener('change', convertCurrency);
    currencyTo.addEventListener('change', convertCurrency);
}
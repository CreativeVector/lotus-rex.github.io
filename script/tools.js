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
const CSVtoJSONConverterContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">CSV to JSON Converter</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="mb-4 text-gray-600">Tempel data CSV Anda di bawah, atau muat langsung dari file (.csv).</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Input CSV:</label>
                
                <div class="mb-3 flex items-center gap-3">
                    <input type="file" id="csvFile" accept=".csv" class="hidden"> 
                    <button id="uploadFileBtn" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition text-sm">
                        ⬆️ Pilih File CSV
                    </button>
                    <span id="fileNameDisplay" class="text-sm text-gray-500 truncate italic max-w-full">Tidak ada file dipilih</span>
                </div>
                <textarea id="csvInput" rows="15" placeholder="Contoh:&#10;nama,usia,kota&#10;Budi,25,Jakarta&#10;Ani,30,Bandung" 
                    class="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>

            <div>
                <label for="jsonOutput" class="block text-sm font-medium text-gray-700 mb-2">Output JSON:</label>
                <textarea id="jsonOutput" rows="15" readonly placeholder="[&#10;  {&#10;    \"nama\": \"Budi\",&#10;    \"usia\": \"25\",&#10;    \"kota\": \"Jakarta\"&#10;  }&#10;]" 
                    class="w-full p-3 border rounded-lg bg-gray-50"></textarea>
            </div>
        </div>

        <div class="toolbar mt-6 flex flex-col md:flex-row gap-3 justify-end">
            <button id="convertBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                Konversi ke JSON
            </button>
            <button id="copyBtn" class="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition">
                Salin JSON
            </button>
            <button id="saveBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                💾 Simpan JSON
            </button>
        </div>
        
        <p id="statusMessage" class="mt-4 text-center text-sm text-gray-500"></p>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const DataValidatorContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Data Validator (Regex)</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="mb-4 text-gray-600">Uji pola Regular Expression (Regex) Anda terhadap data sampel untuk memvalidasi format.</p>

        <div class="mb-5">
            <label for="regexInput" class="block text-sm font-medium text-gray-700 mb-2">Pola Regular Expression (Regex):</label>
            <input type="text" id="regexInput" value="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/g" 
                placeholder="Misal: /^\\d{4}$/"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            <p class="text-xs text-gray-500 mt-1">Gunakan format **/.../flags** </p>
        </div>

        <div class="mb-5">
            <label for="sampleDataInput" class="block text-sm font-medium text-gray-700 mb-2">Data Sampel (Pisahkan dengan baris baru):</label>
            <textarea id="sampleDataInput" rows="10" placeholder="Masukkan setiap item data per baris.&#10;Contoh:&#10;tes@email.com&#10;format_salah"
                class="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>

        <div class="toolbar mt-6 flex justify-end">
            <button id="validateBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                ⚡ Uji Validasi
            </button>
        </div>

        <div class="mt-6 p-4 border rounded-lg bg-gray-50">
            <h3 class="text-lg font-semibold mb-2">Hasil Validasi:</h3>
            <div id="validationOutput" class="space-y-2 text-sm max-h-60 overflow-y-auto">
                <p class="text-gray-500">Hasil akan muncul di sini setelah Anda menekan tombol "Uji Validasi".</p>
            </div>
        </div>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const Base64ConverterContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Base64 Encoder/Decoder</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">

        <div class="flex border-b mb-4">
            <button data-tab="text" class="tab-internal py-2 px-4 font-semibold border-b-2 border-indigo-500 text-indigo-600" id="tabText">Teks/String</button>
            <button data-tab="file" class="tab-internal py-2 px-4 font-semibold border-b-2 border-transparent text-gray-500 hover:text-indigo-600 hover:border-indigo-200" id="tabFile">File ke Base64</button>
        </div>

        <div id="base64ContentArea">
            <div id="content-text" class="tab-content">
                <p class="text-gray-600 mb-4">Masukkan teks di bawah untuk mengkodekan atau mendekodekannya.</p>
                <textarea id="base64TextInput" rows="5" placeholder="Masukkan teks atau string Base64 di sini..."
                    class="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 font-mono"></textarea>

                <div class="toolbar mt-4 flex flex-col md:flex-row gap-3 justify-end">
                    <button id="encodeTextBtn" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                        Encode ke Base64
                    </button>
                    <button id="decodeTextBtn" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                        Decode dari Base64
                    </button>
                </div>

                <div class="mt-4 p-4 border rounded-lg bg-gray-50">
                    <h3 class="text-lg font-semibold mb-2">Hasil:</h3>
                    <textarea id="base64TextOutput" rows="5" readonly placeholder="Output Base64 atau Teks Biasa"
                        class="w-full p-3 border rounded-lg bg-gray-100 font-mono text-xs"></textarea>
                </div>
            </div>

            <div id="content-file" class="tab-content hidden">
                <p class="text-gray-600 mb-4">Pilih file untuk dikonversi menjadi Data URI (Base64). Hasil akan tampil di bawah.</p>
                
                <input type="file" id="base64FileInput" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">

                <div class="mt-4 p-4 border rounded-lg bg-gray-50">
                    <h3 class="text-lg font-semibold mb-2 flex justify-between items-center">
                        Hasil Data URI (Base64)
                        <span id="fileTypeDisplay" class="text-xs font-normal text-gray-500"></span>
                    </h3>
                    <textarea id="base64FileOutput" rows="10" readonly placeholder="Data:image/png;base64,iVBORw..."
                        class="w-full p-3 border rounded-lg bg-gray-100 font-mono text-xs"></textarea>
                </div>
            </div>
        </div>
        <p id="base64StatusMessage" class="mt-4 text-center text-sm text-gray-500"></p>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const ColorExtractorContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Color Palette Extractor</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="text-gray-600 mb-4">Unggah gambar (.jpg, .png) untuk menganalisis dan mengekstrak palet warna dominannya. (Maks 10 Warna)</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-1">
                <input type="file" id="imageInput" accept="image/*" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                
                <h3 class="text-lg font-semibold mt-4 mb-2 text-gray-700">Preview Gambar:</h3>
                <div id="imagePreviewContainer" class="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden border">
                    <img id="imagePreview" class="max-w-full max-h-full object-contain hidden" crossorigin="anonymous" alt="Image Preview">
                    <canvas id="colorCanvas" class="hidden"></canvas>
                    <p id="placeholderText" class="text-gray-500 text-sm">Unggah gambar...</p>
                </div>

                <div class="mt-4 flex flex-col gap-2">
                    <label for="colorCount" class="text-sm font-medium text-gray-700">Jumlah Warna (2-10):</label>
                    <input type="number" id="colorCount" value="8" min="2" max="10" 
                        class="p-2 border rounded-lg w-full focus:ring-blue-500 focus:border-blue-500">
                    <button id="extractBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition mt-2" disabled>
                        🎨 Ekstrak Palet
                    </button>
                </div>
            </div>

            <div class="md:col-span-2">
                <h3 class="text-lg font-semibold mb-3 text-gray-700">Palet Warna Hasil:</h3>
                <div id="paletteOutput" class="space-y-4">
                    <p class="text-gray-500 text-center p-10 border rounded-lg bg-gray-50">Palet warna akan ditampilkan di sini.</p>
                </div>
            </div>
        </div>

        <p id="colorStatusMessage" class="mt-4 text-center text-sm text-gray-500"></p>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const ColorGeneratorContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Color Palette Generator</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="text-gray-600 mb-6">Buat palet warna yang harmonis berdasarkan warna dasar atau gradien campuran.</p>

        <div class="flex border-b mb-6">
            <button data-tab="shades" class="tab-internal py-2 px-4 font-semibold border-b-2 border-indigo-500 text-indigo-600" id="tabShades">Shades & Tints</button>
            <button data-tab="blender" class="tab-internal py-2 px-4 font-semibold border-b-2 border-transparent text-gray-500 hover:text-indigo-600 hover:border-indigo-200" id="tabBlender">Color Blender</button>
        </div>
        
        <div id="generatorContentArea">
            <div id="content-shades" class="tab-content">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 items-end">
                    <div>
                        <label for="baseColorShades" class="block text-sm font-medium text-gray-700 mb-2">Warna Dasar (HEX):</label>
                        <input type="color" id="baseColorShades" value="#007BFF" 
                            class="w-full h-10 p-0 border rounded-lg overflow-hidden cursor-pointer">
                    </div>
                    <div>
                        <label for="shadesSteps" class="block text-sm font-medium text-gray-700 mb-2">Langkah (per sisi):</label>
                        <input type="number" id="shadesSteps" value="5" min="1" max="10" 
                            class="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <button id="generateShadesBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition h-10">
                        Buat Palet
                    </button>
                </div>
                <div id="shadesOutput" class="mt-6"></div>
            </div>

            <div id="content-blender" class="tab-content hidden">
                 <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 items-end">
                    <div>
                        <label for="colorBlend1" class="block text-sm font-medium text-gray-700 mb-2">Warna Awal (HEX):</label>
                        <input type="color" id="colorBlend1" value="#FF5733" 
                            class="w-full h-10 p-0 border rounded-lg overflow-hidden cursor-pointer">
                    </div>
                    <div>
                        <label for="colorBlend2" class="block text-sm font-medium text-gray-700 mb-2">Warna Akhir (HEX):</label>
                        <input type="color" id="colorBlend2" value="#33FF57" 
                            class="w-full h-10 p-0 border rounded-lg overflow-hidden cursor-pointer">
                    </div>
                    <div>
                        <label for="blendSteps" class="block text-sm font-medium text-gray-700 mb-2">Langkah (Total):</label>
                        <input type="number" id="blendSteps" value="10" min="2" max="50" 
                            class="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500">
                    </div>
                    <button id="blendBtn" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition h-10">
                        Campur Warna
                    </button>
                </div>
                <div id="blenderOutput" class="mt-6"></div>
            </div>

        </div>
        <p id="generatorStatusMessage" class="mt-4 text-center text-sm text-gray-500"></p>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
// --- SVG Optimizer / Minifier Module ---

const SVGOptimizerContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">SVG Optimizer / Minifier</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="text-gray-600 mb-4">Minimalkan ukuran file SVG Anda dengan menghapus metadata dan spasi yang tidak perlu. Lihat hasilnya di Preview.</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="svgInput" class="block text-sm font-medium text-gray-700 mb-2">Input SVG Code:</label>
                <textarea id="svgInput" rows="10" placeholder="Paste kode SVG Anda di sini..."
                    class="w-full p-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500 font-mono"></textarea>
            </div>

            <div>
                <label for="svgOutput" class="block text-sm font-medium text-gray-700 mb-2">Optimized SVG Code:</label>
                <textarea id="svgOutput" rows="10" readonly placeholder="Hasil kode SVG yang sudah dioptimalkan"
                    class="w-full p-3 border rounded-lg bg-gray-50 font-mono text-xs"></textarea>
            </div>
        </div>

        <div class="mt-6 border-t pt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Preview (Optimized):</h3>
                <div id="svgPreview" class="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center p-4 overflow-hidden">
                    <p class="text-gray-400 text-sm">Preview SVG akan muncul di sini.</p>
                </div>
            </div>
            
            <div>
                <h3 class="text-lg font-semibold text-gray-700 mb-2">Laporan Optimasi:</h3>
                <div id="optimizationReport" class="p-4 bg-gray-50 rounded-lg text-sm font-semibold text-gray-700">
                    Ukuran Awal: 0 B <br> Ukuran Akhir: 0 B <br> Pengurangan: 0%
                </div>
                 <button id="optimizeSvgBtn" class="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                    🚀 Optimize & Refresh
                </button>
            </div>
        </div>

        <p id="svgStatusMessage" class="mt-4 text-center text-sm text-gray-500"></p>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const AspectRatioContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Aspect Ratio Calculator</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="text-gray-600 mb-6">Hitung lebar atau tinggi yang hilang berdasarkan rasio aspek (misalnya 16:9).</p>

        <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
                <label for="ratioW" class="block text-sm font-medium text-gray-700 mb-2">Rasio Lebar (X):</label>
                <input type="number" id="ratioW" value="16" min="1"
                    class="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 font-mono">
            </div>
            <div>
                <label for="ratioH" class="block text-sm font-medium text-gray-700 mb-2">Rasio Tinggi (Y):</label>
                <input type="number" id="ratioH" value="9" min="1"
                    class="w-full p-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 font-mono">
            </div>
        </div>
        
        <h3 class="text-lg font-semibold text-gray-700 mt-4 mb-3">Dimensi Saat Ini (Pixel)</h3>

        <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="widthInput" class="block text-sm font-medium text-gray-700 mb-2">Lebar (W):</label>
                <input type="number" id="widthInput" placeholder="Masukkan nilai..."
                    class="w-full p-2 border rounded-lg bg-yellow-50 focus:ring-blue-500 focus:border-blue-500 font-mono">
                <p id="widthResult" class="mt-1 text-sm text-gray-500"></p>
            </div>

            <div>
                <label for="heightInput" class="block text-sm font-medium text-gray-700 mb-2">Tinggi (H):</label>
                <input type="number" id="heightInput" placeholder="Masukkan nilai..."
                    class="w-full p-2 border rounded-lg bg-yellow-50 focus:ring-blue-500 focus:border-blue-500 font-mono">
                <p id="heightResult" class="mt-1 text-sm text-gray-500"></p>
            </div>
        </div>

        <div class="mt-6">
             <h3 class="text-lg font-semibold text-gray-700 mb-3">Presets Cepat:</h3>
             <div id="ratioPresets" class="flex flex-wrap gap-2">
                 <button data-ratio="1:1" class="preset-btn px-3 py-1 bg-gray-200 rounded text-sm hover:bg-indigo-100">1:1 (Square)</button>
                 <button data-ratio="4:3" class="preset-btn px-3 py-1 bg-gray-200 rounded text-sm hover:bg-indigo-100">4:3 (SD Video/Monitor)</button>
                 <button data-ratio="16:9" class="preset-btn px-3 py-1 bg-indigo-100 rounded text-sm hover:bg-indigo-100">16:9 (HD Video)</button>
                 <button data-ratio="21:9" class="preset-btn px-3 py-1 bg-gray-200 rounded text-sm hover:bg-indigo-100">21:9 (Ultrawide)</button>
             </div>
        </div>

        <p id="ratioStatusMessage" class="mt-4 text-center text-sm text-gray-500"></p>
    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;
const TimeDriftContent = `
    <h2 class="text-2xl font-bold text-indigo-700 mb-4">Time Drift Checker</h2>
    <div class="bg-white p-6 rounded-xl shadow-lg">
        <p class="text-gray-600 mb-6">Periksa seberapa akurat jam gadget Anda dibandingkan dengan waktu server online yang kredibel (WorldTimeAPI).</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 bg-yellow-50 rounded-lg">
                <h3 class="font-semibold text-lg text-gray-700 mb-1">Waktu Lokal:</h3>
                <p id="localTimeDisplay" class="text-2xl font-mono text-yellow-800"></p>
            </div>
            <div class="p-4 bg-green-50 rounded-lg">
                <h3 class="font-semibold text-lg text-gray-700 mb-1">Waktu Server Online (Disesuaikan):</h3>
                <p id="onlineTimeDisplay" class="text-2xl font-mono text-green-800">...</p>
            </div>
        </div>

        <div class="mt-6 p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-lg">
            <h3 class="font-bold text-xl text-indigo-800">Selisih Waktu (Drift):</h3>
            <p id="driftResult" class="text-3xl font-extrabold font-mono text-indigo-900 mt-1">...</p>
            <p id="latencyEstimate" class="text-sm text-gray-600 mt-2"></p>
        </div>

        <button id="checkTimeBtn" class="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition">
            ⏱️ Cek Akurasi Sekarang
        </button>
        
        <p id="timeStatusMessage" class="mt-4 text-center text-sm text-gray-500"></p>
    </div>
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
        case 'csv-to-json-converter':
            content = CSVtoJSONConverterContent;
            pageTitleElement.textContent = 'CSV to JSON Converter';
            break;
        case 'data-validator':
            content = DataValidatorContent;
            pageTitleElement.textContent = 'Data Validator (Regex)';
            break;
        case 'base64-converter':
            content = Base64ConverterContent;
            pageTitleElement.textContent = 'Base64 Encoder/Decoder';
            break;
        case 'color-extractor':
            content = ColorExtractorContent;
            pageTitleElement.textContent = 'Color Palette Extractor';
            break;
        case 'color-generator':
            content = ColorGeneratorContent;
            pageTitleElement.textContent = 'Color Palette Generator';
            break;
        case 'svg-optimizer':
            content = SVGOptimizerContent;
            pageTitleElement.textContent = 'SVG Optimizer';
            break;
        case 'aspect-ratio-calculator':
            content = AspectRatioContent;
            pageTitleElement.textContent = 'Aspect Ratio Calculator';
            break;
            case 'time-drift-checker':
            content = TimeDriftContent;
            pageTitleElement.textContent = 'Time Drift Checker';
            break;
        default:
            return;
    }
    history.pushState(null, '', `?tools=${toolKey}`);

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
    } else if (toolKey === 'csv-to-json-converter') {
        initializeCSVtoJSONConverter();
    } else if (toolKey === 'data-validator') {
        initializeDataValidator();
    } else if (toolKey === 'base64-converter') {
        initializeBase64Converter();
    } else if (toolKey === 'color-extractor') {
        initializeColorExtractor();
    } else if (toolKey === 'color-generator') {
        initializeColorGenerator();
    } else if (toolKey === 'svg-optimizer') {
        initializeSVGOptimizer();
    } else if (toolKey === 'aspect-ratio-calculator') {
        initializeAspectRatioCalculator();
    } else if (toolKey === 'time-drift-checker') {
        initializeTimeDrift();
    }
    trackUmamiEvent('tool_used', { tool: toolKey });
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
let uploadedFileName = null;
let saveBtn;
function initializeCSVtoJSONConverter(containerId) {
    if (typeof Papa === 'undefined') {
        alert("Library Papa Parse belum dimuat. Pastikan Anda menyertakan Papa Parse di tools.html.");
        return;
    }

    const csvInput = document.getElementById('csvInput');
    const jsonOutput = document.getElementById('jsonOutput');
    const convertBtn = document.getElementById('convertBtn');
    const copyBtn = document.getElementById('copyBtn');
    const statusMessage = document.getElementById('statusMessage');
    saveBtn = document.getElementById('saveBtn');

    // Tambahan elemen untuk upload file
    const csvFile = document.getElementById('csvFile');
    const uploadFileBtn = document.getElementById('uploadFileBtn');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    copyBtn.disabled = true;
    saveBtn.disabled = true;
    // ----------------------------------------------------
    // LOGIKA FILE UPLOAD BARU
    // ----------------------------------------------------

    // Memicu input file tersembunyi
    uploadFileBtn.addEventListener('click', () => {
        csvFile.click();
    });

    // Menangani perubahan file
    csvFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        uploadedFileName = file.name;
        fileNameDisplay.textContent = uploadedFileName;

        // Cek sederhana tipe file
        if (!file.name.toLowerCase().endsWith('.csv')) {
            statusMessage.textContent = '❌ File bukan CSV. Pilih file .csv.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            csvInput.value = '';
            return;
        }

        // Membaca file menggunakan FileReader
        const reader = new FileReader();
        reader.onload = (e) => {
            // Isi textarea dengan konten file
            csvInput.value = e.target.result;
            statusMessage.textContent = `✅ File '${file.name}' (${(file.size / 1024).toFixed(1)} KB) berhasil dimuat ke dalam kolom input.`;
            statusMessage.className = 'mt-4 text-center text-sm text-green-600';
            jsonOutput.value = '';
            copyBtn.disabled = true;
            saveBtn.disabled = true;
        };

        reader.onerror = () => {
            statusMessage.textContent = '❌ Gagal membaca file.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';

        };

        reader.readAsText(file);
    });
    // Reset uploadedFileName jika input diubah secara manual
    csvInput.addEventListener('input', () => {
        if (csvFile.files.length > 0) {
            // Jika ada file, tetapi input diubah, reset nama file (karena konten bukan lagi 100% dari file)
            uploadedFileName = null;
            fileNameDisplay.textContent = 'Data diubah manual';
        } else if (csvInput.value.trim() !== '') {
            // Jika ditempel secara manual
            uploadedFileName = null;
            fileNameDisplay.textContent = 'Input manual';
        }
    });

    // ----------------------------------------------------
    // LOGIKA KONVERSI (Diperbarui untuk mengaktifkan tombol Simpan)
    // ----------------------------------------------------

    function convertCsvToJson() {
        const csvData = csvInput.value.trim();
        // ... (Error handling yang sudah ada) ...

        Papa.parse(csvData, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                // ... (Logika Error Parsing yang sudah ada) ...

                const jsonArray = results.data;
                const jsonString = JSON.stringify(jsonArray, null, 2);
                jsonOutput.value = jsonString;

                statusMessage.textContent = `✅ Konversi berhasil! Ditemukan ${jsonArray.length} baris data.`;
                statusMessage.className = 'mt-4 text-center text-sm text-green-600';

                // AKTIFKAN TOMBOL COPY DAN SIMPAN SETELAH KONVERSI SUKSES
                copyBtn.disabled = false;
                saveBtn.disabled = false;
            }
        });
    }

    // ----------------------------------------------------
    // LOGIKA SIMPAN JSON BARU
    // ----------------------------------------------------

    function saveJsonFile() {
        const jsonContent = jsonOutput.value;
        if (!jsonContent || jsonContent.trim() === '') {
            statusMessage.textContent = '⚠️ Tidak ada konten JSON untuk disimpan.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }

        let fileName;

        if (uploadedFileName) {
            // 1. Jika diupload, gunakan nama file asli (misal: data.csv -> data.json)
            const baseName = uploadedFileName.substring(0, uploadedFileName.lastIndexOf('.')) || uploadedFileName;
            fileName = `${baseName}.json`;
        } else {
            // 2. Jika ditempel manual, gunakan default
            fileName = 'result.json';
        }

        // Menggunakan Blob dan URL.createObjectURL untuk memicu download
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;

        // Pemicuan klik buatan
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Bersihkan URL objek

        statusMessage.textContent = `💾 File ${fileName} berhasil diunduh.`;
        statusMessage.className = 'mt-4 text-center text-sm text-green-600';
    }

    function copyJson() {
        jsonOutput.select();
        try {
            document.execCommand('copy');
            statusMessage.textContent = '📄 JSON berhasil disalin ke clipboard!';
            statusMessage.className = 'mt-4 text-center text-sm text-green-600';
        } catch (err) {
            statusMessage.textContent = '❌ Gagal menyalin JSON.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
        }
    }

    convertBtn.addEventListener('click', convertCsvToJson);
    copyBtn.addEventListener('click', copyJson);
    saveBtn.addEventListener('click', saveJsonFile);
}
function initializeDataValidator(containerId) {
    const regexInput = document.getElementById('regexInput');
    const sampleDataInput = document.getElementById('sampleDataInput');
    const validateBtn = document.getElementById('validateBtn');
    const validationOutput = document.getElementById('validationOutput');

    function validateData() {
        const regexString = regexInput.value.trim();
        const dataString = sampleDataInput.value.trim();
        validationOutput.innerHTML = '';

        if (!regexString || !dataString) {
            validationOutput.innerHTML = '<p class="text-red-600">Regex dan Data Sampel tidak boleh kosong.</p>';
            return;
        }

        let regex;
        let pattern;
        let flags;

        // 1. Parsing Regex dari format /pattern/flags
        try {
            const match = regexString.match(/^\/(.+)\/([a-z]*)$/i);
            if (match) {
                pattern = match[1];
                flags = match[2];
                regex = new RegExp(pattern, flags);
            } else {
                // Jika user hanya memasukkan pattern tanpa /.../g
                regex = new RegExp(regexString);
            }
        } catch (e) {
            validationOutput.innerHTML = `<p class="text-red-600">❌ Regex tidak valid: ${e.message}</p>`;
            return;
        }

        // 2. Memproses Data Sampel
        const dataLines = dataString.split('\n').map(line => line.trim()).filter(line => line.length > 0);
        let validCount = 0;

        if (dataLines.length === 0) {
            validationOutput.innerHTML = '<p class="text-red-600">Masukkan setidaknya satu baris data.</p>';
            return;
        }

        // 3. Menjalankan Validasi dan Menampilkan Hasil
        dataLines.forEach((data, index) => {
            const isMatch = regex.test(data);
            const icon = isMatch ? '✅' : '❌';
            const color = isMatch ? 'text-green-700' : 'text-red-700';

            if (isMatch) validCount++;

            // Reset lastIndex jika menggunakan flag 'g' (global) agar test() bekerja dengan benar
            if (regex.global) {
                regex.lastIndex = 0;
            }

            validationOutput.innerHTML += `
                <div class="flex justify-between items-center p-2 border-b">
                    <span class="font-mono ${color} break-all">${data}</span>
                    <span class="font-bold text-lg">${icon}</span>
                </div>
            `;
        });

        // Tampilkan Ringkasan
        const total = dataLines.length;
        const summaryColor = validCount === total ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800';

        const summaryHtml = `
            <div class="p-3 mt-4 ${summaryColor} rounded-lg font-semibold text-center">
                Ringkasan: ${validCount} dari ${total} data valid.
            </div>
        `;
        validationOutput.insertAdjacentHTML('beforebegin', summaryHtml);
    }

    validateBtn.addEventListener('click', validateData);

    // Memicu validasi setiap kali input utama berubah (real-time feedback)
    regexInput.addEventListener('input', validateData);
    sampleDataInput.addEventListener('input', validateData);
}
function initializeBase64Converter(containerId) {
    const statusMessage = document.getElementById('base64StatusMessage');

    // --- Elemen Navigasi ---
    const tabButtons = document.querySelectorAll('.tab-internal');
    const contentText = document.getElementById('content-text');
    const contentFile = document.getElementById('content-file');

    // --- Elemen Teks ---
    const textInput = document.getElementById('base64TextInput');
    const textOutput = document.getElementById('base64TextOutput');
    const encodeBtn = document.getElementById('encodeTextBtn');
    const decodeBtn = document.getElementById('decodeTextBtn');

    // --- Elemen File ---
    const fileInput = document.getElementById('base64FileInput');
    const fileOutput = document.getElementById('base64FileOutput');
    const fileTypeDisplay = document.getElementById('fileTypeDisplay');

    // --- Fungsi Navigasi Tab Internal ---
    function switchTab(tabName) {
        tabButtons.forEach(btn => {
            btn.classList.remove('border-indigo-500', 'text-indigo-600');
            btn.classList.add('border-transparent', 'text-gray-500');
        });

        document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.add('border-indigo-500', 'text-indigo-600');
        document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.remove('border-transparent', 'text-gray-500');

        contentText.classList.add('hidden');
        contentFile.classList.add('hidden');

        if (tabName === 'text') {
            contentText.classList.remove('hidden');
        } else if (tabName === 'file') {
            contentFile.classList.remove('hidden');
        }
        statusMessage.textContent = '';
    }

    // Pasang listener navigasi
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
    });

    // --- LOGIKA TEKS ENCODE/DECODE ---
    encodeBtn.addEventListener('click', () => {
        const input = textInput.value.trim();
        if (!input) {
            statusMessage.textContent = '⚠️ Masukkan teks untuk di-encode.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }
        try {
            // Menggunakan btoa (binary to ascii) untuk Base64 encoding
            const encoded = btoa(input);
            textOutput.value = encoded;
            statusMessage.textContent = '✅ Encode ke Base64 berhasil!';
            statusMessage.className = 'mt-4 text-center text-sm text-green-600';
        } catch (e) {
            statusMessage.textContent = '❌ Error Encode: Konten mungkin berisi karakter non-ASCII yang tidak didukung btoa.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
        }
    });

    decodeBtn.addEventListener('click', () => {
        const input = textInput.value.trim();
        if (!input) {
            statusMessage.textContent = '⚠️ Masukkan Base64 untuk di-decode.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }
        try {
            // Menggunakan atob (ascii to binary) untuk Base64 decoding
            const decoded = atob(input);
            textOutput.value = decoded;
            statusMessage.textContent = '✅ Decode dari Base64 berhasil!';
            statusMessage.className = 'mt-4 text-center text-sm text-green-600';
        } catch (e) {
            statusMessage.textContent = '❌ Error Decode: String Base64 tidak valid atau rusak.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
        }
    });

    // --- LOGIKA FILE ENCODE ---
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        fileOutput.value = '';
        fileTypeDisplay.textContent = '';
        statusMessage.textContent = '';

        if (!file) return;

        // Memeriksa ukuran file (Misalnya batasi hingga 5MB)
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
            statusMessage.textContent = `⚠️ File terlalu besar. Maksimum 5MB. File Anda: ${(file.size / (1024 * 1024)).toFixed(2)} MB.`;
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            // Hasil event.target.result sudah merupakan Data URI (Base64)
            fileOutput.value = event.target.result;
            fileTypeDisplay.textContent = `Tipe: ${file.type}`;
            statusMessage.textContent = `✅ File '${file.name}' berhasil dikonversi ke Base64 (Data URI).`;
            statusMessage.className = 'mt-4 text-center text-sm text-green-600';
        };

        reader.onerror = () => {
            statusMessage.textContent = '❌ Gagal membaca file.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
        };

        // Membaca file sebagai Data URL
        reader.readAsDataURL(file);
    });
}
function initializeColorExtractor(containerId) {
    // Cek ketersediaan library color-thief
    if (typeof ColorThief === 'undefined') {
        alert("Library Color Thief tidak ditemukan. Pastikan Anda menyertakannya di tools.html.");
        return;
    }

    const colorThief = new ColorThief();

    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const placeholderText = document.getElementById('placeholderText');
    const extractBtn = document.getElementById('extractBtn');
    const colorCountInput = document.getElementById('colorCount');
    const paletteOutput = document.getElementById('paletteOutput');
    const statusMessage = document.getElementById('colorStatusMessage');

    // --- Fungsi Bantuan ---

    function rgbToHex(rgb) {
        // [r, g, b] -> #rrggbb
        const toHex = (c) => ('0' + c.toString(16)).slice(-2);
        return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`.toUpperCase();
    }

    function displayPalette(palette) {
        paletteOutput.innerHTML = '';

        const paletteContainer = document.createElement('div');
        paletteContainer.className = 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4';

        palette.forEach(rgb => {
            const hex = rgbToHex(rgb);
            const colorDiv = document.createElement('div');
            // Tentukan apakah teks harus putih atau hitam agar kontras
            const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
            const textColor = luminance > 0.5 ? 'text-gray-900' : 'text-white';

            colorDiv.className = `p-4 rounded-lg shadow-md transition hover:scale-[1.02] cursor-pointer ${textColor}`;
            colorDiv.style.backgroundColor = hex;
            colorDiv.innerHTML = `
                <div class="font-bold text-sm mb-1">HEX: ${hex}</div>
                <div class="text-xs">RGB: ${rgb.join(', ')}</div>
            `;

            // Tambahkan event copy saat diklik
            colorDiv.addEventListener('click', () => {
                navigator.clipboard.writeText(hex).then(() => {
                    statusMessage.textContent = `✅ Kode HEX ${hex} berhasil disalin!`;
                    statusMessage.className = 'mt-4 text-center text-sm text-green-600';
                }).catch(err => {
                    statusMessage.textContent = `❌ Gagal menyalin: ${err}`;
                    statusMessage.className = 'mt-4 text-center text-sm text-red-600';
                });
            });

            paletteContainer.appendChild(colorDiv);
        });

        paletteOutput.appendChild(paletteContainer);
    }

    // --- LOGIKA UTAMA ---

    function handleImageLoad(url) {
        imagePreview.onload = () => {
            placeholderText.classList.add('hidden');
            imagePreview.classList.remove('hidden');
            extractBtn.disabled = false;
            extractBtn.textContent = '🎨 Ekstrak Palet';
            statusMessage.textContent = 'Gambar siap dianalisis.';
            statusMessage.className = 'mt-4 text-center text-sm text-gray-500';

            // Panggil extractPalette secara otomatis setelah gambar dimuat
            extractPalette();
        };

        imagePreview.onerror = () => {
            statusMessage.textContent = '❌ Gagal memuat gambar.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            extractBtn.disabled = true;
        };

        // Atur gambar ke URL yang baru dimuat
        imagePreview.src = url;
    }

    function extractPalette() {
        // Cek apakah gambar sudah dimuat dan tombol tidak dinonaktifkan
        if (extractBtn.disabled) return;

        const colorCount = parseInt(colorCountInput.value) || 8;

        statusMessage.textContent = '⏳ Menganalisis piksel gambar...';
        statusMessage.className = 'mt-4 text-center text-sm text-blue-600';

        try {
            // Gunakan colorThief.getPalette untuk mendapatkan palet warna
            // Parameter kedua: Jumlah warna yang diinginkan
            const palette = colorThief.getPalette(imagePreview, colorCount);

            displayPalette(palette);

            statusMessage.textContent = `✅ Berhasil mengekstrak ${palette.length} warna dominan.`;
            statusMessage.className = 'mt-4 text-center text-sm text-green-600';

        } catch (e) {
            statusMessage.textContent = `❌ Error Ekstraksi: ${e.message}. Pastikan gambar dimuat sepenuhnya.`;
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            paletteOutput.innerHTML = '<p class="text-red-500 text-center p-10 border rounded-lg bg-gray-50">Gagal menganalisis gambar. Coba gambar lain.</p>';
        }
    }


    // --- Event Listeners ---

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Tampilkan placeholder loading
        imagePreview.classList.add('hidden');
        placeholderText.classList.remove('hidden');
        placeholderText.textContent = 'Memuat gambar...';
        extractBtn.disabled = true;
        paletteOutput.innerHTML = '<p class="text-gray-500 text-center p-10 border rounded-lg bg-gray-50">Palet warna akan ditampilkan di sini.</p>';


        const reader = new FileReader();
        reader.onload = (event) => {
            handleImageLoad(event.target.result);
        };
        reader.readAsDataURL(file);
    });

    // Panggil ekstraksi saat tombol diklik atau jumlah warna diubah
    extractBtn.addEventListener('click', extractPalette);
    colorCountInput.addEventListener('change', extractPalette);
    // Jalankan ekstraksi ulang saat gambar dimuat
    imagePreview.addEventListener('load', extractPalette);
}
function initializeColorGenerator(containerId) {
    const statusMessage = document.getElementById('generatorStatusMessage');

    // --- Elemen Navigasi ---
    const tabButtons = document.querySelectorAll('.tab-internal');
    const contentShades = document.getElementById('content-shades');
    const contentBlender = document.getElementById('content-blender');

    // --- Elemen Shades & Tints ---
    const baseColorShadesInput = document.getElementById('baseColorShades');
    const shadesStepsInput = document.getElementById('shadesSteps');
    const generateShadesBtn = document.getElementById('generateShadesBtn');
    const shadesOutput = document.getElementById('shadesOutput');

    // --- Elemen Blender ---
    const colorBlend1Input = document.getElementById('colorBlend1');
    const colorBlend2Input = document.getElementById('colorBlend2');
    const blendStepsInput = document.getElementById('blendSteps');
    const blendBtn = document.getElementById('blendBtn');
    const blenderOutput = document.getElementById('blenderOutput');


    // ----------------------------------------------------
    // HELPER COLOR CONVERSIONS
    // ----------------------------------------------------

    function hexToRgb(hex) {
        // Hapus # jika ada
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    }

    function rgbToHex(r, g, b) {
        r = Math.max(0, Math.min(255, Math.round(r)));
        g = Math.max(0, Math.min(255, Math.round(g)));
        b = Math.max(0, Math.min(255, Math.round(b)));

        const toHex = (c) => ('0' + c.toString(16)).slice(-2);
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    }

    // ----------------------------------------------------
    // RENDER HELPER
    // ----------------------------------------------------

    function displayPalette(palette, outputElement) {
        outputElement.innerHTML = '';

        const paletteContainer = document.createElement('div');
        paletteContainer.className = 'grid grid-cols-5 md:grid-cols-10 gap-2';

        palette.forEach(hex => {
            const rgb = hexToRgb(hex);
            if (!rgb) return;

            const colorDiv = document.createElement('div');
            // Tentukan apakah teks harus putih atau hitam agar kontras
            const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
            const textColor = luminance > 0.5 ? 'text-gray-900' : 'text-white';

            colorDiv.className = `p-2 h-16 rounded-lg shadow-md transition hover:scale-[1.05] cursor-pointer flex items-end justify-center font-semibold text-xs ${textColor}`;
            colorDiv.style.backgroundColor = hex;
            colorDiv.textContent = hex;

            // Tambahkan event copy saat diklik
            colorDiv.addEventListener('click', () => {
                navigator.clipboard.writeText(hex).then(() => {
                    statusMessage.textContent = `✅ Kode HEX ${hex} berhasil disalin!`;
                    statusMessage.className = 'mt-4 text-center text-sm text-green-600';
                }).catch(() => {
                    statusMessage.textContent = `❌ Gagal menyalin kode ${hex}.`;
                    statusMessage.className = 'mt-4 text-center text-sm text-red-600';
                });
            });

            paletteContainer.appendChild(colorDiv);
        });

        outputElement.appendChild(paletteContainer);
    }

    // ----------------------------------------------------
    // LOGIKA SHADES & TINTS
    // ----------------------------------------------------

    // Fungsi Shade: Gelapkan warna (mengurangi nilai RGB dari putih)
    // Fungsi Tint: Cerahkan warna (menambahkan nilai RGB ke hitam)
    function calculateShadesAndTints() {
        const hex = baseColorShadesInput.value;
        let steps = parseInt(shadesStepsInput.value);
        if (isNaN(steps) || steps < 1 || steps > 10) steps = 5;

        const baseRgb = hexToRgb(hex);
        if (!baseRgb) {
            statusMessage.textContent = '❌ Warna dasar HEX tidak valid.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }

        const palette = [];
        const blackRgb = [0, 0, 0];
        const whiteRgb = [255, 255, 255];

        // --- TINTS (Lebih Terang, dari Putih ke Warna Dasar) ---
        // Jika steps=5, kita ingin 5 langkah dari Putih (0%) ke Warna Dasar (100%)
        for (let i = steps; i > 0; i--) {
            const ratio = i / (steps + 1); // 5/6, 4/6, 3/6, 2/6, 1/6
            const r = baseRgb[0] + (whiteRgb[0] - baseRgb[0]) * ratio;
            const g = baseRgb[1] + (whiteRgb[1] - baseRgb[1]) * ratio;
            const b = baseRgb[2] + (whiteRgb[2] - baseRgb[2]) * ratio;
            palette.push(rgbToHex(r, g, b));
        }

        // --- WARNA DASAR ---
        palette.push(hex.toUpperCase());

        // --- SHADES (Lebih Gelap, dari Warna Dasar ke Hitam) ---
        // Kita ingin 5 langkah dari Warna Dasar (100%) ke Hitam (0%)
        for (let i = 1; i <= steps; i++) {
            const ratio = i / (steps + 1); // 1/6, 2/6, 3/6, 4/6, 5/6
            const r = baseRgb[0] + (blackRgb[0] - baseRgb[0]) * ratio;
            const g = baseRgb[1] + (blackRgb[1] - baseRgb[1]) * ratio;
            const b = baseRgb[2] + (blackRgb[2] - baseRgb[2]) * ratio;
            palette.push(rgbToHex(r, g, b));
        }

        displayPalette(palette, shadesOutput);
        statusMessage.textContent = '✅ Palet Shades & Tints berhasil dibuat.';
        statusMessage.className = 'mt-4 text-center text-sm text-green-600';
    }

    // ----------------------------------------------------
    // LOGIKA COLOR BLENDER
    // ----------------------------------------------------

    function blendColors() {
        const hex1 = colorBlend1Input.value;
        const hex2 = colorBlend2Input.value;
        let steps = parseInt(blendStepsInput.value);
        if (isNaN(steps) || steps < 2 || steps > 50) steps = 10;

        const rgb1 = hexToRgb(hex1);
        const rgb2 = hexToRgb(hex2);

        if (!rgb1 || !rgb2) {
            statusMessage.textContent = '❌ Satu atau kedua warna HEX tidak valid.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }

        const palette = [];

        // Total langkah interpolasi adalah (steps - 1)
        for (let i = 0; i < steps; i++) {
            const ratio = i / (steps - 1); // 0, 1/(steps-1), 2/(steps-1), ..., 1

            const r = rgb1[0] + (rgb2[0] - rgb1[0]) * ratio;
            const g = rgb1[1] + (rgb2[1] - rgb1[1]) * ratio;
            const b = rgb1[2] + (rgb2[2] - rgb1[2]) * ratio;

            palette.push(rgbToHex(r, g, b));
        }

        displayPalette(palette, blenderOutput);
        statusMessage.textContent = `✅ Gradien campuran berhasil dibuat dalam ${steps} langkah.`;
        statusMessage.className = 'mt-4 text-center text-sm text-green-600';
    }


    // ----------------------------------------------------
    // LISTENERS & INISIALISASI
    // ----------------------------------------------------

    // Listener Navigasi Tab Internal
    function switchTab(tabName) {
        tabButtons.forEach(btn => {
            btn.classList.remove('border-indigo-500', 'text-indigo-600');
            btn.classList.add('border-transparent', 'text-gray-500', 'hover:text-indigo-600', 'hover:border-indigo-200');
        });
        const currentTabBtn = document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
        currentTabBtn.classList.add('border-indigo-500', 'text-indigo-600');
        currentTabBtn.classList.remove('border-transparent', 'text-gray-500', 'hover:text-indigo-600', 'hover:border-indigo-200');

        contentShades.classList.add('hidden');
        contentBlender.classList.add('hidden');

        if (tabName === 'shades') {
            contentShades.classList.remove('hidden');
        } else if (tabName === 'blender') {
            contentBlender.classList.remove('hidden');
        }
        statusMessage.textContent = '';
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
    });

    // Listener Shades & Tints
    generateShadesBtn.addEventListener('click', calculateShadesAndTints);
    baseColorShadesInput.addEventListener('input', calculateShadesAndTints);
    shadesStepsInput.addEventListener('input', calculateShadesAndTints);

    // Listener Blender
    blendBtn.addEventListener('click', blendColors);
    colorBlend1Input.addEventListener('input', blendColors);
    colorBlend2Input.addEventListener('input', blendColors);
    blendStepsInput.addEventListener('input', blendColors);

    // Initial run
    calculateShadesAndTints();
}
function initializeSVGOptimizer(containerId) {
    const svgInput = document.getElementById('svgInput');
    const svgOutput = document.getElementById('svgOutput');
    const svgPreview = document.getElementById('svgPreview'); // Elemen Preview Baru
    const optimizeSvgBtn = document.getElementById('optimizeSvgBtn');
    const reportDiv = document.getElementById('optimizationReport');
    const statusMessage = document.getElementById('svgStatusMessage');

    // Helper untuk menghitung ukuran byte dari string
    function byteSize(str) {
        return new TextEncoder().encode(str).length;
    }

    function optimizeSVG() {
        let inputSvg = svgInput.value.trim();
        svgOutput.value = '';
        svgPreview.innerHTML = '<p class="text-gray-400 text-sm">Preview SVG akan muncul di sini.</p>'; // Reset Preview
        reportDiv.innerHTML = 'Ukuran Awal: <b>0 B</b> <br> Ukuran Akhir: <b>0 B</b> <br> Pengurangan: <b>0%</b>';
        statusMessage.textContent = '';

        if (!inputSvg) {
            statusMessage.textContent = '⚠️ Harap masukkan kode SVG.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }

        if (!inputSvg.includes('<svg') && !inputSvg.includes('<SVG')) {
            statusMessage.textContent = '❌ Input tidak terlihat seperti kode SVG yang valid.';
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }

        const initialSize = byteSize(inputSvg);
        let optimizedSvg = inputSvg;

        try {
            // 1. Hapus komentar <!-- ... --> dan deklarasi XML/DOCTYPE
            optimizedSvg = optimizedSvg.replace(/<!--[\s\S]*?-->/g, '');
            optimizedSvg = optimizedSvg.replace(/<\?xml[^]*?\?>/g, '');
            optimizedSvg = optimizedSvg.replace(/<!DOCTYPE[^]*?>/g, '');

            // 2. Hapus attribute yang tidak perlu
            optimizedSvg = optimizedSvg.replace(/style="fill:none"/gi, '');
            optimizedSvg = optimizedSvg.replace(/version="[0-9.]+"/gi, '');

            // 3. Minifikasi Whitespace
            optimizedSvg = optimizedSvg.replace(/[\n\r\t]/g, ' ');
            optimizedSvg = optimizedSvg.replace(/\s+/g, ' ');
            optimizedSvg = optimizedSvg.replace(/>\s+</g, '><');
            optimizedSvg = optimizedSvg.trim();

        } catch (e) {
            statusMessage.textContent = `❌ Error saat memproses SVG: ${e.message}`;
            statusMessage.className = 'mt-4 text-center text-sm text-red-600';
            return;
        }

        const finalSize = byteSize(optimizedSvg);
        const reduction = initialSize > 0 ? (((initialSize - finalSize) / initialSize) * 100).toFixed(2) : 0;

        svgOutput.value = optimizedSvg;

        // --- KRITIS: Tampilkan Preview ---
        // Browser akan me-render kode SVG ini langsung di dalam div.
        svgPreview.innerHTML = optimizedSvg;

        // Memastikan SVG yang di-render sesuai dengan ukuran container
        const renderedSvg = svgPreview.querySelector('svg');
        if (renderedSvg) {
            renderedSvg.setAttribute('style', 'max-width: 100%; max-height: 100%; height: auto; width: auto; display: block; margin: auto;');
        }

        // Tampilkan Laporan Pengurangan Ukuran
        reportDiv.innerHTML = `Ukuran Awal: <b>${initialSize} B</b> <br> Ukuran Akhir: <b>${finalSize} B</b> <br> Pengurangan: <b class="${reduction > 0 ? 'text-green-600' : 'text-gray-600'}">${reduction}%</b>`;

        statusMessage.textContent = '✅ Optimasi selesai. Lihat hasilnya di Preview.';
        statusMessage.className = 'mt-4 text-center text-sm text-green-600';
    }

    optimizeSvgBtn.addEventListener('click', optimizeSVG);
    svgInput.addEventListener('input', optimizeSVG);

    optimizeSVG();
}
function initializeAspectRatioCalculator(containerId) {
    const ratioW = document.getElementById('ratioW');
    const ratioH = document.getElementById('ratioH');
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const widthResult = document.getElementById('widthResult');
    const heightResult = document.getElementById('heightResult');
    const statusMessage = document.getElementById('ratioStatusMessage');
    const presetButtons = document.querySelectorAll('.preset-btn');

    const decimalPlaces = 0; // Bulatkan ke bilangan bulat (pixel)

    function calculateAspect() {
        const rW = parseFloat(ratioW.value);
        const rH = parseFloat(ratioH.value);
        const inputW = parseFloat(widthInput.value);
        const inputH = parseFloat(heightInput.value);

        // Reset status
        widthResult.textContent = '';
        heightResult.textContent = '';
        statusMessage.textContent = '';

        if (isNaN(rW) || isNaN(rH) || rW <= 0 || rH <= 0) {
            statusMessage.textContent = '❌ Rasio X dan Y harus berupa angka positif.';
            return;
        }

        const ratio = rW / rH;

        if (!isNaN(inputW) && inputW > 0 && isNaN(inputH)) {
            // Jika Lebar diisi, hitung Tinggi
            const calculatedH = inputW / ratio;
            heightResult.textContent = `Hasil: ${calculatedH.toFixed(decimalPlaces)} px`;
            widthResult.textContent = `Input: ${inputW} px`;
            statusMessage.textContent = '✅ Tinggi dihitung berdasarkan Lebar.';

            // Hapus nilai dari input yang dihitung
            heightInput.value = '';

        } else if (!isNaN(inputH) && inputH > 0 && isNaN(inputW)) {
            // Jika Tinggi diisi, hitung Lebar
            const calculatedW = inputH * ratio;
            widthResult.textContent = `Hasil: ${calculatedW.toFixed(decimalPlaces)} px`;
            heightResult.textContent = `Input: ${inputH} px`;
            statusMessage.textContent = '✅ Lebar dihitung berdasarkan Tinggi.';

            // Hapus nilai dari input yang dihitung
            widthInput.value = '';

        } else if (!isNaN(inputW) && !isNaN(inputH)) {
            statusMessage.textContent = '⚠️ Harap hanya masukkan satu nilai dimensi (Lebar atau Tinggi) untuk dihitung.';
            widthResult.textContent = `Input: ${inputW} px`;
            heightResult.textContent = `Input: ${inputH} px`;
        } else {
            statusMessage.textContent = 'Masukkan nilai Lebar atau Tinggi untuk memulai perhitungan.';
        }
    }

    // --- LOGIKA INPUT CHANGE ---
    widthInput.addEventListener('input', () => {
        // Hapus input Tinggi saat Lebar diisi
        if (widthInput.value !== '') heightInput.value = '';
        calculateAspect();
    });

    heightInput.addEventListener('input', () => {
        // Hapus input Lebar saat Tinggi diisi
        if (heightInput.value !== '') widthInput.value = '';
        calculateAspect();
    });

    ratioW.addEventListener('input', calculateAspect);
    ratioH.addEventListener('input', calculateAspect);

    // --- LOGIKA PRESETS ---
    presetButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const ratioStr = e.target.dataset.ratio;
            const [w, h] = ratioStr.split(':').map(Number);

            // Reset visual preset
            presetButtons.forEach(p => p.classList.remove('bg-indigo-100'));
            e.target.classList.add('bg-indigo-100');

            ratioW.value = w;
            ratioH.value = h;
            calculateAspect();

            statusMessage.textContent = `Rasio diatur ke ${ratioStr}. Masukkan dimensi untuk menghitung.`;
        });
    });

    // Initial calculation (hanya untuk menampilkan status default)
    calculateAspect();
}
function initializeTimeDrift(containerId) {
    const checkTimeBtn = document.getElementById('checkTimeBtn');
    const localTimeDisplay = document.getElementById('localTimeDisplay');
    const onlineTimeDisplay = document.getElementById('onlineTimeDisplay');
    const driftResult = document.getElementById('driftResult');
    const latencyEstimate = document.getElementById('latencyEstimate');
    const statusMessage = document.getElementById('timeStatusMessage');
    
    // API endpoint publik yang cepat untuk mendapatkan waktu server
    const TIME_API_URL = 'https://worldtimeapi.org/api/ip'; 

    function formatMs(ms) {
        if (Math.abs(ms) < 1000) {
            return `${ms.toFixed(0)} ms`;
        }
        return `${(ms / 1000).toFixed(2)} s`;
    }
    
    // --- FUNGSI BARU: Update Jam Lokal Real-Time ---
    function updateClock() {
        localTimeDisplay.textContent = new Date().toLocaleTimeString('id-ID', { hour12: false });
    }
    
    // Mulai update jam lokal setiap detik (1000ms)
    let clockInterval = setInterval(updateClock, 1000);
    // Pastikan interval dihentikan jika tool diganti, tetapi karena ini adalah satu file tools.js besar, 
    // kita asumsikan interval ini akan berjalan selama halaman tools dibuka.

    async function checkTimeDrift() {
        statusMessage.textContent = 'Membandingkan waktu... Harap tunggu.';
        checkTimeBtn.disabled = true;

        // 1. Waktu Lokal (T_start) sebelum permintaan API
        const T_start = Date.now();
        // localTimeDisplay sudah diperbarui oleh interval, tidak perlu di sini
        onlineTimeDisplay.textContent = 'Memuat...';
        driftResult.textContent = 'Menghitung...';

        try {
            const response = await fetch(TIME_API_URL);
            if (!response.ok) throw new Error('API server error.');
            
            const data = await response.json();
            
            // 2. Waktu Lokal (T_end) setelah permintaan API selesai
            const T_end = Date.now();
            
            // 3. Waktu Server Online (T_O_Server) (diubah dari detik ke milidetik)
            const T_O_Server = data.unixtime * 1000;
            
            // 4. Hitung Latensi Jaringan (perkiraan satu arah)
            const T_Network = T_end - T_start; // Total waktu pulang-pergi (RTT)
            const T_Latency = T_Network / 2; 

            // 5. Waktu Online yang Disesuaikan (T_O_Adjusted)
            // Ini adalah waktu server yang diperkirakan tiba di PC Anda
            const T_O_Adjusted = T_O_Server + T_Latency; 

            // 6. Hitung Selisih (Drift)
            const drift = T_end - T_O_Adjusted; 
            
            // --- Tampilkan Hasil ---
            
            // Tampilkan Waktu Server yang Disesuaikan
            onlineTimeDisplay.textContent = new Date(T_O_Adjusted).toLocaleTimeString('id-ID', { hour12: false });
            
            // Tampilkan Selisih Drift
            driftResult.textContent = formatMs(drift);
            
            const driftAbs = Math.abs(drift);
            driftResult.className = `text-3xl font-extrabold font-mono mt-1 ${driftAbs < 500 ? 'text-green-700' : 'text-red-700'}`;
            
            // Tampilkan Detail Latensi
            latencyEstimate.textContent = `Latensi Jaringan (total waktu RTT): ${formatMs(T_Network)}.`;

            if (driftAbs < 500) {
                statusMessage.textContent = '✅ Jam Anda sangat akurat (selisih di bawah 500 ms).';
            } else if (drift > 0) {
                 statusMessage.textContent = `⚠️ Jam Anda ${formatMs(drift)} lebih cepat dari waktu server.`;
            } else {
                 statusMessage.textContent = `⚠️ Jam Anda ${formatMs(Math.abs(drift))} lebih lambat dari waktu server.`;
            }

        } catch (error) {
            statusMessage.textContent = `❌ Gagal mengambil waktu online. Cek koneksi internet Anda.`;
            onlineTimeDisplay.textContent = 'Error';
            driftResult.textContent = 'Error';
            latencyEstimate.textContent = '';
        }

        checkTimeBtn.disabled = false;
    }

    checkTimeBtn.addEventListener('click', checkTimeDrift);
    
    // Panggil update clock saat inisialisasi untuk display awal
    updateClock(); 
    
    // Otomatis cek saat pertama kali dimuat
    checkTimeDrift(); 
}
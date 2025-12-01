// ... (Setelah BarcodeToolContent atau konten alat terakhir lainnya)

// Watak berdasarkan Neptu Total
const WATAK_NEPTU = {
    7: 'Lakuning Bumi (Pendiam, introspektif, mudah memaafkan)',
    8: 'Lakuning Geni (Bersemangat, agresif, mudah marah)',
    9: 'Lakuning Angin (Santai, tidak terduga, cepat berubah)',
    10: 'Pendito Mukti (Cerdas, suka belajar, berwibawa)',
    11: 'Satriyo Wibowo (Dermawan, dihormati, disukai banyak orang)',
    12: 'Lakuning Kembang (Menarik, suka bergaul, mudah mendapat jodoh)',
    13: 'Lakuning Lintang (Tertutup, pendiam, suka menyendiri)',
    14: 'Lakuning Rembulan (Penuh kasih, pesona, bisa menenangkan)',
    15: 'Lakuning Srengenge (Cepat, kuat, berani, pemimpin)',
    16: 'Wasesa Segara (Luas hati, pemaaf, banyak rezeki)',
    17: 'Satria Wirang (Sering mendapat masalah, perlu waspada)',
    18: 'Juru Kunci (Kuat, fokus, memegang teguh prinsip)',
};

// Hasil Jodoh (Sisa Pembagian 7) - (Contoh sederhana)
const JODOH_RAMALAN = [
    { nama: "Padu", deskripsi: "Sering bertengkar, tapi tidak sampai pisah." }, // Sisa 0
    { nama: "Sujanan", deskripsi: "Sering ada godaan dari pihak ketiga, rawan perselingkuhan." }, // Sisa 1
    { nama: "Pesthi", deskripsi: "Rukun, tenteram, dan selamat sampai tua." }, // Sisa 2
    { nama: "Ratu", deskripsi: "Sangat harmonis, dihormati, dan disegani lingkungan." }, // Sisa 3
    { nama: "Tibo Lara", deskripsi: "Sering sakit atau menderita, salah satu akan meninggal duluan." }, // Sisa 4
    { nama: "Pati", deskripsi: "Akan bercerai atau salah satu meninggal muda." }, // Sisa 5
    { nama: "Tunggak Semi", deskripsi: "Rezeki lancar, sering mendapat keberuntungan." } // Sisa 6
];

// Arah Geblak berdasarkan Hari
const GEBLAK_ARAH = {
    'Minggu': 'Barat Daya (Hindari: Barat Laut dan Timur Laut)',
    'Senin': 'Tenggara (Hindari: Timur Laut dan Barat Laut)',
    'Selasa': 'Barat Laut (Hindari: Tenggara dan Barat Daya)',
    'Rabu': 'Timur Laut (Hindari: Barat Daya dan Tenggara)',
    'Kamis': 'Utara (Hindari: Selatan)',
    'Jumat': 'Timur (Hindari: Barat)',
    'Sabtu': 'Selatan (Hindari: Utara)',
};
const NEPTU_HARI = { "Senin": 4, "Selasa": 3, "Rabu": 7, "Kamis": 8, "Jumat": 6, "Sabtu": 9, "Minggu": 5 };

// Neptu Pasaran (Pahing=9, Pon=7, ..., Legi=5) - Diurutkan berdasarkan hariPasaran C# (Pahing-Legi)
const NEPTU_PASARAN = { "Pahing": 9, "Pon": 7, "Wage": 4, "Kliwon": 8, "Legi": 5 };

const WATAK_HARI = {
    "Senin": "Peredaran Bulan: Senang pada kebenaran, ikhlas, cekatan dalam segala hal, bicaranya tidak dapat dipermainkan.",
    "Minggu": "Peredaran Matahari: Hatinya terang, ikhlas dalam segala hal untuk sanak saudara, keras budinya, cinta terhadap sasamanya, suci dan pandai berbicara serta dapat memerintah orang tua.",
    "Selasa": "Peredaran Api: Senang berbohong, dibenci orang, jika memiliki sahabat hanya sebentar karena bertentangan, pembosan dan cepat meninggalkan segala hal yang sedang dikerjakan.",
    "Rabu": "Peredaran Bumi: Kebaikannya kadang-kadang berlebihan, berkecukupan, kalau berbicara tegas, pendiam, jarang memikirkan akibatnya.",
    "Kamis": "Peredaran Angin & Petir: Jodohnya sering meninggal terlebih dahulu, bicaranya menakutkan, sulit berteman, batinnya tidak tulus, hatinya lekas panas, pemarah, senang pujian dan mudah ditipu dengan kata-kata halus.",
    "Jumat": "Peredaran Bintang: Suka menasehati, suka memberi, senang mencari kepandaian, wataknya halus, suka terhadap sanak saudara, banyak sahabat yang mencintainya.",
    "Sabtu": "Peredaran Air: Sering dimusuhi orang, ditakuti, jarang berteman, pandai mencari penghidupan (berdagang), semua pekerjaan harus segera dilaksanakan, pekerja keras.",
};

const WATAK_PASARAN = {
    "Pon": "(Somahita) Watak Kambing: Suka nasehat, tiada bepergian jauh, yang dimakan berupa tanaman yang artinya miliknya sendiri, sering marah dengan isteri/ keluarganya, kadang kala berani sama tuannya dimana keberanian ini tidak dapat dicegah, kekayaannya sedang, ingin selalu diturut nasehatnya, budinya tenteram.",
    "Wage": "(Prabuanom) Watak Sapi: Jinak, terserah yang memerintah, makannya harus diberi, ceroboh, pemarah, kadang kala mengamuk jika dicambuk, melanggar apa saja, sedikit mencari makan akan tetapi jika makan lupa sanak saudara dan orang tuanya, mudah difitnah karena fikirannya getas, sombong.",
    "Kliwon": "(Wisa marta durjana tengah) Watak Kera: Suka memanjat, galak, banyak akal, berkeliaran di pohon, air, walau telah diberi makan masih menggigit, mempermainkan orang, sukar didekati dan diberi kebaikan. Watak Anjing: Setia pada tuannya, besar kemauannya, sering selamat karena setia kepada tuannya, tetapi makannya kotor.",
    "Legi": "(Sumendi) Watak Kucing: Awas, jinak, celakanya jika difitnah, sukar mencurigai kecuali jika telah difitnah, dapat berkumpul dengan orang kaya/miskin. Watak Tikus: Pada malam hari berjaga, awas, berhati-hati, sering bingung, sedikit makannya, gigitannya berbisa, yang terkena gigitan cepat mati, orang sering memasang perangkap untuknya, dapat berbuat sesuatu, selalu mengingat perbuatan baik / buruk, besar kebahagiaannya/ celakanya.",
    "Pahing": "(Cendana) Watak Harimau: Selalu pergi jauh, duduk menyendiri, tidur menyendiri, jarang makan kecuali jika dipelihara Raja, banyak musuh, berbahaya jika didahului tetapi jika ia yang mendahului tidak menjadi apa, jika memiliki senjata dipelihara, kemarahannya timbul karena wanita, sering tertipu, jika barangnya hilang jarang kembali.",
};

const ZODIAC_DESC = [
    "Aquarius\nyaitu Independen, humanis, inovatif, dan tidak konvensional. Mereka sering memiliki pandangan ke depan dan suka berpikir out-of-the-box.",
    "Pisces\nyaitu Sensitif, empatik, dan intuitif. Mereka cenderung artistik dan memiliki imajinasi yang kaya. Kadang mereka bisa menjadi terlalu emosional.",
    "Aries\nyaitu Berani, penuh energi, dan ambisius. Mereka memiliki sifat kepemimpinan yang kuat dan selalu siap menghadapi tantangan baru.",
    "Taurus\nyaitu Stabil, praktis, dan setia. Mereka cenderung menyukai kenyamanan dan memiliki ketekunan yang kuat dalam mencapai tujuan.",
    "Gemini\nyaitu Komunikatif, cerdas, dan mudah beradaptasi. Mereka suka bersosialisasi dan memiliki rasa ingin tahu yang tinggi.",
    "Cancer\nyaitu Penuh kasih sayang, sensitif, dan protektif. Mereka sangat peduli pada keluarga dan rumah tangga.",
    "Leo\nyaitu Karismatik, percaya diri, dan penuh semangat. Mereka suka menjadi pusat perhatian dan memiliki jiwa yang besar.",
    "Virgo\nyaitu Teliti, analitis, dan praktis. Mereka cenderung perfeksionis dan selalu berusaha untuk meningkatkan diri.",
    "Libra\nyaitu Diplomatis, adil, dan harmonis. Mereka sangat peduli pada keseimbangan dan keadilan dalam hubungan sosial.",
    "Scorpio\nyaitu Intens, misterius, dan penuh gairah. Mereka memiliki kedalaman emosi yang kuat dan sering kali sangat tegas.",
    "Sagittarius\nyaitu Petualang, optimis, dan filosofis. Mereka suka menjelajah dan mencari makna dalam kehidupan.",
    "Capricorn\nyaitu Ambisius, disiplin, dan realistis. Mereka sangat fokus pada tujuan dan bekerja keras untuk mencapainya."
];

const CHINESE_ZODIAC_LIST = ["Rat/Tikus", "Ox/Lembu", "Tiger/Harimau", "Rabbit/Kelinci", "Dragon/Naga", "Snake/Ular", "Horse/Kuda", "Goat/Kambing", "Monkey/Monyet", "Rooster/Ayam Jantan", "Dog/Anjing", "Pig/Babi"];
const CHINESE_ZODIAC_DESC = [
    "Cerdas, intuitif, dan gesit. Mereka sering kali cepat beradaptasi dan memiliki daya tarik yang alami.",
    "Kuat, dapat diandalkan, dan pekerja keras. Mereka memiliki ketekunan dan kesabaran yang luar biasa.",
    "Berani, dinamis, dan penuh semangat. Mereka adalah pemimpin alami dan tidak takut menghadapi tantangan.",
    "Lembut, bijaksana, dan perhatian. Mereka cenderung tenang dan berusaha menghindari konflik.",
    "Energik, karismatik, dan penuh percaya diri. Mereka memiliki keberanian dan sering kali menginspirasi orang lain.",
    "Bijaksana, intuitif, dan misterius. Mereka cenderung berpikir dalam dan memiliki kemampuan analitis yang tajam.",
    "Bebas, penuh energi, dan giat. Mereka menikmati kebebasan dan selalu mencari petualangan baru.",
    "Kreatif, lembut, dan penuh kasih. Mereka memiliki rasa seni yang kuat dan cenderung peduli pada orang lain.",
    "Cerdas, jenaka, dan penasaran. Mereka memiliki kemampuan untuk memecahkan masalah dan sering kali sangat inventif.",
    "Percaya diri, jujur, dan pekerja keras. Mereka cenderung detail dan suka menjaga kerapihan.",
    "Setia, dapat dipercaya, dan ramah. Mereka sangat peduli pada keadilan dan kebenaran.",
    "Jujur, tulus, dan penuh kasih. Mereka cenderung murah hati dan suka membantu orang lain."
];
// --- DATA LOGIKA GEBLAK DARI KODE C# ---

const GEBLAK_KATEGORI = {
    GUNUNG: "GUNUNG - Anak cucunya bakal menemukan kemuliaan.",
    GUNTUR: "GUNTUR - Anak cucunya bakal menemukan celaka.",
    SEGARA: "SEGARA - Anak cucunya bakal menemukan kesusahan.",
    ASAT: "ASAT - Anak cucunya bakal menemukan penderitaan."
};

// Array Neptu yang masuk ke kategori (sesuai logika C# Anda)
const HASIL_GUNUNG = [10, 12, 16, 17, 18, 20, 24, 25, 26, 29, 32, 33, 34, 35, 36];
const HASIL_GUNTUR = [8, 11, 14, 21, 23, 27, 28, 30, 31];
const HASIL_SEGARA = [9, 13, 15, 19, 22];
// Neptu 7 tidak diklasifikasikan dalam kategori Geblak (sesuai C#), atau masuk Asat
const NEPTU_HARI_BAIK = {
    7: ["Selasa Wage"],
    8: ["Senin Wage", "Selasa Legi"],
    9: ["Senin Legi", "Minggu Wage"],
    10: ["Selasa Pon", "Jumat Wage", "Minggu Legi"],
    11: ["Senin Pon", "Selasa Kliwon", "Rabu Wage", "Jumat Legi"],
    12: ["Senin Kliwon", "Selasa Pahing", "Rabu Legi", "Kamis Wage", "Minggu Pon"],
    13: ["Senin Pahing", "Kamis Legi", "Jumat Pon", "Sabtu Wage", "Minggu Kliwon"],
    14: ["Rabu Pon", "Jumat Kliwon", "Sabtu Legi", "Minggu Pahing"],
    15: ["Rabu Kliwon", "Kamis Pon", "Jumat Pahing"],
    16: ["Rabu Pahing", "Kamis Kliwon", "Sabtu Pon"],
    17: ["Kamis Pahing", "Sabtu Kliwon"],
    18: ["Sabtu Pahing"]
};

const SIRKULASI_HARAPAN = [
    { value: 1, name: "Sandang (Pakaian)" },
    { value: 2, name: "Pangan (Makanan/Rezeki)" },
    { value: 3, name: "Papan (Tempat Tinggal/Kekayaan)" },
    { value: 4, name: "Loro (Sakit/Celaka)" },
    { value: 5, name: "Pati (Kematian/Perpisahan)" }
];

const PrimbonToolContent = `
    <h2 class="text-2xl font-bold text-red-800 mb-4 flex items-center">
        <i data-lucide="sun" class="w-6 h-6 mr-3"></i> Primbon Jawa
    </h2>
    <div class="bg-white p-6 rounded-xl shadow-lg space-y-8">

        <div class="flex border-b border-gray-200">
            <button data-primbon-tab="watak" class="primbon-tab-button py-2 px-4 text-sm font-medium border-b-2 border-red-500 text-red-600 transition duration-150">Primbon Watak</button>
            <button data-primbon-tab="jodoh" class="primbon-tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-red-600 hover:border-red-300 transition duration-150">Primbon Jodoh</button>
            <button data-primbon-tab="geblak" class="primbon-tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-red-600 hover:border-red-300 transition duration-150">Hitungan Geblak</button>
            <button data-primbon-tab="nikah" class="primbon-tab-button py-2 px-4 text-sm font-medium border-b-2 border-transparent text-gray-500 hover:text-red-600 hover:border-red-300 transition duration-150">Hari Nikah</button>
        </div>

        <div id="primbon-tab-content">
            </div>
        
        <div id="primbon-notes" class="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
            <i data-lucide="info" class="w-4 h-4 mr-1 inline-block"></i>
            Perhitungan Primbon adalah bagian dari budaya dan kepercayaan Jawa, semua perhitungan sudah sama dengan kitab Primbon Betaljemur Adammakna.
        </div>

    </div>
    <button class="mt-6 text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm" onclick="renderPage('tools')">
        &larr; Kembali ke Daftar Tools
    </button>
`;

// Data Weton (untuk dropdown)
const WETONS = [
    { hari: 'Senin', neptu: 4 }, { hari: 'Selasa', neptu: 5 }, { hari: 'Rabu', neptu: 7 },
    { hari: 'Kamis', neptu: 8 }, { hari: 'Jumat', neptu: 6 }, { hari: 'Sabtu', neptu: 9 },
    { hari: 'Minggu', neptu: 5 }
];
const PASARANS = [
    { hari: 'Kliwon', neptu: 8 }, { hari: 'Legi', neptu: 5 }, { hari: 'Pahing', neptu: 9 },
    { hari: 'Pon', neptu: 7 }, { hari: 'Wage', neptu: 4 }
];

function generateWetonOptions() {
    let options = '';
    WETONS.forEach(weton => {
        PASARANS.forEach(pasaran => {
            const wetonText = `${weton.hari} ${pasaran.hari}`;
            const totalNeptu = weton.neptu + pasaran.neptu;
            options += `<option value="${totalNeptu}">${wetonText} (Neptu: ${totalNeptu})</option>`;
        });
    });
    return options;
}

// --- KONTEN TAB SPESIFIK PRIMBON ---

const PRIMBON_WATAK_CONTENT = `
    <h3 class="text-xl font-semibold mb-4 text-red-700">Primbon Watak (Weton Kelahiran)</h3>

    <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg border mb-6">
        <span class="text-sm font-medium text-gray-700">Mode Input:</span>
        <div class="flex items-center">
            <span id="mode-label" class="text-sm font-semibold text-red-600 mr-3">Tanggal Lahir</span>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="weton-toggle" value="" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
        </div>
    </div>

    <div id="input-date-area">
        <label for="watak-date-input" class="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir:</label>
        <input type="date" id="watak-date-input" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" max="${new Date().toISOString().split('T')[0]}">
    </div>

    <div id="input-weton-area" class="hidden">
        <label for="weton-select" class="block text-sm font-medium text-gray-700 mb-1">Pilih Weton:</label>
        <select id="weton-select" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
            <option value="">-- Pilih Weton --</option>
            ${generateWetonOptions()}
        </select>
    </div>
    
    <button id="hitung-watak-btn" class="w-full mt-4 px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md">
        Hitung Semua
    </button>
    
    <div class="mt-6 border-t pt-4">
        <h4 class="text-lg font-semibold text-gray-800 mb-2">Hasil Primbon Watak dan Neptu</h4>
        <div id="primbon-result" class="p-4 bg-red-100 border border-red-300 rounded-lg min-h-[100px] flex items-center justify-center whitespace-pre-wrap">
            <p class="text-gray-600">Hasil Watak akan muncul di sini.</p>
        </div>
    </div>

    <div class="mt-6 border-t pt-4">
        <h4 class="text-lg font-semibold text-gray-800 mb-2">Hasil Umur, Zodiak, dan Generasi</h4>
        <div id="age-result" class="p-4 bg-red-100 border border-red-300 rounded-lg min-h-[100px] flex items-center justify-center whitespace-pre-wrap">
            <p class="text-gray-600">Hasil Umur dan Zodiak akan muncul di sini.</p>
        </div>
    </div>
`;

const PRIMBON_JODOH_CONTENT = `
    <h3 class="text-xl font-semibold mb-4 text-red-700">Primbon Jodoh (Kecocokan Neptu)</h3>
    
    <div class="flex items-center justify-between bg-gray-50 p-3 rounded-lg border mb-6">
        <span class="text-sm font-medium text-gray-700">Mode Input:</span>
        <div class="flex items-center">
            <span id="jodoh-mode-label" class="text-sm font-semibold text-red-600 mr-3">Tanggal Lahir</span>
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="jodoh-toggle" value="" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
            </label>
        </div>
    </div>

    <div id="jodoh-input-area" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div id="jodoh-input-pria">
            <label for="jodoh-name-pria" class="block text-sm font-medium text-gray-700 mb-1">Nama Pria:</label>
            <input type="text" id="jodoh-name-pria" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 mb-4" placeholder="Pasangan Pria">

            <div id="jodoh-date-pria">
                <label for="jodoh-date-input-pria" class="block text-sm font-medium text-gray-700 mb-1">Tgl Lahir Pria:</label>
                <input type="date" id="jodoh-date-input-pria" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" max="${new Date().toISOString().split('T')[0]}">
            </div>

            <div id="jodoh-weton-pria" class="hidden">
                <label for="jodoh-select-pria" class="block text-sm font-medium text-gray-700 mb-1">Pilih Weton Pria:</label>
                <select id="jodoh-select-pria" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
                    <option value="">-- Pilih Weton Pria --</option>
                    ${generateWetonOptions()}
                </select>
            </div>
        </div>

        <div id="jodoh-input-wanita">
            <label for="jodoh-name-wanita" class="block text-sm font-medium text-gray-700 mb-1">Nama Wanita:</label>
            <input type="text" id="jodoh-name-wanita" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 mb-4" placeholder="Pasangan Wanita">

            <div id="jodoh-date-wanita">
                <label for="jodoh-date-input-wanita" class="block text-sm font-medium text-gray-700 mb-1">Tgl Lahir Wanita:</label>
                <input type="date" id="jodoh-date-input-wanita" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" max="${new Date().toISOString().split('T')[0]}">
            </div>

            <div id="jodoh-weton-wanita" class="hidden">
                <label for="jodoh-select-wanita" class="block text-sm font-medium text-gray-700 mb-1">Pilih Weton Wanita:</label>
                <select id="jodoh-select-wanita" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
                    <option value="">-- Pilih Weton Wanita --</option>
                    ${generateWetonOptions()}
                </select>
            </div>
        </div>
    </div>
    
    <button id="hitung-jodoh-btn" class="w-full px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md">
        Hitung Jodoh
    </button>
    
    <div id="jodoh-result" class="p-4 bg-red-100 border border-red-300 rounded-lg min-h-[100px] mt-6 flex items-center justify-center whitespace-pre-wrap">
        <p class="text-gray-600">Pilih data kedua pasangan dan klik "Hitung Jodoh".</p>
    </div>
`;

const PRIMBON_GEBLAK_CONTENT = `
    <h3 class="text-xl font-semibold mb-4 text-red-700">Primbon Geblak (Perhitungan Peringatan)</h3>
    <p class="text-sm text-gray-600 mb-4">Gunakan tanggal meninggal untuk menghitung Hari Peringatan (3, 7, 40, 100, Pendak, 1000 hari) dan Kategori Geblak.</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
            <label for="geblak-date-input" class="block text-sm font-medium text-gray-700 mb-1">Tanggal Meninggal:</label>
            <input type="date" id="geblak-date-input" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" max="${new Date().toISOString().split('T')[0]}">
        </div>
        <div>
            <label for="geblak-name-input" class="block text-sm font-medium text-gray-700 mb-1">Nama Almarhum/ah (Opsional):</label>
            <input type="text" id="geblak-name-input" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Contoh: Alm. Budi">
        </div>
    </div>
    
    <button id="hitung-geblak-btn" class="w-full px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md">
        Hitung Hari Peringatan
    </button>

    <div id="geblak-result" class="p-4 bg-red-100 border border-red-300 rounded-lg min-h-[100px] mt-6 flex items-center justify-center whitespace-pre-wrap">
        <p class="text-gray-600">Masukkan tanggal meninggal dan klik "Hitung Hari Peringatan".</p>
    </div>
`;
const PRIMBON_NIKAH_CONTENT = `
    <h3 class="text-xl font-semibold mb-4 text-red-700">Primbon Mencari Hari Nikah</h3>
    <p class="text-sm text-gray-600 mb-4">Hitung Hari Nikah terbaik berdasarkan Neptu Pasangan dan Sirkulasi/Harapan setelah menikah.</p>
    
    <div id="nikah-input-area" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div id="nikah-input-pria">
            <label for="nikah-name-pria" class="block text-sm font-medium text-gray-700 mb-1">Nama Pria:</label>
            <input type="text" id="nikah-name-pria" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 mb-4" placeholder="Pasangan Pria">
            <label for="nikah-date-input-pria" class="block text-sm font-medium text-gray-700 mb-1">Tgl Lahir Pria:</label>
            <input type="date" id="nikah-date-input-pria" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" max="${new Date().toISOString().split('T')[0]}">
        </div>

        <div id="nikah-input-wanita">
            <label for="nikah-name-wanita" class="block text-sm font-medium text-gray-700 mb-1">Nama Wanita:</label>
            <input type="text" id="nikah-name-wanita" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 mb-4" placeholder="Pasangan Wanita">
            <label for="nikah-date-input-wanita" class="block text-sm font-medium text-gray-700 mb-1">Tgl Lahir Wanita:</label>
            <input type="date" id="nikah-date-input-wanita" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" max="${new Date().toISOString().split('T')[0]}">
        </div>
    </div>

    <div class="mb-6">
        <label for="nikah-sirkulasi-select" class="block text-sm font-medium text-gray-700 mb-1">Pilih Sirkulasi/Harapan Setelah Nikah:</label>
        <select id="nikah-sirkulasi-select" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
            <option value="-1">-- Pilih Harapan --</option>
            ${SIRKULASI_HARAPAN.map((opt, index) => `<option value="${index + 1}">${opt.name}</option>`).join('')}
        </select>
    </div>
    
    <button id="hitung-nikah-btn" class="w-full px-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md">
        Cari Hari Baik Nikah
    </button>
    
    <div id="nikah-result" class="p-4 bg-red-100 border border-red-300 rounded-lg min-h-[100px] mt-6 flex items-center justify-center whitespace-pre-wrap">
        <p class="text-gray-600">Masukkan data kedua pasangan dan pilih harapan, lalu klik "Cari Hari Baik Nikah".</p>
    </div>
`;

function hitungHariPeringatan(tanggalMeninggal) {
    const tanggalAcuan = new Date(tanggalMeninggal);
    const result = [];

    // Days to add for each ceremony
    const peringatan = [
        { hari: "3 Harian (Mendhak Telu)", days: 2 }, // Hari ke-3 adalah tanggal meninggal + 2 hari
        { hari: "7 Harian", days: 6 },
        { hari: "40 Harian (Matang Puluh)", days: 39 },
        { hari: "100 Harian (Nyatus)", days: 99 },
        { hari: "1 Tahun (Mendhak Pisan)", days: 364 }, // Biasanya kurang 1 hari
        { hari: "2 Tahun (Mendhak Pindo)", days: 729 }, // Biasanya kurang 1 hari
        { hari: "1000 Harian (Nyewu)", days: 999 }
    ];

    peringatan.forEach(p => {
        const date = new Date(tanggalAcuan);
        // Tambahkan hari. getTime() dalam milidetik
        date.setDate(tanggalAcuan.getDate() + p.days);

        // Dapatkan Weton (gunakan fungsi yang sudah ada)
        const wetonData = getWetonFromDate(date);

        const tanggalWeton = date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

        result.push({
            peringatan: p.hari,
            tanggal: tanggalWeton,
            weton: wetonData.weton,
            neptu: wetonData.totalNeptu
        });
    });

    return result;
}

function hitungKategoriGeblak(tanggalMeninggal) {
    const wetonData = getWetonFromDate(new Date(tanggalMeninggal));
    const neptu = wetonData.totalNeptu;

    let kategori = GEBLAK_KATEGORI.ASAT; // Default jika tidak ada yang cocok (seperti Neptu 7)

    if (HASIL_GUNUNG.includes(neptu)) {
        kategori = GEBLAK_KATEGORI.GUNUNG;
    } else if (HASIL_GUNTUR.includes(neptu)) {
        kategori = GEBLAK_KATEGORI.GUNTUR;
    } else if (HASIL_SEGARA.includes(neptu)) {
        kategori = GEBLAK_KATEGORI.SEGARA;
    }
    // Jika tidak termasuk di atas, biarkan ASAT (sesuai asumsi logika C# jika array tidak lengkap)

    return { neptu, kategori };
}

function getAgeData(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    // Perhitungan total
    const timeDiffMs = today.getTime() - birth.getTime();
    const totalDays = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);

    // Perhitungan umur eksak (years, months, days)
    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonth1 = today.getMonth() - birth.getMonth();
    let ageDay1 = today.getDate() - birth.getDate();

    if (ageDay1 < 0) {
        const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDay1 += daysInPrevMonth;
        ageMonth1--;
    }

    if (ageMonth1 < 0) {
        ageMonth1 += 12;
        ageYears--;
    }

    const totalMonths = ageYears * 12 + ageMonth1;

    return {
        years: ageYears,
        totalMonths: totalMonths,
        weeks: totalWeeks,
        days: totalDays,
        exactYears: ageYears,
        exactMonths: ageMonth1,
        exactDays: ageDay1,
    };
}

/**
 * Menentukan Zodiak Barat berdasarkan tanggal lahir.
 * @param {Date} birthDate Tanggal lahir.
 * @returns {string} Nama Zodiak dan deskripsinya.
 */
function getZodiacSign(birthDate) {
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;
    let index = -1;

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) index = 0; // Aquarius
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) index = 1; // Pisces
    else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) index = 2; // Aries
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) index = 3; // Taurus
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) index = 4; // Gemini
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) index = 5; // Cancer
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) index = 6; // Leo
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) index = 7; // Virgo
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) index = 8; // Libra
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) index = 9; // Scorpio
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) index = 10; // Sagittarius
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) index = 11; // Capricorn

    if (index !== -1) return ZODIAC_DESC[index];
    return "Unknown";
}

/**
 * Menentukan Zodiak Cina berdasarkan tahun lahir.
 * @param {Date} birthDate Tanggal lahir.
 * @returns {string} Nama Zodiak Cina dan deskripsinya.
 */
function getChineseZodiac(birthDate) {
    const year = birthDate.getFullYear();
    // Menggunakan 1900 = Tikus (indeks 0)
    const startYear = 1900;
    let index = (year - startYear) % 12;
    if (index < 0) index += 12;

    return `${CHINESE_ZODIAC_LIST[index]}\nyaitu ${CHINESE_ZODIAC_DESC[index]}`;
}

/**
 * Menentukan Generasi berdasarkan tahun lahir.
 * @param {Date} birthDate Tanggal lahir.
 * @returns {string} Nama Generasi dan rentang tahun.
 */
function getGeneration(birthDate) {
    const year = birthDate.getFullYear();
    if (year < 1946) return "The Builders/Pre-Boomer/Silent Generation (-1945)";
    else if (year >= 1946 && year <= 1964) return "Baby Boomers (1946-1964)";
    else if (year >= 1965 && year <= 1980) return "X Generation/Generasi X (1965-1980)";
    else if (year >= 1981 && year <= 1996) return "Y Generation/Milenial (1981-1996)";
    else if (year >= 1997 && year <= 2012) return "Z Generation/Generasi Z (1997-2012)";
    else if (year >= 2013 && year <= 2024) return "Generasi Alpha (2013-2024)";
    else if (year >= 2025 && year <= 2039) return "Generasi Beta (2025-2039)";
    else return "Generasi tidak diketahui";
}

// Menggantikan logika perhitungan Weton dari C#
function getWetonFromDate(date) {
    const hariSeminggu = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const hariPasaran = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"]; // Urutan Pasaran yang sesuai dengan perhitungan umum (Minggu Legi = 10, Senin Pahing = 13, dst)

    // Tanggal acuan (Epoch Jawa), di sini menggunakan 1900-01-01 (Senin Kliwon)
    // Dalam kode C#, acuan 1900-01-01 adalah HARI KE-0 dan PASARAN KE-0 (Senin, Pahing)
    const referenceDate = new Date('1900-01-01T00:00:00');

    // Hitung selisih hari (di C# adalah 'TimeSpan selisih')
    const timeDiff = date.getTime() - referenceDate.getTime();
    const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // Perhitungan indeks hari dan pasaran (sesuai logika C# Anda)
    // C# Anda: Senin=0, Selasa=1, ..., Minggu=6
    // JS: Minggu=0, Senin=1, ..., Sabtu=6. Kita harus koreksi.

    // Hari Minggu (JS) = totalDays % 7 (ini sudah benar)
    let idxHariJS = date.getDay();

    // Indeks Hari C# (Senin=0, ..., Minggu=6) -> kita gunakan untuk array neptuHari/watakHari
    const hariSemingguCsharp = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    const idxHariCsharp = totalDays % 7; // Karena 1900-01-01 adalah Senin (indeks 0 di C# array)

    // Indeks Pasaran C# (Pahing=0, ..., Legi=4)
    const hariPasaranCsharp = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"];
    const idxPasaranCsharp = totalDays % 5;

    const hari = hariSemingguCsharp[idxHariCsharp];
    const pasaran = hariPasaranCsharp[idxPasaranCsharp];

    const neptuHari = NEPTU_HARI[hari];
    const neptuPasaran = NEPTU_PASARAN[pasaran];
    const totalNeptu = neptuHari + neptuPasaran;

    return {
        hari: hari,
        pasaran: pasaran,
        neptuHari: neptuHari,
        neptuPasaran: neptuPasaran,
        totalNeptu: totalNeptu,
        weton: `${hari} ${pasaran}`
    };
}
function initPrimbon() {
    const tabContentArea = document.getElementById('primbon-tab-content');
    const tabButtons = document.querySelectorAll('.primbon-tab-button');

    // Default ke Watak
    renderPrimbonTab('watak');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabKey = button.getAttribute('data-primbon-tab');
            renderPrimbonTab(tabKey);
        });
    });

    function renderPrimbonTab(tabKey) {
        // Update styling tab
        tabButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-primbon-tab') === tabKey;
            btn.classList.toggle('border-red-500', isActive);
            btn.classList.toggle('text-red-600', isActive);
            btn.classList.toggle('border-transparent', !isActive);
            btn.classList.toggle('text-gray-500', !isActive);
        });

        tabContentArea.innerHTML = ''; // Bersihkan konten

        if (tabKey === 'watak') {
            tabContentArea.innerHTML = PRIMBON_WATAK_CONTENT;
            initWatakPrimbon();
        } else if (tabKey === 'jodoh') {
            tabContentArea.innerHTML = PRIMBON_JODOH_CONTENT;
            initJodohPrimbon();
        } else if (tabKey === 'geblak') {
            tabContentArea.innerHTML = PRIMBON_GEBLAK_CONTENT;
            initGeblakPrimbon();
        } else if (tabKey === 'nikah') {
            tabContentArea.innerHTML = PRIMBON_NIKAH_CONTENT;
            initNikahPrimbon();
        }
        lucide.createIcons();
    }
}
// --- LOGIKA JODOH DARI KODE C# ---

const JODOH_PESTHI = { nama: "PESTHI", deskripsi: "Rukun, bahagia, dan tentram dalam rumah tangganya, meskipun banyak masalah menerjang, tapi pasangan akan tetap setia dan langgeng sampai tua." };
const JODOH_RATU = { nama: "RATU", deskripsi: "Sangat Jodoh, dihormati tetangga, orang terdekat maupun orang lain, banyak membuat iri orang lain." };
const JODOH_JODOH = { nama: "JODOH", deskripsi: "Cocok satu dan lainnya, dapat menerima kekurangan dan kelebihan masing-masing pasangan, langgeng sampai tua." };
const JODOH_TOPO = { nama: "TOPO", deskripsi: "Sengsara diawal pernikahan, berupa ekonomi atau lainnya, tapi kedepannya apabila sudah mempunyai momongan atau sudah lama menjalani rumah tangga akan bahagia sampai tua." };
const JODOH_TINARI = { nama: "TINARI", deskripsi: "Gampang mencari rejeki dan jarang merasakan kekurangan ekonomi, sering mendapat keberuntungan dalam hidup." };
const JODOH_PADU = { nama: "PADU", deskripsi: "Sering bertengkar didalam rumah tangganya, meskipun hanya masalah sepele, tapi tidak sampai cerai." };
const JODOH_SUJANAN = { nama: "SUJANAN", deskripsi: "Kedua pasangan akan sering bertengkar karena masalah perselingkuhan, mungkin salah satu atau keduanya akan berselingkuh, dan jarang rukun" };
const JODOH_PEGAT = { nama: "PEGAT", deskripsi: "Bakal menemui banyak masalah ekonomi, atau selingkuh yang berujung cerai." };

const JODOH_8_WETON = [
    JODOH_PEGAT, // 1
    JODOH_RATU,  // 2
    JODOH_JODOH, // 3
    JODOH_TOPO,  // 4
    JODOH_TINARI,// 5
    JODOH_PADU,  // 6
    JODOH_SUJANAN,// 7
    JODOH_PESTHI // 8
];

// Hasil Neptu % 7
const JODOH_HASIL_7 = {
    1: { nama: "WASESA SEGARA", deskripsi: "Pasangan yang memiliki keluhuran budi pekerti, mudah memberikan maaf, memiliki wibawa dimata orang lain, dan berlapang dada dalam berbagai hal." },
    2: { nama: "TUNGGAK SEMI", deskripsi: "Pasangan akan memiliki rejeki yang melimpah dalam rumah tangganya." },
    3: { nama: "SATRIA WIBAWA", deskripsi: "Pasangan memiliki kemuliaan dan keluhuran didalam keluarga maupun masyarakat." },
    4: { nama: "SUMUR SINABA", deskripsi: "Pasangan memiliki pengetahuan atau kepandaian yang luar biasa sehingga sering menjadi tempat bertanya bagi orang lain." },
    5: { nama: "SATRIA WIRANG", deskripsi: "Pasangan akan sering menanggung malu dan susah." },
    6: { nama: "BUMI KEPETAK", deskripsi: "Kehidupan rumah tangganya akan tahan pada kondisi sengsara dan kalut hati. Sisi baik pasangan ini adalah rajin bekerja dan selalu menjaga kebersihan." },
    0: { nama: "LEBU KETIUP ANGIN", deskripsi: "Pasangan kehidupan rumah tangganya akan tahan pada kondisi sengsara dan kalut hati. Sisi baik pasangan ini adalah rajin bekerja dan selalu menjaga kebersihan." }
};

// Hasil Neptu % 4
const JODOH_HASIL_4 = {
    1: { nama: "GONTO", deskripsi: "Kehidupan rumah tangganya sedikit atau jarang memiliki keturunan." },
    2: { nama: "GEMBILI", deskripsi: "Kehidupan rumah tangganya akan dikaruniai banyak keturunan." },
    3: { nama: "SRI", deskripsi: "Kehidupan rumah tangganya akan memiliki rezeki yang berlimpah." },
    0: { nama: "PUNGGEL", deskripsi: "Salah satu diantara suami dan istri akan meninggal." }
};

// Hasil Neptu Pribadi % 9 (HANYA digunakan untuk Primbon Betaljemur Adammakna)
// Dibuat dalam bentuk map key string untuk memudahkan pencarian (Contoh C#: "nsatu1", "ndua2")
const JODOH_BETALJEMUR_9 = {
    "1-1": "Baik, Saling Mencintai",
    "1-2": "Baik", "2-1": "Baik",
    "1-3": "Kuat Tetapi Rejekinya Jauh", "3-1": "Kuat Tetapi Rejekinya Jauh",
    "1-4": "Banyak Celakanya", "4-1": "Banyak Celakanya",
    "1-5": "Bercerai", "5-1": "Bercerai",
    "1-6": "Sulit Kehidupannya", "6-1": "Sulit Kehidupannya",
    "1-7": "Banyak Musuh", "7-1": "Banyak Musuh",
    "1-8": "Sengsara", "8-1": "Sengsara",
    "1-9": "Tempat Berlindung", "9-1": "Tempat Berlindung",

    "2-2": "Selamat, Rejeki banyak",
    "2-3": "Salah Satu Meninggal Terlebih Dahulu", "3-2": "Salah Satu Meninggal Terlebih Dahulu",
    "2-4": "Banyak Mengalami Godaan", "4-2": "Banyak Mengalami Godaan",
    "2-5": "Banyak Celakanya", "5-2": "Banyak Celakanya",
    "2-6": "Cepat menjadi kaya", "6-2": "Cepat menjadi kaya",
    "2-7": "Banyak Anaknya yang Mati", "7-2": "Banyak Anaknya yang Mati",
    "2-8": "Murah Rejeki", "8-2": "Murah Rejeki",
    "2-9": "Banyak Rejeki", "9-2": "Banyak Rejeki",

    "3-3": "Melarat",
    "3-4": "Banyak Celakanya", "4-3": "Banyak Celakanya",
    "3-5": "Cepat Bercerai", "5-3": "Cepat Bercerai",
    "3-6": "Mendapat Anugerah", "6-3": "Mendapat Anugerah",
    "3-7": "Banyak celakanya", "7-3": "Banyak celakanya",
    "3-8": "Salah Satu Meninggal", "8-3": "Salah Satu Meninggal",
    "3-9": "Banyak Rejeki", "9-3": "Banyak Rejeki",

    "4-4": "Sering Sakit",
    "4-5": "Banyak Mengalami Godaan", "5-4": "Banyak Mengalami Godaan",
    "4-6": "Banyak Rejeki", "6-4": "Banyak Rejeki",
    "4-7": "Melarat", "7-4": "Melarat",
    "4-8": "Mengalami Banyak Rintangan", "8-4": "Mengalami Banyak Rintangan",
    "4-9": "Salah Satu Kalah", "9-4": "Salah Satu Kalah",

    "5-5": "Beruntung Terus Menerus",
    "5-6": "Murah Rejeki", "6-5": "Murah Rejeki",
    "5-7": "Pekerjaan Terus ada", "7-5": "Pekerjaan Terus ada",
    "5-8": "Banyak Rintangan", "8-5": "Banyak Rintangan",
    "5-9": "Murah Rejeki", "9-5": "Murah Rejeki",

    "6-6": "Banyak Celakanya",
    "6-7": "Rukun, Damai/Tenteram", "7-6": "Rukun, Damai/Tenteram",
    "6-8": "Banyak Musuh", "8-6": "Banyak Musuh",
    "6-9": "Sengsara", "9-6": "Sengsara",

    "7-7": "Terhukum Oleh Istrinya",
    "7-8": "Dicintai Orang Lain", "8-7": "Dicintai Orang Lain",
    "7-9": "Perjodohan Kekal", "9-7": "Perjodohan Kekal",

    "8-8": "Dicintai Orang Lain",
    "8-9": "Banyak Celakanya", "9-8": "Banyak Celakanya",

    "9-9": "Susah Rejeki"
};

// Hasil Hari Pasangan (Indeks Hari C# 0=Senin, 6=Minggu)
const JODOH_BETALJEMUR_HARI = {
    "0-0": "Tidak Baik", // Sen-Sen
    "0-1": "Yuwana - Selamat, Meskipun Difitnah Orang", "1-0": "Yuwana - Selamat, Meskipun Difitnah Orang", // Sen-Sel
    "0-2": "Anaknya Wanita", "2-0": "Anaknya Wanita", // Sen-Rab
    "0-3": "Dicintai Orang Banyak", "3-0": "Dicintai Orang Banyak", // Sen-Kam
    "0-4": "Yuwana - Selamat, Meskipun Difitnah Orang", "4-0": "Yuwana - Selamat, Meskipun Difitnah Orang", // Sen-Jum
    "0-5": "Berkat - Selalu Cukup Meski Pendapatannya Sedikit", "5-0": "Berkat - Selalu Cukup Meski Pendapatannya Sedikit", // Sen-Sab
    "0-6": "Banyak Penyakit", "6-0": "Banyak Penyakit", // Sen-Min

    "1-1": "Tidak Baik", // Sel-Sel
    "1-2": "Kaya", "2-1": "Kaya", // Sel-Rab
    "1-3": "Kaya", "3-1": "Kaya", // Sel-Kam
    "1-4": "Bercerai", "4-1": "Bercerai", // Sel-Jum
    "1-5": "Sering Bertengkar", "5-1": "Sering Bertengkar", // Sel-Sab
    "1-6": "Miskin", "6-1": "Miskin", // Sel-Min

    "2-2": "Tidak Baik", // Rab-Rab
    "2-3": "Yuwana - Selamat, Meskipun Difitnah Orang", "3-2": "Yuwana - Selamat, Meskipun Difitnah Orang", // Rab-Kam
    "2-4": "Yuwana - Selamat, Meskipun Difitnah Orang", "4-2": "Yuwana - Selamat, Meskipun Difitnah Orang", // Rab-Jum
    "2-5": "Baik", "5-2": "Baik", // Rab-Sab
    "2-6": "Yuwana - Selamat, Meskipun Difitnah Orang", "6-2": "Yuwana - Selamat, Meskipun Difitnah Orang", // Rab-Min

    "3-3": "Yuwana - Selamat, Meskipun Difitnah Orang", // Kam-Kam
    "3-4": "Yuwana - Selamat, Meskipun Difitnah Orang", "4-3": "Yuwana - Selamat, Meskipun Difitnah Orang", // Kam-Jum
    "3-5": "Bercerai", "5-3": "Bercerai", // Kam-Sab
    "3-6": "Bertengkar", "6-3": "Bertengkar", // Kam-Min

    "4-4": "Miskin", // Jum-Jum
    "4-5": "Celaka", "5-4": "Celaka", // Jum-Sab
    "4-6": "Yuwana - Selamat, Meskipun Difitnah Orang", "6-4": "Yuwana - Selamat, Meskipun Difitnah Orang", // Jum-Min

    "5-5": "Tidak Baik", // Sab-Sab
    "5-6": "Miskin", "6-5": "Miskin", // Sab-Min

    "6-6": "Sering Sakit" // Min-Min
};

// Logika Tab Watak
function initWatakPrimbon() {
    const dateInput = document.getElementById('watak-date-input');
    const wetonSelect = document.getElementById('weton-select');
    const hitungBtn = document.getElementById('hitung-watak-btn');
    const primbonResultDiv = document.getElementById('primbon-result'); // Menggunakan ID baru
    const ageResultDiv = document.getElementById('age-result'); // Menggunakan ID baru
    const toggle = document.getElementById('weton-toggle');
    const dateArea = document.getElementById('input-date-area');
    const wetonArea = document.getElementById('input-weton-area');
    const modeLabel = document.getElementById('mode-label');

    // --- Inisialisasi Default ---
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    // --- Toggle Handler ---
    toggle.addEventListener('change', () => {
        const isWetonMode = toggle.checked;
        if (isWetonMode) {
            dateArea.classList.add('hidden');
            wetonArea.classList.remove('hidden');
            modeLabel.textContent = 'Dropdown Weton';
        } else {
            dateArea.classList.remove('hidden');
            wetonArea.classList.add('hidden');
            modeLabel.textContent = 'Tanggal Lahir';
        }
        primbonResultDiv.innerHTML = `<p class="text-gray-600">Pilih input lalu klik "Hitung Semua".</p>`;
        ageResultDiv.innerHTML = `<p class="text-gray-600">Hasil Umur dan Zodiak akan muncul di sini.</p>`;
    });

    // --- Hitung Watak Handler ---
    hitungBtn.addEventListener('click', () => {
        primbonResultDiv.innerHTML = `<p class="text-red-600">Menghitung...</p>`;
        ageResultDiv.innerHTML = `<p class="text-red-600">Menghitung...</p>`;

        let wetonData;
        let birthDate = null;
        const isWetonMode = toggle.checked;

        // 1. Dapatkan data weton
        if (isWetonMode) {
            // Mode Dropdown Weton (Hanya Primbon Watak)
            const wetonText = wetonSelect.options[wetonSelect.selectedIndex].text;
            if (wetonSelect.value === "") {
                primbonResultDiv.innerHTML = `<p class="text-red-600 font-bold">Harap pilih Weton dari daftar.</p>`;
                ageResultDiv.innerHTML = ``;
                return;
            }

            // Ekstrak Hari, Pasaran, dan Neptu dari teks Dropdown
            const [hari, pasaran] = wetonText.split(' ');
            const totalNeptu = parseInt(wetonSelect.value);

            wetonData = {
                hari: hari,
                pasaran: pasaran,
                neptuHari: NEPTU_HARI[hari],
                neptuPasaran: NEPTU_PASARAN[pasaran],
                totalNeptu: totalNeptu,
                weton: `${hari} ${pasaran}`
            };

            // Non-aktifkan hasil umur/zodiak
            ageResultDiv.innerHTML = `<p class="text-red-600 font-bold">Perhitungan Umur, Zodiak, dan Generasi memerlukan **Input Tanggal Lahir**.</p>`;

        } else {
            // Mode Tanggal Lahir (Primbon Watak + Umur/Zodiak)
            const dateValue = dateInput.value;
            if (!dateValue) {
                primbonResultDiv.innerHTML = `<p class="text-red-600 font-bold">Harap masukkan Tanggal Lahir yang valid.</p>`;
                ageResultDiv.innerHTML = ``;
                return;
            }
            birthDate = new Date(dateValue);
            wetonData = getWetonFromDate(birthDate);
        }

        // --- Bagian 1: Hasil Primbon Watak (Selalu ditampilkan) ---
        const { hari, pasaran, neptuHari, neptuPasaran, totalNeptu, weton } = wetonData;
        const watakHari = WATAK_HARI[hari];
        const watakPasaran = WATAK_PASARAN[pasaran];

        let primbonOutputText = ``;

        if (birthDate) {
            const tanggalLahir = birthDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' });
            primbonOutputText += `Tanggal lahir Anda adalah ${tanggalLahir}\n`;
        }

        primbonOutputText += `Weton Anda adalah **${weton}**\n`;
        primbonOutputText += `Dengan neptu ${neptuHari} + ${neptuPasaran} = ${totalNeptu}\n\n`;

        primbonOutputText += `WATAK KELAHIRAN\n`;
        primbonOutputText += `\n**${hari.toUpperCase()}**\n${watakHari}\n`;
        primbonOutputText += `\n**${pasaran.toUpperCase()}**\n${watakPasaran}`;

        primbonResultDiv.innerHTML = `<div class="text-left w-full">${primbonOutputText.trim().replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}</div>`;


        // --- Bagian 2: Hasil Umur, Zodiak, dan Generasi (HANYA jika ada birthDate) ---
        if (birthDate) {
            const ageData = getAgeData(birthDate);
            const zodiacSign = getZodiacSign(birthDate);
            const chineseZodiac = getChineseZodiac(birthDate);
            const generation = getGeneration(birthDate);

            let ageOutputText = ``;

            // Umur
            ageOutputText += `Umur Anda adalah **${ageData.years} tahun**, atau ${ageData.totalMonths} bulan, atau ${ageData.weeks} minggu, atau ${ageData.days} hari\n`;
            ageOutputText += `Total umur eksak: **${ageData.exactYears} tahun, ${ageData.exactMonths} bulan, dan ${ageData.exactDays} hari**\n\n`;

            // Zodiak
            ageOutputText += `**Zodiak** Anda adalah ${zodiacSign}\n\n`;

            // Zodiak Cina
            ageOutputText += `**Zodiak Cina** Anda adalah ${chineseZodiac}\n\n`;

            // Generasi
            ageOutputText += `Anda masuk dalam **generasi "${generation}"**`;

            ageResultDiv.innerHTML = `<div class="text-left w-full">${ageOutputText.trim().replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}</div>`;
        }
    });
}

// Logika Tab Jodoh
// Logika Tab Jodoh
function initJodohPrimbon() {
    const namePriaInput = document.getElementById('jodoh-name-pria');
    const nameWanitaInput = document.getElementById('jodoh-name-wanita');
    const dateInputPria = document.getElementById('jodoh-date-input-pria');
    const dateInputWanita = document.getElementById('jodoh-date-input-wanita');
    const wetonSelectPria = document.getElementById('jodoh-select-pria');
    const wetonSelectWanita = document.getElementById('jodoh-select-wanita');
    const hitungBtn = document.getElementById('hitung-jodoh-btn');
    const resultDiv = document.getElementById('jodoh-result');
    const toggle = document.getElementById('jodoh-toggle');
    const dateAreaPria = document.getElementById('jodoh-date-pria');
    const wetonAreaPria = document.getElementById('jodoh-weton-pria');
    const dateAreaWanita = document.getElementById('jodoh-date-wanita');
    const wetonAreaWanita = document.getElementById('jodoh-weton-wanita');
    const modeLabel = document.getElementById('jodoh-mode-label');

    // --- Inisialisasi Default ---
    if (dateInputPria) dateInputPria.value = new Date().toISOString().split('T')[0];
    if (dateInputWanita) dateInputWanita.value = new Date().toISOString().split('T')[0];

    // Pria/Wanita menggunakan input date default
    namePriaInput.value = 'Pasangan Pria';
    nameWanitaInput.value = 'Pasangan Wanita';

    // Helper untuk mendapatkan Neptu dari input, terlepas dari modenya
    function getNeptuData(isWetonMode, dateInput, wetonSelect) {
        if (isWetonMode) {
            const wetonValue = wetonSelect.value;
            if (!wetonValue) return null;

            const wetonText = wetonSelect.options[wetonSelect.selectedIndex].text;
            const [hari, pasaran] = wetonText.split(' ');
            const neptu = parseInt(wetonValue);

            return {
                neptuTotal: neptu,
                wetonText: `${hari} ${pasaran}`,
                neptuHari: NEPTU_HARI[hari],
                neptuPasaran: NEPTU_PASARAN[pasaran],
                indeksHari: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].indexOf(hari) // Indeks C#
            };
        } else {
            const dateValue = dateInput.value;
            if (!dateValue) return null;

            const date = new Date(dateValue);
            const wetonData = getWetonFromDate(date); // Fungsi dari Primbon Watak

            return {
                neptuTotal: wetonData.totalNeptu,
                wetonText: wetonData.weton,
                neptuHari: wetonData.neptuHari,
                neptuPasaran: wetonData.neptuPasaran,
                indeksHari: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"].indexOf(wetonData.hari), // Indeks C#
                tanggalLahir: date
            };
        }
    }

    // --- Toggle Handler ---
    toggle.addEventListener('change', () => {
        const isWetonMode = toggle.checked;
        if (isWetonMode) {
            modeLabel.textContent = 'Dropdown Weton';
            dateAreaPria.classList.add('hidden');
            wetonAreaPria.classList.remove('hidden');
            dateAreaWanita.classList.add('hidden');
            wetonAreaWanita.classList.remove('hidden');
        } else {
            modeLabel.textContent = 'Tanggal Lahir';
            dateAreaPria.classList.remove('hidden');
            wetonAreaPria.classList.add('hidden');
            dateAreaWanita.classList.remove('hidden');
            wetonAreaWanita.classList.add('hidden');
        }
        resultDiv.innerHTML = `<p class="text-gray-600">Pilih data kedua pasangan dan klik "Hitung Jodoh".</p>`;
    });

    // --- Hitung Jodoh Handler ---
    hitungBtn.addEventListener('click', () => {
        const isWetonMode = toggle.checked;

        const dataPria = getNeptuData(isWetonMode, dateInputPria, wetonSelectPria);
        const dataWanita = getNeptuData(isWetonMode, dateInputWanita, wetonSelectWanita);

        if (!dataPria || !dataWanita) {
            resultDiv.innerHTML = `<p class="text-red-600 font-bold">Harap lengkapi semua input pasangan.</p>`;
            return;
        }

        const neptu1 = dataPria.neptuTotal;
        const neptu2 = dataWanita.neptuTotal;
        const totalNeptu = neptu1 + neptu2;

        const namaPria = namePriaInput.value || 'Pasangan Pria';
        const namaWanita = nameWanitaInput.value || 'Pasangan Wanita';

        resultDiv.innerHTML = `<p class="text-red-600">Menghitung...</p>`;

        let outputText = ``;

        // 1. Bagian Info Pasangan
        outputText += `**${namaPria}**\n`;
        if (dataPria.tanggalLahir) {
            const tglPria = dataPria.tanggalLahir.toLocaleDateString('id-ID');
            outputText += `Tanggal lahir ${tglPria}, `;
        }
        outputText += `${dataPria.wetonText} (${dataPria.neptuHari} + ${dataPria.neptuPasaran} = ${neptu1})\n\n`;

        outputText += `**${namaWanita}**\n`;
        if (dataWanita.tanggalLahir) {
            const tglWanita = dataWanita.tanggalLahir.toLocaleDateString('id-ID');
            outputText += `Tanggal lahir ${tglWanita}, `;
        }
        outputText += `${dataWanita.wetonText} (${dataWanita.neptuHari} + ${dataWanita.neptuPasaran} = ${neptu2})\n\n`;

        outputText += `**TOTAL NEPTU: ${neptu1} + ${neptu2} = ${totalNeptu}**\n\n`;
        outputText += `---`;

        // 2. Ramalan Jodoh Berdasarkan Total Neptu (Modifikasi C# - Array Hasil)
        let hasilJodoh;
        if ([1, 9, 17, 25, 33].includes(totalNeptu)) hasilJodoh = JODOH_PEGAT;
        else if ([2, 10, 18, 26, 34].includes(totalNeptu)) hasilJodoh = JODOH_RATU;
        else if ([3, 11, 19, 27, 35].includes(totalNeptu)) hasilJodoh = JODOH_JODOH;
        else if ([4, 12, 20, 28, 36].includes(totalNeptu)) hasilJodoh = JODOH_TOPO;
        else if ([5, 13, 21, 29].includes(totalNeptu)) hasilJodoh = JODOH_TINARI;
        else if ([6, 14, 22, 30].includes(totalNeptu)) hasilJodoh = JODOH_PADU;
        else if ([7, 15, 23, 31].includes(totalNeptu)) hasilJodoh = JODOH_SUJANAN;
        else if ([8, 16, 24, 32].includes(totalNeptu)) hasilJodoh = JODOH_PESTHI;

        if (hasilJodoh) {
            outputText += `\n\n**1. Ramalan Jodoh (Neptu Total)**\n`;
            outputText += `Hasil: **${hasilJodoh.nama}**\nDeskripsi: ${hasilJodoh.deskripsi}`;
        }


        // 3. Ramalan Jodoh Berdasarkan Sisa Pembagian 7 (C# hasilBagi)
        const sisa7 = totalNeptu % 7;
        const hasil7 = JODOH_HASIL_7[sisa7];
        if (hasil7) {
            outputText += `\n\n**2. Ramalan Rezeki (Neptu % 7 sisa ${sisa7})**\n`;
            outputText += `Hasil: **${hasil7.nama}**\nDeskripsi: ${hasil7.deskripsi}`;
        }

        // 4. Ramalan Jodoh Berdasarkan Sisa Pembagian 4 (C# bagi4)
        const sisa4 = totalNeptu % 4;
        const hasil4 = JODOH_HASIL_4[sisa4];
        if (hasil4) {
            outputText += `\n\n**3. Ramalan Keturunan (Neptu % 4 sisa ${sisa4})**\n`;
            outputText += `Hasil: **${hasil4.nama}**\nDeskripsi: ${hasil4.deskripsi}`;
        }

        // 5. Primbon Betaljemur Adammakna (Neptu Pribadi % 9)
        const jodoh1 = neptu1 % 9 === 0 ? 9 : neptu1 % 9;
        const jodoh2 = neptu2 % 9 === 0 ? 9 : neptu2 % 9;
        const keyBetaljemur = `${Math.min(jodoh1, jodoh2)}-${Math.max(jodoh1, jodoh2)}`;
        const hasilBetaljemur = JODOH_BETALJEMUR_9[keyBetaljemur];

        if (hasilBetaljemur) {
            outputText += `\n\n**4. Betaljemur Adammakna (Neptu % 9)**\n`;
            outputText += `Neptu % 9 sisa Pria: ${jodoh1}, Wanita: ${jodoh2}\n`;
            outputText += `Hasil: **${hasilBetaljemur}**`;
        }

        // 6. Primbon Betaljemur Adammakna (Hari Pasangan)
        const idxHariPria = dataPria.indeksHari;
        const idxHariWanita = dataWanita.indeksHari;
        const keyHari = `${Math.min(idxHariPria, idxHariWanita)}-${Math.max(idxHariPria, idxHariWanita)}`;
        const hasilHari = JODOH_BETALJEMUR_HARI[keyHari];

        if (hasilHari) {
            outputText += `\n\n**5. Betaljemur Adammakna (Hari Pasangan)**\n`;
            outputText += `Hari Pasangan: ${dataPria.wetonText.split(' ')[0]} dan ${dataWanita.wetonText.split(' ')[0]}\n`;
            outputText += `Hasil: **${hasilHari}**`;
        }

        resultDiv.innerHTML = `<div class="text-left w-full">${outputText.trim().replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}</div>`;
    });
}

function initNikahPrimbon() {
    // 1. Get Elements
    const namePriaInput = document.getElementById('nikah-name-pria');
    const nameWanitaInput = document.getElementById('nikah-name-wanita');
    const dateInputPria = document.getElementById('nikah-date-input-pria');
    const dateInputWanita = document.getElementById('nikah-date-input-wanita');
    const sirkulasiSelect = document.getElementById('nikah-sirkulasi-select');
    const hitungBtn = document.getElementById('hitung-nikah-btn');
    const resultDiv = document.getElementById('nikah-result');

    // 2. Default Values
    if (dateInputPria) dateInputPria.value = new Date().toISOString().split('T')[0];
    if (dateInputWanita) dateInputWanita.value = new Date().toISOString().split('T')[0];

    // Helper untuk mendapatkan Neptu dari Tanggal (gunakan fungsi dari tab lain)
    function getNeptuDataFromDate(dateInput) {
        const dateValue = dateInput.value;
        if (!dateValue) return null;

        const date = new Date(dateValue);
        // getWetonFromDate adalah fungsi yang mengkonversi tanggal menjadi Weton & Neptu
        const wetonData = getWetonFromDate(date);

        return {
            neptuTotal: wetonData.totalNeptu,
            wetonText: wetonData.weton,
            neptuHari: wetonData.neptuHari,
            neptuPasaran: wetonData.neptuPasaran,
            tanggalLahir: date
        };
    }

    // 3. Hitung Handler
    hitungBtn.addEventListener('click', () => {
        const dataPria = getNeptuDataFromDate(dateInputPria);
        const dataWanita = getNeptuDataFromDate(dateInputWanita);
        const sirkulasiIndex = parseInt(sirkulasiSelect.value);

        if (!dataPria || !dataWanita) {
            resultDiv.innerHTML = `<p class="text-red-600 font-bold">Harap masukkan Tanggal Lahir kedua pasangan.</p>`;
            return;
        }
        if (sirkulasiIndex === -1) {
            resultDiv.innerHTML = `<p class="text-red-600 font-bold">Harap pilih Sirkulasi/Harapan terlebih dahulu.</p>`;
            return;
        }

        const namaPria = namePriaInput.value || 'Pasangan Pria';
        const namaWanita = nameWanitaInput.value || 'Pasangan Wanita';
        const neptu1 = dataPria.neptuTotal;
        const neptu2 = dataWanita.neptuTotal;
        const hasilTotal = neptu1 + neptu2;

        let sirkulasiTarget = sirkulasiIndex;
        // Logika C#: if (sirkulasi == 5) sirkulasi = 0;
        if (sirkulasiTarget === 5) {
            sirkulasiTarget = 0;
        }

        // --- Logika Pencarian Hari Baik (Sesuai C#) ---
        let hariBaik = 7;
        // Mencari nilai Neptu Hari Baik terkecil (7-18) yang memenuhi rumus
        while ((hasilTotal + hariBaik) % 5 !== sirkulasiTarget) {
            hariBaik++;
            if (hariBaik > 18) {
                // Berhenti jika sudah melewati Neptu maksimum (Sabtu Pahing = 18)
                hariBaik = -1;
                break;
            }
        }

        // --- Output Calculation ---
        const sirkulasiData = SIRKULASI_HARAPAN[sirkulasiIndex - 1];
        const sirkulasiText = sirkulasiData.name.toUpperCase();

        let outputText = ``;

        // 1. Info Pasangan
        outputText += `**${namaPria}**\n`;
        outputText += `Tgl Lahir ${dataPria.tanggalLahir.toLocaleDateString('id-ID')}, ${dataPria.wetonText} (${dataPria.neptuHari} + ${dataPria.neptuPasaran} = ${neptu1})\n`;

        outputText += `**${namaWanita}**\n`;
        outputText += `Tgl Lahir ${dataWanita.tanggalLahir.toLocaleDateString('id-ID')}, ${dataWanita.wetonText} (${dataWanita.neptuHari} + ${dataWanita.neptuPasaran} = ${neptu2})\n\n`;

        outputText += `**TOTAL NEPTU PASANGAN: ${hasilTotal}**\n`;
        outputText += `Sirkulasi/Harapan yang dipilih: **${sirkulasiText}**\n\n`;

        // 2. Hasil
        if (hariBaik > 0) {
            const hitungNikah = (hasilTotal + hariBaik) % 5;
            const hasilArray = NEPTU_HARI_BAIK[hariBaik];

            outputText += `--- RUMUS NEPTU + HARAPAN ---\n`;
            outputText += `Rumus: (Total Neptu + Neptu Hari Baik) % 5 = Sisa Angka Sirkulasi\n`;
            outputText += `(${hasilTotal} + **${hariBaik}**) % 5 = Sisa **${hitungNikah === 0 ? 5 : hitungNikah}**\n\n`;

            outputText += `**Neptu Hari Baik yang dibutuhkan adalah ${hariBaik}.**\n`;
            outputText += `Hari Weton dengan Neptu ${hariBaik} yang sesuai dengan Sirkulasi ${sirkulasiText} adalah:\n\n`;

            outputText += `**${hasilArray.join(', ')}**`;
        } else {
            outputText += `**TIDAK DITEMUKAN HARI BAIK**\n`;
            outputText += `Tidak ada Neptu Hari Baik (7-18) yang menghasilkan sisa Sirkulasi ${sirkulasiIndex} untuk Total Neptu ${hasilTotal}. Harap pilih Sirkulasi/Harapan lain.`;
        }

        // 3. Tampilkan Hasil (Gunakan metode .trim() dan .replace() untuk Bold/Newline)
        resultDiv.innerHTML = `
            <div class="text-left w-full">
                ${outputText
                .trim()
                .replace(/\n/g, '<br>')
                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            }
            </div>
        `;
    });
}
function initGeblakPrimbon() {
    const dateInput = document.getElementById('geblak-date-input');
    const nameInput = document.getElementById('geblak-name-input');
    const hitungBtn = document.getElementById('hitung-geblak-btn');
    const resultDiv = document.getElementById('geblak-result');

    // Inisialisasi default tanggal ke hari ini
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    hitungBtn.addEventListener('click', () => {
        const dateValue = dateInput.value;
        const nameValue = nameInput.value.trim() || 'Almarhum/ah';

        if (!dateValue) {
            resultDiv.innerHTML = `<p class="text-red-600 font-bold">Harap masukkan Tanggal Meninggal yang valid.</p>`;
            return;
        }

        const dateMeninggal = new Date(dateValue);
        const wetonMeninggal = getWetonFromDate(dateMeninggal);
        const hariPeringatan = hitungHariPeringatan(dateValue);
        const kategoriGeblak = hitungKategoriGeblak(dateValue);

        let outputText = ``;

        // Baris Profil
        const tglMeninggalFormatted = dateMeninggal.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' });

        outputText += `**${nameValue.toUpperCase()}**\n`;
        outputText += `Meninggal pada ${tglMeninggalFormatted}\n`;
        outputText += `Geblak : **${wetonMeninggal.weton}** (Neptu: ${wetonMeninggal.totalNeptu})\n\n`;

        outputText += `--- HARI PERINGATAN ---\n`;

        // Daftar Peringatan
        hariPeringatan.forEach(p => {
            outputText += `\n**• ${p.peringatan}**\n`;
            outputText += `Jatuh pada hari **${p.weton}**\n`;
            outputText += `Tanggal **${p.tanggal}**\n`;
        });

        // Kategori Geblak
        outputText += `\n\n--- KATEGORI GEBLAK ---\n\n`;
        outputText += `Kategori Geblak (berdasarkan neptu ${kategoriGeblak.neptu}):\n`;
        outputText += `**${kategoriGeblak.kategori}**\n\n`;

        // Catatan (Memperbaiki Indentasi dan Bolding)
        outputText += `*Awal hari dihitung setelah Surup (Adzan Maghrib). Misalnya 40 Hari adalah Jumat Kliwon, maka dilaksanakan pada Kamis Wage Malam Jumat Kliwon. Cara hitung geblak sudah sesuai dengan kitab Primbon Betaljemur Adammakna.`;

        // Tampilkan Hasil (Menggunakan trim() dan replace untuk Bold/Newline)
        resultDiv.innerHTML = `
            <div class="text-left w-full">${outputText.trim().replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}</div>`;
    });

}
// login.js
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Ambil elemen DOM berdasarkan ID dari login.html
const authForm = document.getElementById('authForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const authMessage = document.getElementById('authMessage');

// Pastikan objek 'supabase' tersedia (didefinisikan di config.js)
// Kami mengandalkan global scope yang dibuat oleh config.js

/**
 * Menampilkan pesan otentikasi di bawah tombol submit.
 * @param {string} message - Pesan yang akan ditampilkan.
 * @param {('success'|'error'|'info')} type - Tipe pesan untuk styling.
 */
function showMessage(message, type = 'info') {
    if (authMessage) {
        authMessage.textContent = message;
        authMessage.style.display = 'block';

        // Hapus kelas warna lama dan tambahkan kelas baru (Tailwind)
        authMessage.className = `text-sm font-medium pt-2 text-center`;
        switch (type) {
            case 'error':
                authMessage.classList.add('text-red-600');
                break;
            case 'success':
                authMessage.classList.add('text-green-600');
                break;
            default:
                authMessage.classList.add('text-blue-500');
        }
    }
}

function hideMessage() {
    if (authMessage) {
        authMessage.style.display = 'none';
        authMessage.textContent = '';
    }
}

/**
 * Menangani proses Login menggunakan Supabase.
 */
async function signIn(email, password) {
    if (typeof supabase === 'undefined') {
        showMessage("Layanan otentikasi tidak tersedia. Cek inisialisasi Supabase.", 'error');
        return;
    }

    hideMessage();
    if (submitButton) {
        submitButton.textContent = 'Memuat...';
        submitButton.disabled = true;
    }

    // Menggunakan objek supabase global dari config.js
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (submitButton) {
        submitButton.textContent = 'Log In';
        submitButton.disabled = false;
    }

    if (error) {
        console.error('Login Error:', error.message);
        // Tampilkan pesan error jika terjadi masalah otentikasi
        showMessage(`Login Gagal: ${error.message}`, 'error');
    } else if (data.user) {
        showMessage('Login berhasil! Mengalihkan...', 'success');
        
        // Redirect ke halaman database setelah berhasil login
        window.location.href = './database.html'; 
    } else {
        showMessage('Login selesai, tetapi data pengguna tidak ditemukan. Coba lagi.', 'info');
    }
}

/**
 * Menangani submit form dan memicu fungsi signIn.
 */
function handleSubmit(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        showMessage('Silakan masukkan email dan kata sandi Anda.', 'error');
        return;
    }
    
    signIn(email, password);
}

/**
 * Memeriksa apakah pengguna sudah login saat halaman dimuat, lalu mengalihkan jika ya.
 */
async function checkUserSession() {
    if (typeof supabase === 'undefined') {
        return;
    }
    
    const { data: { session } } = await supabase.auth.getSession();
    
    if (session) {
        console.log('Pengguna sudah login:', session.user);
        // Redirect ke halaman database jika session aktif
        window.location.href = './database.html'; 
    }
}


// Event Listener Utama
document.addEventListener('DOMContentLoaded', () => {
    // 1. Cek session saat halaman dimuat (untuk mencegah login ganda)
    checkUserSession();
    
    // 2. Pasang listener form untuk submit
    if (authForm) {
        authForm.addEventListener('submit', handleSubmit);
    }
});
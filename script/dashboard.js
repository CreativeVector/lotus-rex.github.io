async function fetchAndRenderExchangeRates() {
    const apiUrl = 'https://api.exchangerate-api.com/v4/latest/IDR';
    const cardContainer = contentArea.querySelector('#exchange-rate-cards');
    const dateLabel = contentArea.querySelector('#exchange-date-label');

    if (!cardContainer || !dateLabel) return;

    // Tampilkan placeholder loading
    dateLabel.innerHTML = `<div class="animate-pulse flex items-center">
        <i data-lucide="loader-2" class="w-4 h-4 mr-2 animate-spin"></i>
        Memuat tanggal pembaruan...
    </div>`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Gagal mengambil data kurs.');
        }
        const data = await response.json();
        const rates = data.rates;

        // **PERBAIKAN LOGIKA TANGGAL**
        // Menggunakan key 'time_last_updated' dari respons, dikali 1000 untuk milidetik.
        const lastUpdateTimestamp = data.time_last_updated * 1000;
        const updateDate = new Date(lastUpdateTimestamp);

        // Cek jika objek Date valid (jika timestamp-nya valid)
        if (isNaN(updateDate)) {
            throw new Error('Timestamp pembaruan tidak valid.');
        }

        const formattedDate = updateDate.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            // Tambahkan TimeZone untuk kejelasan, meskipun tidak selalu ada di data API
            timeZoneName: 'short'
        });

        // Tampilkan tanggal pembaruan di label
        dateLabel.innerHTML = `<i data-lucide="calendar" class="w-4 h-4 mr-2 text-indigo-600"></i> Terakhir Diperbarui : <span class="font-semibold text-gray-800"> ${formattedDate}</span>`;
        lucide.createIcons();

        // Data yang ingin ditampilkan: USD, EUR, JPY, GBP (dibandingkan IDR)
        const targetRates = {
            'USD': { icon: 'dollar-sign', color: 'bg-green-500' },
            'EUR': { icon: 'euro', color: 'bg-indigo-500' },
            'JPY': { icon: 'japanese-yen', color: 'bg-yellow-500' },
            'GBP': { icon: 'pound-sterling', color: 'bg-red-500' }
        };

        let cardsHtml = '';
        for (const currency in targetRates) {
            if (rates[currency]) {
                const rateValue = (1 / rates[currency]).toFixed(2);
                const meta = targetRates[currency];

                cardsHtml += StatCard(
                    `${currency} ke IDR`,
                    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(rateValue),
                    meta.icon,
                    meta.color
                );
            }
        }

        cardContainer.innerHTML = cardsHtml;
        lucide.createIcons();

    } catch (error) {
        console.error("Kesalahan API Kurs:", error);
        dateLabel.innerHTML = `<div class="text-red-500 flex items-center">
            <i data-lucide="alert-triangle" class="w-4 h-4 mr-2"></i> Error memuat tanggal: ${error.message}
        </div>`;
        cardContainer.innerHTML = `<div class="md:col-span-4 text-center p-8 bg-red-100 rounded-xl shadow-lg text-red-700">Terjadi kesalahan memuat kurs: ${error.message}</div>`;
    }
}


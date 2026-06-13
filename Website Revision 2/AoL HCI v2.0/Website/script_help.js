document.addEventListener('DOMContentLoaded', function () {
    const helpText = document.getElementById('help-text');
    const submitHelp = document.getElementById('submit-help');
    const helpResponse = document.getElementById('help-response');

    if (helpText && submitHelp && helpResponse) {
        submitHelp.addEventListener('click', function () {
            const question = helpText.value.trim();

            if (!question) {
                helpResponse.textContent = 'Silakan isi pertanyaan atau masalah Anda.';
                helpResponse.style.color = 'red';
                helpText.focus();
                return;
            }

            helpResponse.textContent = '';

            const confirmSubmit = confirm('Apakah Anda yakin ingin mengirimkan keluhan ini?');

            if (confirmSubmit) {
                helpResponse.textContent = 'Terima kasih! Pertanyaan Anda telah kami terima. Tim kami akan segera meninjau dan membantu Anda dalam waktu 1x24 jam kerja.';
                helpResponse.style.color = '#28a745';

                alert('Keluhan berhasil dikirim.');
                helpText.value = '';
            }
        });
    }
})
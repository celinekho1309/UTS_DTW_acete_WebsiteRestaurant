let totalItem = 0;
let totalHarga = 0;

const cartCount = document.getElementById('jumlah_item');
const totalPrice = document.getElementById('total_harga_teks');
const checkoutForm = document.getElementById('form_transaksi');
const buyButtons = document.querySelectorAll('.tombol_beli');

const daftarMenu = document.getElementById('daftar_menu_terpilih');

buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const price = parseInt(this.getAttribute('data-price'));

        if (totalItem === 0) {
            daftarMenu.innerHTML = '';
        }

        totalItem++;
        totalHarga += price;

        const liBaru = document.createElement('li');
        liBaru.innerText = `• ${title} (Rp ${price.toLocaleString('id-ID')})`;
        daftarMenu.appendChild(liBaru);

        cartCount.innerText = totalItem; 
        totalPrice.innerText = `Rp ${totalHarga.toLocaleString('id-ID')}`;

        alert(`"${title}" ditambahkan!`);
    });
});

checkoutForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (totalItem === 0) {
        alert('Keranjang kamu masih kosong!');
        return;
    }

    const name = document.getElementById('input_nama').value;
    const email = document.getElementById('input_email').value;
    const payment = document.getElementById('pilih_metode').value;

    alert(`Transaksi Berhasil!\n\nNama: ${name}\nEmail: ${email}\nPembayaran: ${payment}\nTotal Bayar: Rp ${totalHarga.toLocaleString('id-ID')}`);

    totalItem = 0;
    totalHarga = 0;
    cartCount.innerText = '0';
    totalPrice.innerText = 'Rp 0';
    daftarMenu.innerHTML = '<li class="teks_kosong">Belum ada menu yang dipilih.</li>';
    checkoutForm.reset();
});
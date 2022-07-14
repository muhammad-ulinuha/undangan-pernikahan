document.querySelector('#kirim').addEventListener('click',function(e)
	{	
		let pesan_baru = document.querySelector('#pesan');
		
		let daftar_pesan;
		if (localStorage.getItem('daftar_pesan')===null)
		{
			daftar_pesan = [];
		}
		else
		{
			daftar_pesan = JSON.parse(localStorage.getItem('daftar_pesan'));	
		}
		
		daftar_pesan.push(pesan_baru.value);	
		localStorage.setItem('daftar_pesan',JSON.stringify(daftar_pesan));
		
		let pesan = document.querySelector('#notif');		
		pesan.innerHTML = " Pesan berhasil disimpan, Silahkan Refresh Halaman.";
	});

    let tampilan = document.querySelector('#tampilpesan');
	
		daftar_pesan = JSON.parse(localStorage.getItem('daftar_pesan'));
		daftar_pesan.forEach(function(pesan){
			let myli = document.createElement('p');
			//console.log(pesan);
			myli.innerHTML += pesan;
			tampilan.appendChild(myli);
		});
let generateIstilah = () => {
	let istilahTerkaitData = $("#istilahTerkaitData");
	let data = "";
	let id = 0;
	let template = (title,ket) => {
		id+=1;
		data += `
				<div class="col-md-6 mb-2">
					<div class="card">
						<div class="card-header">
							<p class="mb-0 d-block" data-toggle="collapse" data-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
								${title}
							</p>
						</div>
						<div id="collapse${id}" class="collapse">
							<div class="card-body">
								${ket}
							</div>
						</div>
					</div>
				</div>
		`
	}

	template("ORANG DALAM RESIKO (<span class='green'>ODR</span>) / Pelaku Perjalanan",
		"<p>Orang yang TIDAK BERGEJALA tetapi MEMILIKI RIWAYAT PERJALANAN ATAU TINGGAL DI NEGARA/WILAYAH TERJANGKIT pada 14 hari terakhir.</p>");

	template("ORANG TANPA GEJALA (<span class='green'>OTG</span>)",
		`
			<p>Seseorang yang TIDAK BERGEJALA tetapi melakukan KONTAK ERAT (kontak fisik atau berada dalam ruangan atau berkunjung dalam radius 1 meter) dengan kasus PASIEN DALAM PENGAWASAN (PDP) atau KONFIRMASI dalam 2 hari sebelum kasus timbul gejala dan hingga 14 hari setelah kasus timbul gejala.
			Yang termasuk kontak erat adalah:</p>
			<ul><li>Petugas kesehatan yang memeriksa, merawat, mengantar dan membersihkan ruangan di tempat perawatan kasus tanpa menggunakan APD sesuai standar.</li>
			<li>Orang yang berada dalam suatu ruangan yang sama dengan kasus (termasuk tempat kerja, kelas, rumah, acara besar) dalam 2 hari sebelum kasus timbul gejala dan hingga 14 hari setelah kasus timbul gejala.</li>
			<li>Orang yang bepergian bersama (radius 1 meter) dengan segala jenis alat angkut/kendaraan dalam 2 hari sebelum kasus timbul gejala dan hingga 14 hari setelah kasus timbul gejala.</li>
			</ul>`);
	
	template("ORANG DALAM PEMANTAUAN (<span class='green'>ODP</span>)",
		`<ul><li>Orang yang mengalami demam (≥38.0C) atau riwayat demam; atau gejala gangguan sistem pernapasan seperti pilek/sakit tenggorokan/batuk, DAN tidak ada penyebab lain berdasarkan gambaran klinis yang meyakinkan DAN pada 14 hari terakhir sebelum timbul gejala memiliki riwayat perjalanan atau tinggal di negara/wilayah terjangkit.</li>
			<li>Orang yang mengalami gejala gangguan sistem pernapasan seperti pilek/sakit tenggorokan/batuk DAN pada 14 hari terakhir sebelum timbul gejala memiliki riwayat kontak dengan kasus konfirmasi COVID-19.</li>
			</ul>`);


	template("PASIEN DALAM PENGAWASAN  (<span class='green'>PDP</span>) ",
		`<ul><li>Orang dengan Infeksi Saluran Pernapasan Akut (ISPA) yaitu demam (≥38.oC) atau riwayat demam; disertai salah satu gejala/tanda penyakit pernapasan seperti: batuk/sesak nafas/sakit tenggorokan/pilek/pneumonia ringan hingga berat DAN tidak ada penyebab lain berdasarkan gambaran klinis yang meyakinkan DAN pada 14 hari terakhir sebelum timbul gejala memiliki riwayat perjalanan atau tinggal di negara/wilayah terjangkit yang melaporkan transmisi lokal (dapat dilihat melalui situs http://infeksiemerging.kemkes.go.id)</li>
			<li>Orang dengan demam (≥38.0C) atau riwayat demam atau ISPA DAN pada 14 hari terakhir sebelum timbul gejala memiliki riwayat kontak dengan kasus konfirmasi COVID-19.</li>
			<li>Orang dengan ISPA berat/pneumonia berat** yang membutuhkan perawatan di rumah sakit DAN tidak ada penyebab lain berdasarkan gambaran klinis yang meyakinkan.</li>
			</ul>`);

	template(" KASUS KONFIRMASI",
		`<p>Pasien yang terinfeksi COVID-19 dengan hasil pemeriksaan tes positif melalui pemeriksaan PCR.</p>`);

	istilahTerkaitData.html(data);
}

generateIstilah();

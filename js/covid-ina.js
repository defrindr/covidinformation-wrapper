import timeConverter from './timeConverter.js'

let fetchDataIna = async () => {
	let inaDataStatistik = $("#inaStatistik");
	let inaLastUpdate = $("#inaLastUpdated");
	let dataIna = "";

	let buildDataIna = (title, icon, total, color) => {
		let schemaStat = `
				<div class="col-md-4 col-sm-12 mb-4">
					<div class="card info-ina bg-${color} w-100">
						<div class="card-body">
							<div class="d-flex justify-content-between flex-wrap">
								<div class="icon">
									<span class="${icon}"></span>
								</div>
								<div class="text-right">
									<h3>${title}</h3>
									<p class="info_ina_total">
										<span class="inaKasus">${total}</span> Orang
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>`;
		dataIna += schemaStat;
	}
	fetch('https://literasistmj.000webhostapp.com/world/indonesia')
		.then(res => {
			return res.json();
		}).then(res => {
			return res.data[0];
		}).then(data => {
			buildDataIna("Jumlah Kasus", "fa fa-plus", data.jumlah_kasus, "primary");
			buildDataIna("Jumlah Meninggal", "far fa-sad-tear", data.jumlah_meninggal, "danger");
			buildDataIna("Jumlah Sembuh", "far fa-smile-wink", data.jumlah_sembuh, "success");

			inaLastUpdate.html(timeConverter(data.update_terakhir, true));
			inaDataStatistik.html(dataIna)
		});
}

fetchDataIna();

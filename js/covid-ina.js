function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

let fetchDataIna = async() => {
	let inaDataStatistik = $("#inaStatistik");
	let inaLastUpdate = $("#inaLastUpdated");
	let dataIna = "";

	let buildDataIna = (title,icon,total,color) => {
		let schemaStat = `
						<div class="col-md-4 mb-4">
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
		buildDataIna("Jumlah Kasus","fa fa-plus",data.jumlah_kasus,"primary");
		buildDataIna("Jumlah Meninggal","far fa-sad-tear",data.jumlah_meninggal,"danger");
		buildDataIna("Jumlah Sembuh","far fa-smile-wink",data.jumlah_sembuh,"success");

		inaLastUpdate.html(timeConverter(data.update_terakhir));
		inaDataStatistik.html(dataIna)
	});
}

let generateInaDatatable = () => {
	let link = "https://literasistmj.000webhostapp.com/provinces";
	let data = "";
	let inaDataTable = $("#inaDataTable");

	let appendTemplate = (data) => {
		inaDataTable.append(`
			<tr>
				<td>${data.provinsi}</td>
				<td>${data.kasus_positif}</td>
				<td>${data.kasus_sembuh}</td>
				<td>${data.kasus_meninggal}</td>
			</tr>
		`);
	}

	fetch(link).then(res => {
		return res.json();
	}).then(res => {
		res.data.forEach( row => {
			appendTemplate(row);
		});
	});
}

fetchDataIna();
generateInaDatatable();


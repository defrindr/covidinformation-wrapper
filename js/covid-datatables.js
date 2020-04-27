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


$(document).ready(function(){
	$('#worldDataTable').DataTable({
		responsive: true,
		ajax: {
			url: 'https://literasistmj.000webhostapp.com/worlds',
			dataSrc: 'data'
		},
		columns: [
			{data:'nama_negara'},
			{data:'jumlah_kasus'},
			{data:'jumlah_meninggal'},
			{data:'jumlah_sembuh'},
			{data:'jumlah_kasus_aktif'},
			{data:'update_terakhir'},

		]
	});

	$('#jatimDataTable').DataTable({
		responsive: true,
		ajax: {
			url: 'https://literasistmj.000webhostapp.com/jatim',
			dataSrc: 'data'
		},
		columns: [
			{data: 'zona'},
			{data: 'jumlah_kasus'},
			{data: 'jumlah_odp'},
			{data: 'jumlah_pdp'},
			{data: 'jumlah_positif'},
			{data: 'jumlah_sembuh'},
			{data: 'jumlah_meninggal'},
		]
	});
	
	$('#inaDataTable').DataTable({
		responsive: true,
		ajax: {
			url: 'https://literasistmj.000webhostapp.com/provinces',
			dataSrc: 'data'
		},
		columns: [
			{data: 'provinsi'},
			{data: 'kasus_positif'},
			{data: 'kasus_sembuh'},
			{data: 'kasus_meninggal'},
		]
	});
});



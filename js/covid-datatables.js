import timeConverter from './timeConverter.js';
import data from './source.js';

$(document).ready(function () {
	$('#worldDataTable').DataTable({
		responsive: true,
		ajax: {
			url: data.url+'/worlds',
			dataSrc: 'data'
		},
		columns: [{
				data: 'nama_negara'
			},
			{
				data: 'jumlah_kasus'
			},
			{
				data: 'jumlah_meninggal'
			},
			{
				data: 'jumlah_sembuh'
			},
			{
				data: 'jumlah_kasus_aktif'
			},
			{
				data: 'update_terakhir'
			},
		],
		columnDefs: [{
			targets: 5,
			render: function (data) {
				return timeConverter(data);
			}
		}]
	});

	$('#jatimDataTable').DataTable({
		responsive: true,
		ajax: {
			url: data.url+'/jatim',
			dataSrc: 'data'
		},
		columns: [{
				data: 'zona'
			},
			{
				data: 'jumlah_kasus'
			},
			{
				data: 'jumlah_odp'
			},
			{
				data: 'jumlah_pdp'
			},
			{
				data: 'jumlah_positif'
			},
			{
				data: 'jumlah_sembuh'
			},
			{
				data: 'jumlah_meninggal'
			},
		]
	});

	$('#inaDataTable').DataTable({
		responsive: true,
		ajax: {
			url: data.url+'/provinces',
			dataSrc: 'data'
		},
		columns: [{
				data: 'provinsi'
			},
			{
				data: 'kasus_positif'
			},
			{
				data: 'kasus_sembuh'
			},
			{
				data: 'kasus_meninggal'
			},
		]
	});
});
let getInformationTeam = async () => {
	let contributors = [{
		name: 'Defri Indra M',
		avatar_url: 'images/contributors/defrindr.jpg',
		quote: 'Try harder to get more',
		location: 'Ponorogo , ID',
		url: 'https://github.com/defrindr'
	}];

	let htmlContributors = $('#team-users');
	let dataShow = "";
	let templateContributor = (data) => {
		let column = (name,val) => {
			let schema = `
				<tr>
					<td>
						<b>${name}</b>
					</td>
					<td>
						${val}
					</td>
				</tr>`;
			return schema;
		}
		dataShow += `
			<div class="col-md-4 mb-4">
				<div class="card">
					<div class="contributors__image_container">
						<img src="${data.avatar_url}" alt="${data.name}" class="img img-fluid">
					</div>
					<div class="card-body">
						<table class="table border-0">
							<tbody class="border-0">
								${ column('Nama',data.name) }
								${ column('Quote',data.quote) }
								${ column('Location',data.location) }
								<tr>
									<td colspan="2" class="text-center">
										<a href="${data.url}" class="btn btn-success m-1 d-block">Github Link</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>`;
	}

	contributors.find(contributor => templateContributor(contributor));

	htmlContributors.html(dataShow);
}

getInformationTeam();
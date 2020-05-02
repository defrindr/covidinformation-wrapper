let getInformationTeam = async () => {
	let teamUsers = $('#team-users');
	let dataShow = "";
	let templateUser = (data) => {
		dataShow += `
			<div class="col-md-4 mb-4">
				<div class="card">
					<div class="card-header">
						<img src="${data.avatar_url}" alt="${data.login}" class="img rounded-circle w-50 ml-auto mr-auto mt-3 mb-5 d-block">
					</div>
					<div class="card-body">
						<table class="table border-0">
							<tbody class="border-0">
								<tr>
									<td>
										<b>Nama</b>
									</td>
									<td>
										${data.name}
									</td>
								</tr>
								<tr>
									<td>
										<b>Bio</b>
									</td>
									<td>
										${data.bio}
									</td>
								</tr>
								<tr>
									<td>
										<b>Location</b>
									</td>
									<td>
										${data.location}
									</td>
								</tr>
								<tr>
									<td>
										<b>Followers</b>
									</td>
									<td>
										${data.followers} people
									</td>
								</tr>
								<tr>
									<td>
										<b>Following</b>
									</td>
									<td>
										${data.following} people
									</td>
								</tr>
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

	let fetchData = async (link) => {
		let response = await fetch(link);
		if (response.ok) {
			let json = await response.json();
			templateUser(json);
		} else {
			throw new Error('Network connection error.');
		}
	}

	await fetchData("https://api.github.com/users/defrindr");

	await fetchData("https://api.github.com/users/yellteam");
	teamUsers.html(dataShow);
}

getInformationTeam();
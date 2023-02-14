fetch('https://restcountries.com/v2/all')
.then(response => {return response.json();})
.then(all => {
	let tralala = `<tr>
			<th>Name</th>
			<th>Region</th>
			<th>Flag</th>
			<th>Capital</th>
			</tr>`

	all.forEach((countries) => {
		tralala += `<tr>
		<td>${countries.name}</td>
		<td>${countries.region}</td>
		<td><img src='${countries.flag}' height = '100' width = '100'></td>
		<td>${countries.capital}</td>
		</tr>`
		console.log(countries.name)
	})

	document.getElementById('api').innerHTML = tralala

	// console.log(all)
})
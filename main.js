let input = document.querySelector('input')
let button = document.querySelector('#btn')
let wrapper = document.querySelector('.wrapper')

async function nameSearch() {
	let url = `https://api.nationalize.io/?name=${input.value}`
	let respone = await fetch(url)
	let result = await respone.json()

	console.log(result.country)

	let nameText = document.createElement('h2')
	nameText.classList.add('nameText')
	nameText.textContent=`${input.value.toLocaleUpperCase()} ismi`

	wrapper.appendChild(nameText)

	result.country.forEach(element => {
		let list = document.createElement('div')
		list.classList.add('list')
		
		list.innerHTML = `
		<div class="countryName">
			<p>${element.country_id}</p>
			<p>${Math.round(element.probability * 100)}%</p>
		</div>

	`

		wrapper.appendChild(list)
	})
	
	input.value = ''
}
button.addEventListener('click', nameSearch)

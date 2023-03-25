class Pojistenec
{
	constructor(name, tel, age )
	{
		this.name = name;
		this.age = age;
		this.tel = tel;

		this.tableTemplate = `
		<th>${this.name}</th>
		<th>${this.tel}</th>
		<th>${this.age}</th>
		`;
	}
	

}

class Evidence
{
	constructor(){}

	pojistenci = [];
	radkyPojistencu = [];
	tabulka = document.getElementById('myTable');

	nactiPojistence()
	{
		//fetch('pojistenci.json')
		//.then(data => this.pojistenci = data)
		//.catch(console.log);
		const pojistenci = [
			{
				"name": "Jan Novák",
				"phone": "731 584 972",
				"age": 31
			},
			{
				"name": "Josef Nový",
				"phone": "725 458 414",
				"age": 25
			},
			{
				"name": "Hanka Blanka",
				"phone": "603 417 895",
				"age": 42
			}
		];

		pojistenci.forEach(pojistenec => this.pojistenci.push(new Pojistenec(pojistenec.name, pojistenec.phone, pojistenec.age)))
	}

	doplnTabulku()
	{
		let radek;
		this.pojistenci.forEach(pojistenec => 
		{
			this.pojistenecDoTabulky(pojistenec);
		});

	
	}

	pojistenecDoTabulky(pojistenec)
	{
		let radek=document.createElement('tr');
		radek.innerHTML = pojistenec.tableTemplate;
		this.tabulka.appendChild(radek);
		this.radkyPojistencu.push(radek);
	}

	pridejPojistence(jmeno, prijmeni, tel, vek)
	{	
		let novyP = new Pojistenec(`${jmeno} ${prijmeni}`, tel, vek)
		this.pojistenci.push(novyP);
		this.pojistenecDoTabulky(novyP)

	}
}


let evidence = new Evidence();
evidence.nactiPojistence();
evidence.doplnTabulku();

function odeslatFormular(event){
	event.preventDefault(); 
	let jmeno = document.getElementById("firstname").value;
	let prijmeni = document.getElementById("lastname").value;
	let vek = document.getElementById("age").value;
	let telefon = document.getElementById("phone").value;
  
	// provedení dalších akcí s hodnotami formuláře
	console.log(evidence);
	evidence.pridejPojistence(jmeno, prijmeni, telefon, vek)
}




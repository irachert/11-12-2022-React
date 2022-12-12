import React, { useEffect, useState } from "react";
import Currency from './Currency';
import { Table } from 'react-bootstrap';
import Search from './Search';

function Currencies() {

	const [сurrencies, setCurrencies] = useState([]);
	const [filteredCountries, setFilteredCurrencies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	useEffect(() => {
		fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221208&json')
			.then(res => res.json())
			.then(data => setCurrencies(data));
	}, [])

	function searchByCurrencyName(value) {
		setSearchValue(value);
		const result = сurrencies.filter(currency => currency.txt.toLowerCase().includes(value));
		setFilteredCurrencies(result);
	}

	return (
		<>
			<Search searchByCurrencyName={searchByCurrencyName} />
			<Table striped bordered hover>
				<thead>
					<tr><th>Name</th><th>Rate</th><th>Date</th></tr>
				</thead>
				<tbody>
					{(searchValue.length ? filteredCountries : сurrencies).map(currency =>
						<Currency
							key={currency.cc}
							txt={currency.txt}
							rate={currency.rate}
							exchangedate={currency.exchangedate}
						/>)
					}
				</tbody>
			</Table>
		</>
	)
}

export default Currencies;
import React from "react";
import { FormControl } from "react-bootstrap";

const Search = ({ searchByCurrencyName }) =>
	<FormControl className={'mb-3'}
		placeholder="Search"
		aria-label="Search"
		onKeyUp={e => searchByCurrencyName(e.currentTarget.value.trim().toLowerCase())}
	/>

export default Search;
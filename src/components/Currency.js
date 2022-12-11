import React from "react";

function Currency({ txt, rate, exchangedate }) {
	return (
		<tr>
			<td>{txt}</td>
			<td>{rate.toFixed(2)}</td>
			<td>{exchangedate}</td>
		</tr>)
}

export default Currency;
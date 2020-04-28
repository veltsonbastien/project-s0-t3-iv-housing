// index.js
import React from 'react'
//import '../css/index.css'
import HouseTable from '../components/table.jsx'
import data from '../data/houses.json'

export default function Index() {
	return(
		<div className="page-container">
			<h1>House List</h1>
			<HouseTable data = {data}/>
		</div>
		)
}

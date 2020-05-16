// forms.jsx

import utilStyles from '../../styles/utils.module.css'
import FilterForms from './filterForms.jsx'
import SortForms from './sortForms.jsx'

export default function Forms(props) {
	return (
		<div className={utilStyles.forms}>
			<h2>Filter Listings</h2>
			<div><FilterForms filter={props.filter}/></div>
			<div><SortForms sortByPrice={props.sortByPrice}/></div>
			<p>Not finding the right place? Narrow down the filters to show preffered listings at the top!</p>
		</div>
	);
}

import axios from 'axios';
import {useEffect, useState} from 'react'; 
import {Link } from 'react-router-dom';
import './Films.scss';

const Films = ({films}) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	console.log(films); 

	const apiFilmRequest = (film) => {
		axios.get(film)
		.then(response => setData(data => [...data, response.data]))
		.catch(error => setError(error.message))
	}

	useEffect(() => {
		// loop over array and return an api request 
		for(let film of films) {
			apiFilmRequest(film)
		}
	}, [])

	return (
		<>
			<h1>Films</h1>
			<div className= 'films'>
				{data && data.map(film => 
				<Link to={`/films/${film.title}`}>
					{film.title}
				</Link>)
				}
				{error && <p className='error'>{error}</p>}
		</div>
		</>
		
	)
}

export default Films; 
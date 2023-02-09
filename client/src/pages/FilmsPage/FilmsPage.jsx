import axios from 'axios';
import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import background from '../../assets/background.jpeg';
import './FilmsPage.scss';

const FilmsPage = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState('')

	const apiFilmRequest = () => {
		const url = '/api/films';
		axios.get(url)
		.then(response => setData(response.data.results))
		.catch(error => setError(error.message))
	}

	useEffect(() => {
		apiFilmRequest();
	}, [])

	return (
	<div className='films-page'>
		<img src={background} alt='background'></img>
		<div className='films'>
			<h1>Films</h1>
			{data && data.map(film => 
			<ul>
				<li key={film.title}>
				<Link to={`/films/${film.title}`}>{film.title}</Link>
				</li>
			</ul>
			)}
			{error && <p className='error'>{error}</p>}
		</div>
	</div>
	)
}

export default FilmsPage; 
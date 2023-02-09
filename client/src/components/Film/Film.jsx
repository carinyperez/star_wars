import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import background from '../../assets/background.jpeg';
import './Film.scss';

const Film = () => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');
	const {id} = useParams();

	const characters = ["Luke Skywalker","C-3PO", "R2-D2", "Darth Vader", 
	"Leia Organa", "Owen Lars", "Beru Whitesun lars","R5-D4","Biggs Darklighter","Obi-Wan Kenobi"]

	const characterMap = new Map(); 
	for(let i = 0; i < characters.length; i++) {
		characterMap.set(i + 1, characters[i])
	}

	const apiFilmRequest = () => {
		const url = '/api/films'; 
		axios.get(url)
		.then(response => setData(response.data.results.find(film => film.title === id).characters))
		.catch(error => setError(error.message))
	}

	useEffect(() => {
		apiFilmRequest(); 
	},[])

	return (
	<div className='film'>
		<img src={background} alt='background'/>
		<div className='filmInfo'>
			<h1>{id} Character List</h1>
			{
				data && data.map(char =>  
					<Link to={`/characters/${characterMap.get(Number(char.replace(/[^0-9]/gi, '')))}`}>{characterMap.get(Number(char.replace(/[^0-9]/gi, '')))}</Link>
				)
			}
			{
				error && <p>{error}</p>
			}
		</div>
	</div>)
}

export default Film; 
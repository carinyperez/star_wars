import axios from 'axios';
import {useState, useEffect} from 'react'; 
import {Link } from 'react-router-dom';
import './Films.scss';

const Films = ({films}) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		Promise.all(films.map(async film => {
			try {
				const response = await axios.get(film);
				setData(data => [...data, response.data]);
			} catch (error) {
				setError(error.message);
			}
		}))
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
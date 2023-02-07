import background from '../../assets/background.jpeg';
import './HomePage.scss';
import { Link } from "react-router-dom";

const HomePage = (props) => {
	return(
		<div className='homepage'>
			<div className='header'>
				<h1>STAR WARS</h1>
				<p>AN INTERACTIVE GALACTIC EXPERIENCE</p>
				<div className='navigation'>
					<Link to='/characters'>Characters</Link>
					<Link to='/films'>Films</Link>
				</div>
			</div>
			<img src={background} alt='star-wars background'/>
		</div>
	)
}
export default HomePage; 

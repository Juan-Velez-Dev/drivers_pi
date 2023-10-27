import { NavLink } from 'react-router-dom';
import defimg from '../../assets/defimg.jpg';
import './card.css';

function Card (driver) {
  const { id, surname, image, teams } = driver.driver;

  return (
    <div className="card-container">
      <div className='card-img-container'>
        <NavLink to={`/detail/${id}`}>
          <img className='card-img' src={!image.length ? defimg : image} alt={surname} />
        </NavLink>
      </div>
      <h3 className='card-name'>{surname}</h3>
      <p className='card-teams'>{teams.slice(0, 2).join(' | ')}</p>
    </div>
  );
}

export default Card;

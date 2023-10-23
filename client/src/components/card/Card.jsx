import { NavLink } from 'react-router-dom';
import './card.css';

function Card ({ driver }) {
  const { id, name, image, teams } = driver;
  const team = teams.split(', ');

  return (
    <div className="card-container">
      <h1>{name.surname}</h1>
      <div className='card-img-container'>
        <NavLink to={`/detail/${id}`}>
          <img className='card-img' src={image.url} alt={name.surname} />
        </NavLink>
      </div>
      <p>{team.slice(0, 2).join(' & ')}</p>
    </div>
  );
}

export default Card;

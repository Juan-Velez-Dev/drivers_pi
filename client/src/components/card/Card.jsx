import { NavLink } from 'react-router-dom';
import './card.css';

function Card ({ driver }) {
  const { id, name, image, teams } = driver;

  return (
    <div className="card-container">
      <h1>{name.surname}</h1>
      <NavLink to={`/detail/${id}`}>
        <img className='card-img' src={image.url} alt={name.surname} />
      </NavLink>
      <p>{teams}</p>
    </div>
  );
}

export default Card;

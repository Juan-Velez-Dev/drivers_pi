import { NavLink } from 'react-router-dom';
import defimg from '../../assets/defimg.jpg';
import './card.css';

function Card ({ driver }) {
  const { id, name, image, teams } = driver;

  return (
    <div className="card-container">
      <div className='card-img-container'>
        <NavLink to={`/detail/${id}`}>
          <img className='card-img' src={image.url.length ? image.url : defimg} alt={name.surname} />
        </NavLink>
      </div>
      <h3 className='card-name'>{name.surname}</h3>
      <p className='card-teams'>{teams ? teams.split(',').slice(0, 2).join(' | ') : 'no teams'}</p>
    </div>
  );
}

export default Card;

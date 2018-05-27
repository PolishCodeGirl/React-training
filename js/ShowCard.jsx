import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  show: PropTypes.object
}

const defaultProps = {
  show: {}
}

const ShowCard = ({ show }) => (
  <div className='schow-card'>
    <img alt={`${show.title} Poster`} src={`/public/img/posters/${show.poster}`}/>
    <div>
      <h3>{show.title}</h3>
      <h4>({show.year})</h4>
      <p>{show.description}</p>
    </div>

  </div>
);

ShowCard.propTypes = propTypes
ShowCard.defaultProps = defaultProps

export default ShowCard;

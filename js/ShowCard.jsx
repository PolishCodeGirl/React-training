// @flow
import React from 'react';
// import { shape, string } from 'prop-types';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ShowCard = (props: {show: {title: string, poster: string, year: string, description: string, imdbID: string}}) => (
  <Wrapper className='schow-card' to={`/details/${props.show.imdbID}`}>
    <Image alt={`${props.show.title} Poster`} src={`/public/img/posters/${props.show.poster}`}/>
    <div>
      <h3>{props.show.title}</h3>
      <h4>({props.show.year})</h4>
      <p>{props.show.description}</p>
    </div>
  </Wrapper>
);

// Because I use FLOW, I don't need propTypes anymore
// ShowCard.propTypes = {
//   show: shape({
//     title: string.isRequired,
//     poster: string.isRequired,
//     year: string.isRequired,
//     description: string.isRequired,
//   })
// }

ShowCard.defaultProps = {
  show: {}
}

export default ShowCard;

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;

  color: black;
  text-decoration: none;
`

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`

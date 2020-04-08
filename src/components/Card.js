import React from 'react';
import '../stylesheets/Card.scss';
import '../images/woman.png';

console.log();

const Card = (props) => (
  <section className='js-card img-creation'>
    <div className='js-card-palette1 js-background img-creation__container'>
      <div className='img-creation__container--card'>
        <button className='js-reset img-creation__button'>
          <i className='far fa-trash-alt'></i>Reset
        </button>
        <article className=' img-creation__card'>
          <div className='js-border img-creation__card--container'>
            <h2 className='js-cardname js-pastename img-creation__card--name' value=''>
              {props.name || 'Nombre y Apellidos'}
            </h2>
            <h3 className='js-cardjob img-creation__card--profession' value=''>
              {props.job || 'FrontEnd Developer'}
            </h3>
          </div>
          <div className='profile__image js__profile-image'>
            <img src={props.img || '../images/woman.png'} alt='' className='profile__image' />
          </div>
          <ul className='img-creation__card--list'>
            <li className='js-card-phone img-creation__card--round'>
              <a className='js-cardphone js-pastename' href={'tel:' + props.phone}>
                <i className='fas fa-mobile-alt' title='Teléfono'></i>
              </a>
            </li>
            <li className='js-card-email img-creation__card--round'>
              <a className='js-cardemail js-pastename' href={'mailto:' + props.email}>
                <i className='far fa-envelope' title='Enviar email'></i>
              </a>
            </li>
            <li className='js-card-linkedin img-creation__card--round'>
              <a className='js-cardlinkedin js-pastename' href={props.linkedin} alt='Linkedin'>
                <i className='fab fa-linkedin-in' title='Ir al Linkedin'></i>
              </a>
            </li>
            <li className='js-card-github img-creation__card--round'>
              <a className='js-cardgithub js-pastename' href={props.github}>
                <i className='fab fa-github-alt' title='Ir al Github'></i>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default Card;

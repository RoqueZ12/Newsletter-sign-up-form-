import React from 'react';
import '../styles/Card.css';
import fondo from '../assets/illustration-sign-up-desktop.svg';
import check from '../assets/icon-list.svg';

const Card = ({ onSubscribeClick, onChange, isValidEmail, submitted }) => { // Agregar submitted como prop
  const handleClick = () => {
    onSubscribeClick();
  };

  const inputClassName = !isValidEmail && submitted ? 'input-invalid' : 'input';

  return (
    <div className="card-container">
      <section className="card-izq">
        <div className="izq-top">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        <div className="izq-mid">
          <ul>
            <li>
              <img src={check} alt="Check Icon" /> Product discovery and building what matters
            </li>
            <li>
              <img src={check} alt="Check Icon" /> Measuring to ensure updates are a success
            </li>
            <li>
              <img src={check} alt="Check Icon" /> And much more!
            </li>
          </ul>
        </div>
        <div className="izq-bottom">
          <div className='izq-bottom-message'>
          <span>Email address</span>
          {!isValidEmail && submitted && <p className={!isValidEmail && submitted ? 'text-invalid' : ''}>Valid email required.</p>}
          </div>  
          <form className="formulario">
            <input
              className={inputClassName}
              type="email"
              placeholder="email@company.com"
              onChange={onChange}
              required
            />
            <button className="button-form" onClick={handleClick}>
              Subscribe to monthly newsletter
            </button>
          </form>  
        </div>
      </section>
      <section className="card-der">
        <img src={fondo} alt="Background" />
      </section>
    </div>
  );
};
export { Card };

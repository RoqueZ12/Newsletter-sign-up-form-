import React, { useState, useCallback } from 'react';
import { Card } from './Componentes/Card';
import { Thanks } from './Componentes/Thanks';

function App() {
  //Manejamos los dos componentes: Card y Thanks
  const [showCard, setShowCard] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  //Manejamos la validacion del email como el submited
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  //Manejamos el texto del email
  const [text, setText] = useState('');

  //Eventos
  const handleSubscribeClick = useCallback(() => {
    setSubmitted(true);
    if (isValidEmail && email.trim() !== '' ) {
      setShowCard(false);
      setShowThanks(true);
      setText(email);
    } 
  }, [isValidEmail, email]);

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,10}$/;
    setIsValidEmail(emailRegex.test(value));
  }, []);

  const handleReturnClick = useCallback(() => {
    setShowCard(true);
    setShowThanks(false);
    setSubmitted(false);
    setEmail(''); // Restablecer el estado del email
  }, []);

  return (
    <div>
      {showCard && (
        <Card
          onSubscribeClick={handleSubscribeClick}
          onChange={handleChange}
          isValidEmail={isValidEmail}
          submitted={submitted}
        />
      )}
      {showThanks && <Thanks 
        handleReturn={handleReturnClick}
        text={text}
      />}
    </div>
  );
}

export default App;

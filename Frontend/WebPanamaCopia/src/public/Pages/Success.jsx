import React from 'react';

const Success = () => {
  const handleBack = () => {
    window.location.href = '/'; 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>¡Gracias por su pago!</h1>
      <button onClick={handleBack}>Regresar</button>
    </div>
  );
};

export default Success;

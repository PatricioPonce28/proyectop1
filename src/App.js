import React from 'react';
import InfoPersonal from './InfoPersonal';
import Estudios from './Estudios';
import Herramientas from './Herramientas';
import Deportes from './Deportes';

const App = () => {
  return (
      <div style={{ 
          background: 'linear-gradient(135deg, #ff9966, #ff5e62)',
          padding: '20px', 
          minHeight: '100vh' 
      }}>
          <InfoPersonal />
          <Estudios />
          <Herramientas />
          <Deportes />
      </div>
  );
};

export default App;

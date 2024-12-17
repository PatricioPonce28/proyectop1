import React from 'react';
import InfoPersonal from './InfoPersonal';
import Estudios from './Components/Estudios';
import Herramientas from './Components/Herramientas';
import Deportes from './Components/Deportes';
import Musica from './Components/Musica';
import Hobbies from './Components/Hobbies';

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
          <Musica />
          <Hobbies />
      </div>
  );
};

export default App;

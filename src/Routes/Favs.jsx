import React from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';

const Favs = () => {
  const { theme } = useContext(ContextGlobal);

  // Obtener los datos de favoritos desde localStorage
  const favList = JSON.parse(localStorage.getItem('favList')) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
        {favList.map((card) => (
          <Card key={card.id} name={card.name} username={card.username} id={card.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    const favList = JSON.parse(localStorage.getItem('favList')) || [];

    const isAlreadyFav = favList.some((card) => card.id === id);

    if (!isAlreadyFav) {
      // Si la tarjeta no está en la lista, agregarla
      const newFavList = [...favList, { name, username, id }];
      localStorage.setItem('favList', JSON.stringify(newFavList));
      alert('Card added to favorites!');
    } else {
      // Si la tarjeta ya está en la lista, mostrar un mensaje o realizar otra acción
      alert('Card is already in favorites!');
    }
  };

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>Name: {name}</p>
        <p>Username: {username}</p>
        <p>ID: {id}</p>


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {<Link to={`/detalle/${id}`}>Ver detalle</Link>}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`URL_DE_LA_API/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUser();
  }, [userId]); // Asegúrate de pasar userId como dependencia para que se vuelva a hacer la llamada cuando cambie

  return (
    <>
      <h1>Detail Dentist id {userId}</h1>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          {/*Se puede Agregar más información según la estructura de tu objeto de usuario */}
        </div>
      )}
    </>
  );
};

export default Detail;
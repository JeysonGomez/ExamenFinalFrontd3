import React, { useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  return (
    <nav className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        {/* Agregar más enlaces según tus rutas */}
      </ul>
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  );
};

export default Navbar;
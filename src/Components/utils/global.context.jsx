import { createContext } from "react";

export const initialState = {theme: "", data: []}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('URL_DE_LA_API');
        const data = await response.json();
        dispatch({ type: 'SET_DATA', payload: data });
      } catch (error) {
        console.error('Error fetching data from API', error);
      }
    };

    fetchData();
  }, []); 

  const contextValue = useMemo(() => ({ ...state, toggleTheme }), [state.theme, state.data]);

    return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};

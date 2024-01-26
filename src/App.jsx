
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";



function App() {
  return (
      <div className="App">
          <Detail/>
          <Contact/>
          <form/>
          <card/>
          <Favs/> 
          <Navbar/>
          <Footer/>
      </div>
  );
}

export default App;

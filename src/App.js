import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Productos from './components/Productos';
//import ItemListContainer from './components/ItemListContainer';
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    //<BrowserRouter>
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Productos />
      </main>
      <footer>
        <hr></hr>
        <ItemDetailContainer />
        <Footer anio="2022" />
      </footer>
    </div >
    //</BrowserRouter>
  );
}

export default App;

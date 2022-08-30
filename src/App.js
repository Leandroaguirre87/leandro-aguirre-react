import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Productos from './components/Productos';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Productos />
      </main>
      <footer>
        <hr></hr>
        <ItemListContainer greeting="Argentina" />
        <Footer anio="2022" />
      </footer>
    </div >
  );
}

export default App;

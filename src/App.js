import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Productos from './components/Productos';
import Carrito from './components/CartWidget';
import itemListContainer from './components/itemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <itemListContainer />
        <Carrito />

      </header>
      <main>
        <Productos />
      </main>
      <footer>
        <hr></hr>
        <Footer />
      </footer>
    </div >
  );
}

export default App;

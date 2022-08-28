import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';

function App() {
  return (
    <div>
      <header>
        <Header />
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

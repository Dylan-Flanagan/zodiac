import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import backgroundImg from './shoes.png';

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }} className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

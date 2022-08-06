
import './App.css';
import logoMarvel from './images/logo-marvel.png';

function App() {
  return (
    <div className='App'>

      <section className='app__container-logo'>
        <img src={logoMarvel} alt='Logo marvel' className='app__logo' />
      </section>
      
      <section className='app__container-main'>
        <h1 className='main__title'>Listado de COMICS</h1>
      </section>

    </div>
  );
}

export default App;

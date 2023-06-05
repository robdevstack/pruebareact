import MiApi from './components/MiApi';

function App() {
  return (
    <div className="App">
      <nav className="navbar bg-warning">
        <div className="container-fluid">
          <a className='navbar-brand'>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png?20220319060844" alt="Logo" width="30" height="24" />
          </a>
        </div>
      </nav>
      <section>
        <MiApi />
      </section>
      <footer className="bg-warning text-center text-white">
  <div className="container p-4 pb-0">
    <section className="mb-4">

      <a className="btn btn-outline-light btn-floating m-1"  role="button"
        ><i className="bi bi-twitter"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" role="button"
        ><i class="bi bi-instagram"></i></a>

      <a className="btn btn-outline-light btn-floating m-1" role="button"
        ><i class="bi bi-github"></i></a>
    </section>
  </div>

  <div className="text-center p-3">
    © 2023 Copyright:
    <a className="text-white" href="https://rickandmortyapi.com/">Rick and Morty API</a>
  </div>
</footer>
      
    </div>
  );
}

export default App;

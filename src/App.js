import './App.css';
import SearchMovie from './components/SearchMovie/SerachMovie';
import Icon from './components/Icon/Icon';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Movie Search API</h1>
      </header>
      <main>
        <div className="main-content">
          <SearchMovie></SearchMovie>
        </div>
      </main>
      <footer className="text-center footer">
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <Icon link="https://github.com/georgematos" class="fab fa-github" />
            <Icon link="https://www.linkedin.com/in/george-matos-373a8919a/" class="fab fa-linkedin" />
            <Icon link="https://www.instagram.com/georgematos.o/" class="fab fa-instagram" />
            <Icon link="https://www.facebook.com/faceDoGeorge/" class="fab fa-facebook" />
            <Icon link="https://twitter.com/georgemattos" class="fab fa-twitter" />
            <Icon link="#!" class="fab fa-google" />
          </section>
        </div>
        <div className="text-center p-3 down">
          <p>Movie Search API is a small application that was made for a job interview at Instituto Atlântico</p>
          © 2020 Copyright
        </div>
      </footer>
    </div>
  );
}

export default App;

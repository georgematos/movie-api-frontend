import './App.css';
import Icon from './components/Icon/Icon';
import Routes from './routes';
import MainProvider from './components/Context/MainContext'

function App() {
  return (
    <MainProvider>

      <div className="container-fluid">
        <header className="header">
          <h1>Movie Search API</h1>
        </header>
        <main className="content">
          <Routes />
        </main>
        <footer className="footer sticky-footer">
          <div className="p-4 pb-0">
            <section className="mb-4">
              <Icon link="https://github.com/georgematos" class="fab fa-github" />
              <Icon link="https://www.linkedin.com/in/george-matos-373a8919a/" class="fab fa-linkedin" />
              <Icon link="https://www.instagram.com/georgematos.o/" class="fab fa-instagram" />
              <Icon link="https://www.facebook.com/faceDoGeorge/" class="fab fa-facebook" />
              <Icon link="https://twitter.com/georgemattos" class="fab fa-twitter" />
              <Icon link="#!" class="fab fa-google" />
              <div>
                <p>Movie Search API is a small application that was made for a job interview at Instituto Atlântico</p>
                <p>© 2020 Copyright</p>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </MainProvider>
  );
}

export default App;

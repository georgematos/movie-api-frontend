import './App.css';
import Icon from './components/Icon/Icon';
import Routes from './routes';
import MainAppProvider from './components/Context/MainAppContext'

function App() {
  return (
    <MainAppProvider>
      <div className="container-fluid">
        <header className="header">
          <h1>Movie Search API</h1>
        </header>
        <main className="content">
          <Routes />
        </main>
        <footer className="footer sticky-footer">
          <Icon link="https://github.com/georgematos" class="fab fa-github" />
          <Icon link="https://www.linkedin.com/in/george-matos-373a8919a/" class="fab fa-linkedin" />

          <div>Movie Search API is a small application that was made for a job interview at Instituto Atlântico</div>
          <div>© 2020 Copyright</div>
        </footer>
      </div>
    </MainAppProvider>
  );
}

export default App;

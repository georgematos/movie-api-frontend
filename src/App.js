import './App.css';
import Icon from './components/Icon/Icon';
import Routes from './routes';
import MainAppProvider from './components/Context/MainAppContext'

function App() {
  return (
    <MainAppProvider>
      <div className="container-fluid">
        <header data-testid="id-title" className="header">
          <h1>Movie Search API</h1>
        </header>
        <main className="content">
          <Routes />
        </main>
        <footer data-testid="id-footer" className="footer sticky-footer">
          <Icon data-testid="id-github-link" link="https://github.com/georgematos" class="fab fa-github" />
          <Icon data-testid="id-linkedin-link" link="https://www.linkedin.com/in/george-matos-373a8919a/" class="fab fa-linkedin" />

          <div>Movie Search API is a small application that was made for a job interview at Instituto Atlântico</div>
          <div>© 2021 Copyright</div>
        </footer>
      </div>
    </MainAppProvider>
  );
}

export default App;

import './App.css';
import Routes from './routes';
import MainAppProvider from './components/Context/MainAppContext'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';

function App() {
  return (
    <MainAppProvider>
      <div className="container-fluid">
        <Header title="Movie Search API"/>
        <main className="content">
          <Routes />
        </main>
        <Footer />
      </div>
    </MainAppProvider>
  );
}

export default App;

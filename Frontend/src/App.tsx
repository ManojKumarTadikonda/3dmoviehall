import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import PopularMovies from './components/PopularMovies';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';
import MoviesPage from './pages/MoviesPage';
import BookingPage from './pages/BookingPage';
import ModelViewer from './components/ModelViewer';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Carousel />
                <PopularMovies />
                <NewReleases />
              </main>
            }
          />
          <Route path="/screen1" element={<ModelViewer/>}/>
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
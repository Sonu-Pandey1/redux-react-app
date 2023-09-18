import './App.scss';
import Home from "./components/Home/Home"
import PageNotFound from "./components/PageNotFound/PageNotFound"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
    <Header/>
    <div className='Container'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>
    </div>
    <Footer/>
      
    </div>
  );
}

export default App;

import './App.css';
// import User from './User';
import HomeContainer from './containers/HomeContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cartpage from './components/Cartpage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cartpage" element={<Cartpage />}></Route>
          <Route path="/" element={<HomeContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

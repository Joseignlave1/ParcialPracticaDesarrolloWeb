import Home from './Components/Home';
import Details from './Components/Details';
import AddGame from './Components/AddGame';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/games/:id' element = {<Details />}/>
        <Route path='/games/addGame' element = {<AddGame />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

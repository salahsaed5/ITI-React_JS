import './App.css';
import Movie from './Component/Movie'
import Movies from './Component/Movies'
import Welcome from './Component/Welcome';
function App() {
  return (
    <div className="App">
      <Welcome></Welcome>
      
     <Movies></Movies>
     <Movie></Movie>
     <br></br>

     
    </div>
  );
}

export default App;

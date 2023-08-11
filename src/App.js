import logo from './logo.svg';
import './App.css';
import Recipe from './recipe';

function App() {
  return (
    <div className="App">
      <div className='git'>
        <a href="https://github.com/navdeeepkaur/project6-recipe-search" target="_blank"><i className='fa-brands fa-github'></i></a>
      </div>
      <Recipe/>
    </div>
  );
}

export default App;
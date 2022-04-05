import './App.css';
import Card from './components/Card';
import Post from './components/Post';

function App() {
  return (
    <div className='App'>
      <h1>App</h1>
      <div className='grid'>
        <Card />
        <Post />
      </div>
    </div>
  );
}

export default App;

import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import IconCardSection from './components/IconCardSection/IconCardSection';
import ImageCardSection from './components/ImageCardSection/ImageCardSection';
// import Card from './components/Card';
// import Post from './components/Post';

function App() {
  return (
    <div className='App'>
      <Header />
      <Route path={'/'} exact>
        <IconCardSection />
        <ImageCardSection items={3} />
      </Route>
      <Route path={'/image-page'}>
        <ImageCardSection />
      </Route>
    </div>
  );
}

export default App;


import TinderCard from 'react-tinder-card';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
    {/* header */}

    <Header/>
    {/* TinderCards */}
    <TinderCards/>
    {/* buttons */}
    <SwipeButtons/>
    </div>
  );
}

export default App;

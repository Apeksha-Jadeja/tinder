
import TinderCard from 'react-tinder-card';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

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

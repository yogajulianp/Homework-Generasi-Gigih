import logo from './logo.svg';
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import Hero from './components/Hero';


function App() {
  return (
    <div className="App">
      
      { /*<img src={logo} className="App-logo" alt="logo" /> */}
      <NavigationMenu/>
      <Hero/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import PersistentDrawer from "./components/PersistentDrawer";
import Cards from "./components/Cards";
function App() {
  return (
    <div className="App">
      { <PersistentDrawer /> }
      
        {<Cards/>}
      
    </div>
  );
}

export default App;

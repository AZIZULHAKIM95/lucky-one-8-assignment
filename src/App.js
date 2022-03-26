import './App.css';
import Header from './component/Header/Header';
import Qstn from './component/Qstn/Qstn';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Qstn></Qstn>
    </div>
  );
}

export default App;

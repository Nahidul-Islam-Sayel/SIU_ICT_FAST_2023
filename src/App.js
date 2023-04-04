import './App.css';
import Card from './Component/Card/Card';
import Contract from './Component/Contract/Contract';
import Event from './Component/Event/Event';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Organized from './Component/Organized/Organized';

import Exicutibe from './Exicutibe/Exicutibe';
function App() {
  return (
    <div>
      <Home/>
      <Event/>
      <Card/>
      <Exicutibe/>
    <Contract/>
   <Organized/>
      <Footer/>
    </div>
  );
}

export default App;

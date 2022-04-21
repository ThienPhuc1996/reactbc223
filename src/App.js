import logo from './logo.svg';
import './App.css';
import CardRCC from './component/CardRCC';
import CardRFC from './component/CardRFC';
import BTLayout from './component/BTLayout';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEven/HandleEvent';

function App() {
  return (
    <div className="App">
     <DataBinding/>
     <HandleEvent/>
      
    </div>
  );
}

export default App;

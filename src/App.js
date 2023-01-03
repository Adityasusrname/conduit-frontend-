import { useEffect } from 'react';
import './App.css';
import Page from './components/Page'
import { store } from './store/GlobalState';



function App(props) {

var pageOption = props.pageOption
 
  return (
   
    <div className="App">
     <Page pageOption={pageOption}/>
    
    </div>

  );

}

export default App;

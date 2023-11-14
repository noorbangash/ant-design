import logo from './logo.svg';
import './App.css';
import AntBtn from './Components/AntButtons/AntBtn';
import Antinput from './Components/AntInput/Antinput';
import AntSelect from './Components/AntSelect/AntSelect';
import MyForm from './Components/AntForm/MyForm';
import AntTable from './Components/AntTable/AntTable';
import Bird from './Components/Bird.json';
import Lottie from 'lottie-react';
import Pak from './Pak.json'
import "antd/dist/reset.css"
import AntSpain from './Components/AntSpin/AntSpain';




function App() {
  return (
    <div className="App">
    <header className='App-header'>
         <h1>Welcome</h1>
        {/* <div style={{width:300, }}>
         <Lottie animationData={Bird}/>
         </div> */}

         {/* <div style={{width:'100%'}}>
          <Lottie animationData={Pak}/>
         </div> */}
        
          {/* <AntBtn/>
         <br></br> */}
         {/* <Antinput/>
         <br></br>
         <AntSelect/> */}
         {/* <br></br> */}
         <MyForm/>
         {/* <AntTable/> */}
         <AntSpain/>

         </header>
    </div>
  );
}

export default App;

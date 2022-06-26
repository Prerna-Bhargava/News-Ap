import { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
const [country, setCountry] = useState('in')
const [searchKey,setSearchKey] = useState('')
const [Mode,enableMode] = useState('light')

const toggleMode = ()=>{
  // To toggle between Dark and Light Mode
  if(Mode === 'light')
  {
    enableMode('dark')
    document.body.style.backgroundColor="black"
  }
  else{
    enableMode('light')
    document.body.style.backgroundColor="white"
  }
}
  return (
    <>
      <Router >
        <Navbar setCountry={setCountry} setSearchKey={setSearchKey} toggleMode={toggleMode} mode={Mode}/>
       
        <Routes >

          <Route path="/" element={<News key="general" category='general' country={country} searchKey={searchKey} mode={Mode} />} />
          <Route path="/health" element={<News key="health" category='health' country={country} searchKey={searchKey} mode={Mode} />} />
          <Route path="/science" element={<News key="science" category='science' country={country} searchKey={searchKey} mode={Mode}/>} />
          <Route path="/sports" element={<News key="sports" category='sports'country={country} searchKey={searchKey} mode={Mode}/>} />
          <Route path="/entertainment" element={<News key="entertainment" category='entertainment' country={country} searchKey={searchKey} mode={Mode}/>} />
          <Route path="/technology" element={<News key="technology" category='technology' country={country}  searchKey={searchKey} mode={Mode} />} />
          <Route path="/business" element={<News key="business" category='business' country={country} searchKey={searchKey} mode={Mode}/>} />

        </Routes>

      </Router>


    </>
  );
}

export default App;

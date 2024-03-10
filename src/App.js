// import logo from '/logosvg';
import './App.css';
import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
  const pageSize=9
  
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <News setProgress={setProgress} pagesize={15} country='in' category='general'/> */}
        <Routes>
        <Route exact path ="/" element ={<News setProgress={setProgress} key="general"pagesize={9} country='in' category='general'/>}/>
        <Route exact path ="/business" element ={<News setProgress={setProgress} key="business"pagesize={9} country='in' category='business'/>}/>
        <Route exact path ="/entertainment" element ={<News setProgress={setProgress} key="entertainment"pagesize={9} country='in' category='entertainment'/>}/>
        <Route exact path ="/general" element ={<News setProgress={setProgress} key="general"pagesize={9} country='in' category='general'/>}/>
        <Route exact path ="/health" element ={<News setProgress={setProgress} key="health"pagesize={9} country='in' category='health'/>}/>
        <Route exact path ="/science" element ={<News setProgress={setProgress} key="science"pagesize={9} country='in' category='science'/>}/>
        <Route exact path ="/sports" element ={<News setProgress={setProgress} key="sports"pagesize={9} country='in' category='sports'/>}/>
        <Route exact path ="/technology" element ={<News setProgress={setProgress} key="technology"pagesize={9} country='in' category='technology'/>}/>
        </Routes>
         </Router>
      </div>
    )
  }

  export default App;


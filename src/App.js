import React from 'react';
import './App.css';
import adobe from './img/Adobe.6fbebcd0.svg'
import amazon from './img/Amazon.d21f098e.svg'
import google from './img/Google.11e04b4f.svg'
import microsoft from './img/Microsoft.db8b21a8.svg'
import paytm from './img/Paytm.b67bc6ae.svg'
import samsung from './img/samsung.0857177b.png'
import bluebgtl from './img/blue-bg-right.c10aafd3.svg'
import cbgbr from './img/cbg-br.8ce7de0d.svg'
import rbgtl from './img/red-bg.566c4dbf.svg'
import brownbl from './img/brown-bl.d2752dbb.svg'
import lbgtl from './img/lbg-tl.bf04763f.svg'
import cp from './img/circlepink.c4205f82.svg'
import Owl from './owl'


function App() {
  const bracketl="{"
  const bracketr="}"
  const pics =[{
    v:adobe,
  n:100},{
    v:amazon,
  n:200},{
    v:google,
  n:300},{
    v:microsoft,
  n:400},{
    v:samsung,
  n:500},{
    v:paytm,
  n:600},]
  const[open,setOpen]=React.useState(false)
  const[hover,setHover]=React.useState(true)
  const[hover2,setHover2]=React.useState(false)
  const[open2,setOpen2]=React.useState(false)

  
  return (
    <div className="App">
      <div className="App__nav-container">
        <div className="App__nav">
          <span className="App__nav-logo">
            <div className="logo-container" onMouseEnter={()=>(setHover(prevMode=>!prevMode))} onMouseLeave={()=>(setHover(prevMode=>!prevMode))}>
              <div className="logo-text">
                <div className="text-1">Placement</div>
                <div className="text-2">Saga</div>
              </div>
              <div className="logo-brackets">
                {bracketl}
                <div className="logo-bar">
                  <div className={hover?"bar b1":" bar b1 hoverbar"}>
                  </div>
                  <div className={hover?"bar b2":" bar b2 hoverbar"}>
                  </div>
                  <div className={hover?"bar b3":" bar b3 hoverbar"}>
                  </div>
                  <div className={hover?"bar b4":" bar b4 hoverbar"}></div>
                </div>
                {bracketr}
              </div>
            </div>
          </span>
          <span className="App__nav-title">
            <span className=" App__nav-title-1">
              <a className="App__nav-title-l" href="google.com">Question Library</a>
              <div className="App__nav-title-theory">
                <div className="title" >
                 <span onMouseEnter={()=>(setHover2(prevMode=>!prevMode))}  onMouseLeave={()=>(setHover2(prevMode=>!prevMode))}>Theory Series</span><span onMouseEnter={()=>(setHover2(prevMode=>!prevMode))}  onMouseLeave={()=>(setHover2(prevMode=>!prevMode))} style={{fontSize:"0.8rem",fontWeight:"bold"}} >v</span>
                </div>
                <div className="popup-container" style={{display:hover2?"":"none"}}>
                  <div className="popup">
                    <div className="upper"></div>
                    <div className="list-links">
                    <div className="list-link">Data Structures</div>
                    <div className="list-link">Operating Systems</div>
                    <div className="list-link">Database Management Systems</div>
                  </div>
                  </div>
                </div>
              </div>
              <a className="App__nav-title-l" href="google.com">Mock Tests</a>
              <a className="App__nav-title-l" href="google.com">Subscribe</a>
            </span>
            <div>
              <button className="App__nav-login">Login</button>
            </div>
          </span>
        </div>
       <div>
         <div className="App__nav-h-content">
           <div className="hidden-btn">
             <div className="btn-icon" onClick={()=>{setOpen(prevMode=>!prevMode)
            console.log(open)}}>
               <span className={open ?" btn-icon-bar open1":"btn-icon-bar c1"}></span>
               <span className={open ?" btn-icon-bar open2":"btn-icon-bar c2"}></span>
               <span className={open ?" btn-icon-bar open3":"btn-icon-bar c3"}></span>
               <span className={open ?" btn-icon-bar open4":"btn-icon-bar c4"}></span>
             </div>
           </div>
           <div className="hidden-btn">
           <div className="logo-container" onMouseEnter={()=>(setHover(prevMode=>!prevMode))} onMouseLeave={()=>(setHover(prevMode=>!prevMode))}>
              <div className="logo-text">
                <div className="text-1">Placement</div>
                <div className="text-2">Saga</div>
              </div>
              <div className="logo-brackets">
                {bracketl}
                <div className="logo-bar">
                  <div className={hover?"bar b1":" bar b1 hoverbar"}>
                  </div>
                  <div className={hover?"bar b2":" bar b2 hoverbar"}>
                  </div>
                  <div className={hover?"bar b3":" bar b3 hoverbar"}>
                  </div>
                  <div className={hover?"bar b4":" bar b4 hoverbar"}></div>
                </div>
                {bracketr}
              </div>
            </div>
           </div>
           <div className="hidden-btn">
            <div>
              <button className="App__nav-login">Login</button>
            </div>
            </div>
            </div>
            <div className={open?"hidden-nav-container ":"hidden-nav-container"} style={{transform: open?"translateX(0px)":"translateX(-350px)"}}>
              <a class="hidden-nav-link" href="/question_library">Question Library</a>
              <div className={open2?"hidden-nav-link-theory hidden-nav-link-theory-open ":"hidden-nav-link-theory"} onClick={()=>(setOpen2(prevMode=>!prevMode))}>
                <div class="hidden-nav-link" >Theory Series   
                </div>
                <div class="hidden-nav-link-theory-links">
                  <a class="hidden-nav-link-theory-links-link" href="google.com">Data Structures</a>
                  <a class="hidden-nav-link-theory-links-link" href="google.com">Operating Systems</a>
                  <a class="hidden-nav-link-theory-links-link" href="/google.com">Database Management Systems</a></div></div>
                  <a class="hidden-nav-link" href="google.com">Mock Tests</a>
                  <a class="hidden-nav-link" href="google.com">Subscribe</a></div>
         
       </div>
      </div>
      <div className="App__first-page-container">
        <div className="App__first-page-main">
          <div className="main-left">
            <div className="left-content">
              <h2 className="left-text">
                <span className="r1">Master Your</span>
                <span className="r2">Destiny With</span>
                <span className="r3">PlacementSaga</span>
              </h2>
              <div className="left-btn-container">
                <a className="left-btn" href="google.com">
                  View Sample Question
                </a>
              </div>
            </div>
          </div>
          <div className="main-right">
            <Owl></Owl>
          
          </div>
          <div className="main-btn">
          </div>
          </div>
          <div className="main-companies-container">
            <div className="mini-container">
              {
               
                pics.map((p)=>(
<div className="company" style={{animationDelay:`${p.n}ms`}}>
                    <img src={p.v} alt="" class="company-img"/>
                    </div>
                ))
                  }
            </div>
        </div>
      </div>
      <div className="App__second-page-container">
        <div className="App__second-page-header">

          Every Topic You need for your
          <br></br>
          <strong>Coding Interview</strong>
        </div>
        <div class="second-page-topics">
          <div class="second-page-topic second-page-topic-1 second-page-topic-tl"  >
            <img src={bluebgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Array</div></div>
          <div class="second-page-topic second-page-topic-2 second-page-topic-br" >
              <img src={cbgbr} class="second-page-topic-bg" alt=""/>
              <div class="second-page-topic-text">Sorting</div></div>
          <div class="second-page-topic second-page-topic-3 second-page-topic-tl" >
            <img src={rbgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Strings</div></div>
          <div class="second-page-topic second-page-topic-4 second-page-topic-bl" >
            <img src={brownbl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Linked List</div></div>
          <div class="second-page-topic second-page-topic-5 second-page-topic-tl" >
            <img src={lbgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Stacks &amp; Queues</div></div>
          <div class="second-page-topic second-page-topic-6 second-page-topic-tr" >
            <img src={cp} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Trees</div></div>
          <div class="second-page-topic second-page-topic-7 second-page-topic-bl" >
            <img src={cp} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Dynamic<br></br>Programming</div></div>
          <div class="second-page-topic second-page-topic-8 second-page-topic-br" >
            <img src={lbgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Graphs </div></div>
          <div class="second-page-topic second-page-topic-9 second-page-topic-tr" >
            <img src={brownbl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Searching </div></div>
          <div class="second-page-topic second-page-topic-10 second-page-topic-br" >
            <img src={rbgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Recursion</div></div>
          <div class="second-page-topic second-page-topic-11 second-page-topic-tl" >
            <img src={cbgbr} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Binary Search<br></br>Tree</div></div>
          <div class="second-page-topic second-page-topic-12 second-page-topic-br" >
            <img src={bluebgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Mathematical</div></div>
          <div class="second-page-topic second-page-topic-13 second-page-topic-tl" >
            <img src={bluebgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Bit-Manipulation</div></div>
          <div class="second-page-topic second-page-topic-14 second-page-topic-br" >
            <img src={cbgbr} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Heaps</div></div>
          <div class="second-page-topic second-page-topic-15 second-page-topic-tl" >
            <img src={rbgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Hashing</div></div>
          <div class="second-page-topic second-page-topic-16 second-page-topic-bl" >
            <img src={brownbl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Backtracking</div></div>
          <div class="second-page-topic second-page-topic-17 second-page-topic-tl" >
            <img src={lbgtl} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Tries</div></div>
          <div class="second-page-topic second-page-topic-18 second-page-topic-tr"  >
            <img src={cp} class="second-page-topic-bg" alt=""/>
            <div class="second-page-topic-text">Famous<br></br>Algorithms</div></div>
          <div class="second-page-topics-svg-container">
       </div>
       </div>
      </div>
    </div>
  );
}

export default App;

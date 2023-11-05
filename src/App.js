import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home,
   Main, 
   Faq, 
   About, 
   Fiskies,
   NavBar,
   ContactUs,
  } from './components'
import Connect from './components/Connect';
import Chat from './components/Chat';
  
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Signup from './components/auth/Signup';
 
function App() {
  return (
    <div className="App" style={{'height': '100vh'}}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/'
          element={<Signup/>}

          />
          <Route path='/home'
          element={<Home/>}
          />
          <Route path='/main'
          element={<Main/>}
          />
          <Route path='/faq'
          element={<Faq/>}
          />
          <Route path='/about'
          element={<About/>}
          />
          <Route path='/fiskies'
          element={<Fiskies/>}
          />
          <Route path='/contactUs'
          element={<ContactUs/>}
          />
          <Route path='/connect'
          element={<Connect/>}
          />
          <Route path='/chat'
          element={<Chat/>}
          />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Redirect,
// } from 'react-router-dom';
// import Signup from './components/auth/Signup';
// import { Home,
//      Main, 
//      Faq, 
//      About, 
//      Fiskies,
//      NavBar,
//      ContactUs,
//     } from './components'
//   import Connect from './components/Connect';
//   import Chat from './components/Chat';
    

// function App() {
//   return (
//     <div className="App" style={{ height: '100vh' }}>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={<Signup />}
//           />
//           <Route
//             path="/home"
//             element={
//               <>
//                 <NavBar /> {/* Display the navigation bar for non-signup pages */}
//                 <Home />
//               </>
//             }
//           />
//           <Route path="/main" element={<Main />} />
//           <Route path="/faq" element={<Faq />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/fiskies" element={<Fiskies />} />
//           <Route path="/contactUs" element={<ContactUs />} />
//           <Route path="/connect" element={<Connect />} />
//           <Route path="/chat" element={<Chat />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


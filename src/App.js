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
  
import React from 'react';
import RegisterAndLogin from './PasswordLoginWithFirebase/RegisterAndLogin.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import SignInWithGoogle from './components/SignInWithGoogle';

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.currentUser ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
}
 
function App() {
  return (
    <div className="App" style={{'height': '100vh'}}>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/'
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
          <Route path='/logIn'
          element={<RegisterAndLogin/>}
          />
          <Route path='/forgotPassword'
          element={<ForgotPassword/>}
          />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

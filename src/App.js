import './App.css';
import SignIn from './pages/SignIn/SignIn';
import {Route, Routes} from 'react-router-dom'
import SignUp from './pages/SignUp/SignUp';
import { AppProvider } from './contexts/AppContext';
import AuthStatus from './pages/AuthStatus/AuthStatus';
import Home from './pages/Home';
import Authorization from './pages/Authorization/Authorization';


function App() {
  return (
    <div className="App">
      <AppProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/sign-in/:id' element={<AuthStatus/>}/>
        <Route path='/sign-up/authorize' element={<Authorization/>}/>
      </Routes>
      </AppProvider>
      
    </div>
  );
}

export default App;

import './App.css';
import {Route,BrowserRouter as Router, Routes} from 'react-router-dom';
import LandingPage from './pages/Landing';
import AuthenticationPage from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetPage from './pages/VideoMeet';
import HomeComponent from './pages/Home';
import HistoryPage from './pages/History';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/auth' element={<AuthenticationPage/>}/>
          <Route path='/home' element={<HomeComponent/>}/>
          <Route path='/history' element={<HistoryPage/>}/>
          <Route path='/:url' element={<VideoMeetPage/>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

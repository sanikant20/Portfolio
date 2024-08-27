import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './Screens/PageNotFoundScreen';
import Home from './Screens/HomeScreen';
import ProjectScreen from './Screens/ProjectScreen';
import AgromartProject from './Screens/AgromartDetailScreen';
import FoodOrderingSystem from './Screens/FoodOrderingSystemScreen';
import ProfileManagementSystem from './Screens/ProfileManagementSystemScreen';
import About from './Screens/AboutScreen';
import Contact from './Screens/ContactScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={< PageNotFound />} />
        <Route path='/' element={< Home />} />
        <Route path='/projects' element={< ProjectScreen />} />
        <Route path='/agromart-project-details' element={< AgromartProject />} />
        <Route path='/food-ordering-project-details' element={< FoodOrderingSystem />} />
        <Route path='/profile-management-project-details' element={< ProfileManagementSystem />} />
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

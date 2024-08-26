import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import PageNotFound from './Screens/PageNotFoundScreen';
import Home from './Screens/HomeScreen';
import Project from './Screens/ProjectsScreen/ProjectScreen';
import AgromartProjectDetail from './Screens/ProjectsScreen/AgromartDetailScreen';
import FoodOrderingSystem from './Screens/ProjectsScreen/FoodOrderingSystemScreen';
import ProfileManagementSystem from './Screens/ProjectsScreen/ProfileManagementSystemScreen';
import About from './Screens/AboutScreen';
import Contact from './Screens/ContactScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={< PageNotFound />} />
        <Route path='/' element={< Home />} />
        <Route path='/project' element={< Project />} />
        <Route path='/agromart-project-details' element={< AgromartProjectDetail />} />
        <Route path='/food-ordering-project-details' element={< FoodOrderingSystem />} />
        <Route path='/profile-management-project-details' element={< ProfileManagementSystem />} />
        <Route path='/about' element={< About />} />
        <Route path='/contact' element={< Contact />} />

      </Routes>
    </Router>
  );
}

export default App;

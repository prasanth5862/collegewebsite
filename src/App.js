import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import Leadership from './components/leadership';
import Admissions from './components/Admissions';
import Placements from './components/Placements';
import CampusLife from './components/Campus_life';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <AboutUs/>
      <Admissions/>
      <Leadership/>
      <Placements/>
      <CampusLife/>
    </div>
  );
}
export default App;
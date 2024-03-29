import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Predict from './Components/Predict';
import LivePredict from './Components/LivePredict';
import Navbar from './Components/Navbar';
import RcbDetails from './Components/Details/RcbDetails';
import DcDetails from './Components/Details/DcDetails';
import KkrDetails from './Components/Details/KkrDetails';
import CskDetails from './Components/Details/CskDetails';
import RrDetails from './Components/Details/RrDetails';
import LsgDetails from './Components/Details/LsgDetails';
import GtDetails from './Components/Details/GtDetails';
import MiDetails from './Components/Details/MiDetails';
import PbksDetails from './Components/Details/PbksDetails';
import SrhDetails from './Components/Details/SrhDetails';
import Home from './Components/Home';
import Team from './Components/Team';
import Stats from './Components/Stats';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        {/* <Predict /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/predict' element={<Predict />} />
          <Route path='/livepredict' element={<LivePredict />} />
          <Route path='/team' element={<Team />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/rcb' element={<RcbDetails />} />
          <Route path='/dc' element={<DcDetails />} />
          <Route path='/kkr' element={<KkrDetails />} />
          <Route path='/csk' element={<CskDetails />} />
          <Route path='/rr' element={<RrDetails />} />
          <Route path='/lsg' element={<LsgDetails />} />
          <Route path='/pbks' element={<PbksDetails />} />
          <Route path='/gt' element={<GtDetails />} />
          <Route path='/mi' element={<MiDetails />} />
          <Route path='/srh' element={<SrhDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

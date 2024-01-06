import './App.css';
import "./assets/css/style/style.css";
import "./assets/css/cutsom/custom.css";
import "./assets/css/default/default.css";
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import Admin from './Admin';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <>
     
      <div className='mainWebPages'>
        <Routes>
          <Route path="/*" element={<Admin />} />
        </Routes>
      </div>

    </>


  );
}

export default App;

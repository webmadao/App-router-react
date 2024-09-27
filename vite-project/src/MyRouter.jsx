import {Routes, Route} from 'react-router-dom'
import Html from './pages/Html';
import Css from './pages/Css';
import Js from './pages/Js';
import NavBar from './components/NavBar'
import App from './App'


const MyRouter = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/js" element={<Js />} />
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </div>
  )
}
export default MyRouter
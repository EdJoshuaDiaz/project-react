import './App.css';
import Home from './Home';
import About from './About';
import Signup from './Signup';
import Switch from './Switch';
import { Routes, Route, Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import Coupon from './Coupon';
import Checker from './Checker';
import RenderProps from './RenderProps';

const data = [
  {
      id: "1",
      title: "Ice Cream",
      description: "A delicious chocolate ice cream",
      price: 50,
  },
  {
      id: "2",
      title: "Cake",
      description: "A tasteful dark chocolate cake",
      price: 85,
  },
  {
      id: "3",
      title: "Ice Candy",
      description: "A frozen vanilla flavor of ice candy",
      price: 21,
  },
  {
      id: "4",
      title: "Crema",
      description: "This is a delicious crema",
      price: 36,
  },
  {
    id: "5",
    title: "Halo-Halo",
    description: "Famouse dessert from Philippines",
    price: 25,
  },
  {
    id: "6",
    title: "Ice Pop",
    description: "An old delicious dessert",
    price: 16,
  }

];

function App() {
  const {theme} = useTheme();
  return (
    <div className="App" style={{backgroundColor: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white"}}>
      <nav className='nav'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about" className='nav-item'>About</Link>
        <Link to="/signup" className='nav-item'>Signup</Link>
        <Link to="/coupon" className='nav-item'>Coupon</Link>
        <Link to="/checker" className='nav-item'>Checker</Link>
        <Link to="/renderprops" className='nav-item'>Render Props</Link>
      </nav>
      <Switch/>

      <Routes>
        <Route path='/' element={<Home title="This is H1 of Home page"/>} />
        <Route path='/about' element={<About title="This is title of About" desserts={data}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/coupon' element={<Coupon/>} />
        <Route path='/checker' element={<Checker/>} />
        <Route path='/renderprops' element={<RenderProps/>} />
      </Routes>
    </div>
  );
}

export default App;

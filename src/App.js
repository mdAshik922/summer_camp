
import './App.css';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import Register from './Components/Form/Register';
import Login from './Components/Form/Login';
import TermPrivacy from './Components/Terms&Privacy/TermPrivacy';
import Header from './Components/Header/Header';
import Contact from './Components/Page/Contact';
import NotFount from './Components/Page/NotFount';
import Schedule from './Components/Page/Schedule';
import Team from './Components/Page/Team';
import About from './Components/Page/About';
import Gallery from './Components/Page/Gallery';
import Footer from './Components/Page/Footer';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Manage from './Components/Manage/Manage';
import Detail from './Components/Page/Detail';
import Order from './Components/Page/Order/Order';
import MakeAdmin from './Components/Page/MakeAdmin/MakeAdmin';
import AdminRoute from './Components/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
    <BrowserRouter>
      <Header></Header>
      <Routes>
<Route exact path="/" element={<Home></Home>} />

<Route  path="/home" element={<Home></Home>}/>

<Route  path="/about" element={<PrivetRoute><About></About></PrivetRoute>}/>

<Route  path="/team" element={<PrivetRoute><Team></Team></PrivetRoute>}/>

<Route  path="/schedule" element={<Schedule></Schedule>} />

<Route  path="/gallery" element={<Gallery></Gallery>} />

<Route  path="/contact" element={<PrivetRoute><Contact></Contact></PrivetRoute>}/>

<Route  path="/manage" element={<PrivetRoute><Manage></Manage></PrivetRoute>}/>

<Route  path="/order" element={<PrivetRoute><Order></Order></PrivetRoute>}/> 

<Route  path="/makeAdmin" element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}/> 

<Route  path="/privacy" element={<TermPrivacy></TermPrivacy>} />

<Route  path="/detail/:id" element={<PrivetRoute><Detail></Detail></PrivetRoute>} />

<Route  path="/login" element={<Login></Login>} />

<Route  path="/register" element={<Register></Register>}/>

<Route path="*" element={<NotFount></NotFount>}/>

      </Routes> 
   <Footer></Footer>
   </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;

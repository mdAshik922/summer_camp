
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import AuthProvider from './Components/Context/AuthProvider';
import Home from './Components/Home/Home';
import Register from './Components/Form/Register';
import Login from './Components/Form/Login';
import TermPrivacy from './Components/Terms&Privacy/TermPrivacy';
import Header from './Components/Header/Header';
import Contact from './Components/Page/Contact';
import Notfount from './Components/Page/Notfount';
import Schedule from './Components/Page/Schedule';
import Team from './Components/Page/Team';
import About from './Components/Page/About';
import Gallery from './Components/Page/Gallery';
import Footer from './Components/Page/Footer';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Manage from './Components/Manage/Manage';
import Detail from './Components/Page/Detail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
    <Router>
      <Header></Header>
      <Switch>
<Route exact path="/"><Home></Home></Route>

<Route  path="/home"><Home></Home></Route>

<PrivetRoute  path="/about"><About></About></PrivetRoute>

<PrivetRoute  path="/team"><Team></Team></PrivetRoute>

<Route  path="/schedule"><Schedule></Schedule></Route>

<Route  path="/gallery"><Gallery></Gallery></Route>

<PrivetRoute  path="/contact"><Contact></Contact></PrivetRoute>

<PrivetRoute  path="/manage"><Manage></Manage></PrivetRoute>

<Route  path="/privacy"><TermPrivacy></TermPrivacy></Route>

<PrivetRoute  path="/detail/:id"><Detail></Detail></PrivetRoute>

<Route  path="/login"><Login></Login></Route>

<Route  path="/register"><Register></Register></Route>

<Route path="*"><Notfount></Notfount></Route>

      </Switch> 
   <Footer></Footer>
   </Router>
    </AuthProvider>
    </div>
  );
}

export default App;

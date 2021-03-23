import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Page/Home/Home';
import Register from './Page/Register/Register';
import Login from './Page/Login/Login';
import Contact from './Page/Contact/Contact';
import Header from './Component/Header/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header/>
        {/**Sử dụng switch để điều hướng các page */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        {/**Route mặc định */}
        <Route exact path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

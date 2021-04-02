import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Page/Home/Home';
import Register from './Page/Register/Register';
import Login from './Page/Login/Login';
import Contact from './Page/Contact/Contact';
import Header from './Component/Header/Header';
import Loading from './Component/Loading/Loading';
import Details from './Page/Detail/Details';
import LifeCycle from './Page/LifeCycle/LifeCycle';
import UseStateHook from './Page/Hook/UseStateHook';
import BaiTapChonXe from './Page/Hook/BaiTapChonXe';
import HookUseCallBack from './Page/Hook/HookUseCallBack';
import UseMemo from './Page/Hook/UseMemo';
import UseEffect from './Page/Hook/UseEffect';
import ReduxHook from './Page/Hook/ReduxHook';
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Loading/>
        <Header/>
        {/**Sử dụng switch để điều hướng các page */}
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/details/:id" component={Details}/>
          <Route exact path="/lifecycle" component={LifeCycle}/>
          <Route exact path="/usestatehook" component={UseStateHook}/>
          <Route exact path="/baitapchonxe" component={BaiTapChonXe}/>
          <Route exact path="/usecallback" component={HookUseCallBack}/>
          <Route exact path="/usememo" component={UseMemo}/>
          <Route exact path="/useeffect" component={UseEffect}/>
          <Route exact path="/reduxhook" component={ReduxHook}/>
        </Switch>
        {/**Route mặc định */}
        <Route exact path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;

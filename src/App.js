
import jpgLOGO from './img/logo_unisales.png'

import './index.css'

function App() {
  return (
    <div className="container">
      <div className="container-login">
       <div className="login">
        <form className="login-form">

          <span className="login-form-title">Bem Vindo!!! </span>

          <span className="login-form-title">
            <img src={jpgLOGO} alt='iaqu'/>
          </span>

          <div className='wrap-inp'>
            <input className="aqui-input" 
            type="email"></input>
            <span className="focus-input" data-placeholder="Email"></span>
          </div>

          <div className='wrap-inp'>
            <input className="aqui-input" type="password"></input>
            <span className="focus-input" data-placeholder="Password"></span>
          </div>

          <div className="container-login-form-btn">
            <button className="login-btn">Login</button>
          </div>


        </form>
       </div>
     </div>
    </div>
  );
}

export default App;

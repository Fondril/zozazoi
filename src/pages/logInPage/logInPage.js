import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './logInPage.scss';

const LogInPage = () =>{

      const [logInPageState, setLogInPageState] = useState('logIn');
      const [userName, setUserName] = useState('')
      const [pass, setPass] = useState('')

      const navigate = useNavigate()

      const handleLogInClick = () =>{
            if (userName === 'zozazoi' && pass === 'badbitch')
            {
                  navigate("/main")
            }
            else {
                  setLogInPageState("fail")
            }
      }
      const handleLeaveClick = () =>{
            setLogInPageState("logIn")
      }
      const handleEnterKeyPress = (e) =>{
            if(e.key === 'Enter'){
                  handleLogInClick()
            }
      }

      if (logInPageState === 'logIn'){
            return(

                  <div className="background">

                        <div className="logIn">

                              <div className="logInForm">

                                    <div className="input">

                                          <div className="text">Username</div>
                                          <input type='text' onChange={(e => {setUserName(e.target.value)})} onKeyUp={handleEnterKeyPress} className="inputText" placeholder="queeeeen"></input>

                                    </div>

                                    <div className="input">
                                          <div className="text">Password</div>
                                          <input className='inputText' onChange={(e => {setPass(e.target.value)})} onKeyUp={handleEnterKeyPress} type='password' placeholder="*****"></input>
                                    </div>
                              </div>

                              <div className='logInButton' type='button' onClick={handleLogInClick} >Log in!</div>

                        </div>
                  </div>
            )
      }

      if(logInPageState){
            return(

                  <div className="background">
                        <div className="logIn">
                              <div className="text logInForm nopeForm">Ne. Nope. Ne ne. Nije. Aj izadji.</div>
                              <div className="logInButton" type="button" onClick={handleLeaveClick}>Izadji</div>
                        </div>
                  </div>

            )
      }

}

export default LogInPage;
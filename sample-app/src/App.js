import './App.css';

import React from 'react';
import Cookies from 'universal-cookie';
import { useState, useEffect } from 'react'

//import axios from 'axios'

const cookies = new Cookies();

const uid = 'f3962f6d-ffe3-440f-bb1c-eef002ab5e66';

const getUrl_uri = 'http://127.0.0.1:8088/6f7e6060-1e45-4fd1-9ff5-b5d6da9b8c64/singledomain/geturl/';

//var createReactClass = require('create-react-class');

function App() {

  const [userid, setUserId] = useState(cookies.get(uid));

  const [theurl, setURL] = useState([]);

  //const [error, setError] = useState(null);

  const fetchData = async ()=>{
    
    let res = await fetch(getUrl_uri);
    let data = await res.json();
    setURL(data);
    
    }


  useEffect(() => {
    fetchData()
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    cookies.set(uid, uid);
    setUserId(cookies.get(uid));
  }

  const handleLogoutClick = (e) => {
    e.preventDefault();
    cookies.set(uid, '');
    setUserId(cookies.get(uid));
  }

  let button_goes_here;
  let html_goes_here;
  if (userid === uid) {
    button_goes_here = <button onClick={handleLogoutClick}>Logout</button>;
    html_goes_here = <div dangerouslySetInnerHTML={{ __html: "<iframe width=800 height=400 src='https://securex.ai' />"}} />;
  } else {
    button_goes_here = <button onClick={handleLoginClick}>Login</button>;
    html_goes_here = <div></div>;
  }

  //if (error) return <p>An error occurred</p>

  // theurl.response['singledomain.geturl'].url

  return (
    <div className="App">
      <header className="App-header">
        <small><b>theurl:</b>&nbsp;
        {
            theurl.response && theurl.response['singledomain.geturl'].url
        }        
        </small>
        <br />
        {button_goes_here}
        <br />
        {html_goes_here}
        </header>
    </div>
  );
}

export default App;

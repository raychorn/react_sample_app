import './App.css';

import React from 'react';
import Cookies from 'universal-cookie';
import { useState } from 'react';

const cookies = new Cookies();

const uid = 'f3962f6d-ffe3-440f-bb1c-eef002ab5e66';

//var createReactClass = require('create-react-class');

function App() {

  const [userid, setUserId] = useState(cookies.get(uid));

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

  return (
    <div className="App">
      <header className="App-header">
        {button_goes_here}
        <br />
        {html_goes_here}
        </header>
    </div>
  );
}

export default App;

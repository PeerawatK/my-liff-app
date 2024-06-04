import React, { useEffect } from 'react';
import liff from '@line/liff';

const App = () => {
  useEffect(() => {
    const initializeLiff = async () => {
      try {
        await liff.init({ liffId: process.env.REACT_APP_LIFF_ID });
        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          const profile = await liff.getProfile();
          console.log(profile);
        }
      } catch (error) {
        console.error('LIFF Initialization failed', error);
      }
    };
    initializeLiff();
  },
  []);

  return (
    <div className="App">
      <h1>LIFF Login with React</h1>
      <p>Check the console for profile information after login.</p>
    </div>
  );
};

export default App;

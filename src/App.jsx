import React from 'react';

// App
//
import TimeCountDown from "./TimeCountDown";


function App() {
  return (
    <div className='app'>
      <div className='content'>
        <h1 children='anim-time-countdown' />
        <TimeCountDown
          defaultValueSeconds={50_000}
          classes={{
            wrapper: 'wrapper',
            numberClasses: {
              root: 'number-item',
              topSide: 'topSide',
              bottomSide: 'bottomSide',
            }
          }} />
      </div>
    </div>
  );
}
export default App;

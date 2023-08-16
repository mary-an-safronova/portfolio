import React, { useState } from 'react';
import appStyle from './app.module.css';
import { Header } from '..';

function App() {
  const [theme, setTheme] = useState<string>('');

  const themeLightClass = appStyle.theme_light;
  const themeDarkClass = appStyle.theme_dark;

  const parallelogramLeftColor = theme !== themeLightClass ? 'rgb(36, 36, 36)' : '#c5e7e9';
  const parallelogramRightColor = theme !== themeLightClass ? 'rgb(82, 82, 82)' : '#33b7b6';

  return (
    <div className={`${appStyle.app} ${theme !== themeLightClass ? themeDarkClass : themeLightClass}`}>
      <div className={appStyle.parallelogramLeft} style={{ backgroundColor: parallelogramLeftColor }}></div>
      <div className={appStyle.parallelogramRight} style={{ backgroundColor: parallelogramRightColor }}></div>
      <Header theme={theme} setTheme={setTheme} themeLightClass={themeLightClass} themeDarkClass={themeDarkClass} />
    </div>
  );
}

export default App;

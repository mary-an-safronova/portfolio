import { useState, useEffect } from 'react';
import appStyle from './app.module.css';
import { Header, About, Portfilio, Contacts } from '..';
import { useInView } from 'react-intersection-observer';

function App() {
  const [theme, setTheme] = useState<string>('');
  const [currentTab, setCurrentTab] = useState<string>('');

  // Классы тем
  const themeLightClass = appStyle.theme_light;
  const themeDarkClass = appStyle.theme_dark;

  // Цвета фона страницы
  const parallelogramLeftColor = theme !== themeLightClass ? 'rgb(36, 36, 36)' : '#c5e7e9';
  const parallelogramRightColor = theme !== themeLightClass ? 'rgb(82, 82, 82)' : '#33b7b6';

  // Реализация перемещения скролла страницы до нужного блока в зависимости от переключения кнопки меню
  const handleTabClick = (value: string) => {
    const block = document.getElementById(value);
    if (block) {
        block.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setCurrentTab(value), 500);
    }
  };

  // Реализация переключения кнопок меню в header в зависимости от перемещения скролла страницы
  const [aboutRef, inViewAbout] = useInView({ threshold: 0 });
  const [portfolioRef, inViewPortfolio] = useInView({ threshold: 0 });
  const [contactsRef, inViewContacts] = useInView({ threshold: 0 });

  useEffect(() => {
    if (inViewAbout) setCurrentTab('about');
    else if (inViewPortfolio) setCurrentTab('portfolio');
    else if (inViewContacts) setCurrentTab('contacts');
  }, [inViewAbout, inViewPortfolio, inViewContacts, setCurrentTab]);

  return (
    <div className={`${appStyle.app} ${theme !== themeLightClass ? themeDarkClass : themeLightClass}`}>
      <div className={appStyle.parallelogramLeft} style={{ backgroundColor: parallelogramLeftColor }}></div>
      <div className={appStyle.parallelogramRight} style={{ backgroundColor: parallelogramRightColor }}></div>
      <Header theme={theme} setTheme={setTheme} themeLightClass={themeLightClass} themeDarkClass={themeDarkClass} currentTab={currentTab} handleTabClick={handleTabClick} />
      <main className={appStyle.main}>
        <About scrollToRef={aboutRef} theme={theme} themeLightClass={themeLightClass} handleTabClick={handleTabClick} />
        <Portfilio scrollToRef={portfolioRef} />
        <Contacts scrollToRef={contactsRef} theme={theme} themeLightClass={themeLightClass} />
      </main>
    </div>
  );
}

export default App;

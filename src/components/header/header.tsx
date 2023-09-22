import headerStyle from './header.module.css';
import { FC } from 'react';

type Props = {
    theme: string;
    setTheme: (theme: string) => void;
    themeLightClass: string;
    themeDarkClass: string;
    currentTab: string;
    handleTabClick: (value: string) => void;
}

const Header: FC<Props> = ({ theme, setTheme, themeLightClass, themeDarkClass, currentTab, handleTabClick }) => {

    // Цвета фона
    const parallelogramLeftColor = theme !== themeLightClass ? 'rgb(22, 22, 22)' : 'rgb(255, 255, 255)';
    const parallelogramRightColor = theme !== themeLightClass ? 'rgb(82, 82, 82)' : '#33b7b6';

    // Переключение на темную тему по клику на кнопку
    const handleDarkThemeBtn = (): void => {
        setTheme(themeDarkClass);
    }

    // Переключение на светлую тему по клику на кнопку
    const handleLightThemeBtn = (): void => {
        setTheme(themeLightClass);
    }

    // Классы кнопок в зависимости от тем
    const navBtnThemeClass = theme !== themeLightClass ? headerStyle.btn_color_darkTheme : (headerStyle.btn_color_lightTheme && headerStyle.btn_nav_lightTheme);

    return (
        <header className={`${headerStyle.header}`} style={{ backgroundColor: parallelogramLeftColor }}>
            <div className={headerStyle.parallelogramRight} style={{ backgroundColor: parallelogramRightColor }}></div>

            <div className={headerStyle.themeBtnWrap}>
                <input type="checkbox" id="toggle" className={headerStyle.toggleCheckbox}></input>
                <label htmlFor="toggle" className={headerStyle.toggleContainer}>
                    <span className={`${headerStyle.darkThemeBtn}`} onClick={handleDarkThemeBtn}>Dark</span>
                    <span className={`${headerStyle.lightThemeBtn}`} onClick={handleLightThemeBtn}>Light</span>
                </label>
            </div>

            <nav className={headerStyle.navMenu}>
                <button 
                    className={`${headerStyle.btn} ${navBtnThemeClass}
                        ${currentTab === 'about' ? headerStyle.btn_active : headerStyle.btn_inactive}
                        ${(theme === themeLightClass && currentTab === 'about') && headerStyle.btn_nav_lightTheme_active}
                    `}
                    type='button'
                    onClick={() => handleTabClick('about')}
                >О себе
                </button>
                <button 
                    className={`${headerStyle.btn} ${navBtnThemeClass}
                        ${currentTab === 'portfolio' ? headerStyle.btn_active : headerStyle.btn_inactive}
                        ${(theme === themeLightClass && currentTab === 'portfolio') && headerStyle.btn_nav_lightTheme_active}
                    `}
                    type='button'
                    onClick={() => handleTabClick('portfolio')}
                >Проекты
                </button>
                <button 
                    className={`${headerStyle.btn} ${navBtnThemeClass}
                        ${currentTab === 'contacts' ? headerStyle.btn_active : headerStyle.btn_inactive}
                        ${(theme === themeLightClass && currentTab === 'contacts') && headerStyle.btn_nav_lightTheme_active}
                    `}
                    type='button'
                    onClick={() => handleTabClick('contacts')}
                >Контакты
                </button>
            </nav>
            
        </header>
    )
}

export default Header;
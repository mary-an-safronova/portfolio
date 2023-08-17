import headerStyle from './header.module.css';
import { useState, FC } from 'react';

type Props = {
    theme: string;
    setTheme: (theme: string) => void;
    themeLightClass: string;
    themeDarkClass: string;
    currentTab: string;
    setCurrentTab: (currentTab: string) => void;
}

const Header: FC<Props> = ({ theme, setTheme, themeLightClass, themeDarkClass, currentTab, setCurrentTab }) => {
    const [currentTheme, setCurrentTheme] = useState<string>('dark');

    // Переключение на темную тему по клику на кнопку
    const handleDarkThemeBtn = (): void => {
        setTheme(themeDarkClass);
        setCurrentTheme('dark');
    }

    // Переключение на светлую тему по клику на кнопку
    const handleLightThemeBtn = (): void => {
        setTheme(themeLightClass);
        setCurrentTheme('light');
    }

    // Классы кнопок в зависимости от тем
    const themeBtnColorClass = theme !== themeLightClass ? headerStyle.btn_color_darkTheme : headerStyle.btn_color_lightTheme;
    const navBtnThemeClass = theme !== themeLightClass ? headerStyle.btn_color_darkTheme : (headerStyle.btn_color_lightTheme && headerStyle.btn_nav_lightTheme);

    // Реализация перемещения скролла страницы до нужного блока в зависимости от переключения кнопки меню
    const handleTabClick = (value: string) => {
        const block = document.getElementById(value);
        if (block) {
            block.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => setCurrentTab(value), 500);
        }
    };

    return (
        <header className={`${headerStyle.header}`}>
            <div className={headerStyle.themeBtnWrap}>
                <button className={`${headerStyle.btn} ${headerStyle.themeBtn} ${themeBtnColorClass} ${currentTheme === 'dark' && headerStyle.btn_active}`} onClick={handleDarkThemeBtn}>Dark Theme</button>
                <button className={`${headerStyle.btn} ${headerStyle.themeBtn} ${themeBtnColorClass} ${currentTheme === 'light' && headerStyle.btn_active}`} onClick={handleLightThemeBtn}>Light Theme</button>
            </div>

            <nav className={headerStyle.navMenu}>
                <button 
                    className={`${headerStyle.btn} ${navBtnThemeClass}
                        ${currentTab === 'about' ? headerStyle.btn_active : headerStyle.btn_inactive}
                        ${(theme === themeLightClass && currentTab === 'about') && headerStyle.btn_nav_lightTheme_active}
                    `}
                    type='button'
                    onClick={() => handleTabClick('about')}
                >About
                </button>
                <button 
                    className={`${headerStyle.btn} ${navBtnThemeClass}
                        ${currentTab === 'portfolio' ? headerStyle.btn_active : headerStyle.btn_inactive}
                        ${(theme === themeLightClass && currentTab === 'portfolio') && headerStyle.btn_nav_lightTheme_active}
                    `}
                    type='button'
                    onClick={() => handleTabClick('portfolio')}
                >Portfolio
                </button>
                <button 
                    className={`${headerStyle.btn} ${navBtnThemeClass}
                        ${currentTab === 'contacts' ? headerStyle.btn_active : headerStyle.btn_inactive}
                        ${(theme === themeLightClass && currentTab === 'contacts') && headerStyle.btn_nav_lightTheme_active}
                    `}
                    type='button'
                    onClick={() => handleTabClick('contacts')}
                >Contacts
                </button>
            </nav>
            
        </header>
    )
}

export default Header;
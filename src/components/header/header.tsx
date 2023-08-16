import headerStyle from './header.module.css';
import { useState, FC } from 'react';

type Props = {
    theme: string;
    setTheme: (theme: string) => void;
    themeLightClass: string;
    themeDarkClass: string;
}

const Header: FC<Props> = ({ theme, setTheme, themeLightClass, themeDarkClass }) => {
    const [currentTheme, setCurrentTheme] = useState<string>('dark');

    const handleDarkThemeBtn = (): void => {
        setTheme(themeDarkClass);
        setCurrentTheme('dark');
    }

    const handleLightThemeBtn = (): void => {
        setTheme(themeLightClass);
        setCurrentTheme('light');
    }

    return (
        <header className={`${headerStyle.header}`}>
            <div className={headerStyle.themeBtnWrap}>
            <button 
                className={`${headerStyle.btn} ${headerStyle.themeBtn} 
                    ${theme !== themeLightClass ? headerStyle.btn_color_darkTheme : headerStyle.btn_color_lightTheme} 
                    ${currentTheme === 'dark' && headerStyle.btn_acive}`} 
                onClick={handleDarkThemeBtn}
            >Dark Theme
            </button>
            <button 
                className={`${headerStyle.btn} ${headerStyle.themeBtn} 
                    ${theme !== themeLightClass ? headerStyle.btn_color_darkTheme : headerStyle.btn_color_lightTheme} 
                    ${currentTheme === 'light' && headerStyle.btn_acive}`} 
                onClick={handleLightThemeBtn}
            >Light Theme
            </button>
            </div>

            <nav className={headerStyle.navMenu}>
            <button className={`${headerStyle.btn} ${theme !== themeLightClass ? headerStyle.btn_color_darkTheme : (headerStyle.btn_color_lightTheme && headerStyle.btn_nav_lightTheme)}`}>About</button>
            <button className={`${headerStyle.btn} ${theme !== themeLightClass ? headerStyle.btn_color_darkTheme : (headerStyle.btn_color_lightTheme && headerStyle.btn_nav_lightTheme)}`}>Portfolio</button>
            <button className={`${headerStyle.btn} ${theme !== themeLightClass ? headerStyle.btn_color_darkTheme : (headerStyle.btn_color_lightTheme && headerStyle.btn_nav_lightTheme)}`}>Contact</button>
            </nav>
            
        </header>
    )
}

export default Header;
import portfolioStyle from './portfolio.module.css';
import { FC } from 'react';

type Props = {
    scrollToRef: () => void;
    theme: string;
    themeLightClass: string;
}

const Portfilio: FC<Props> = ({ scrollToRef,theme, themeLightClass }) => {

    // Цвет текста и фона в зависимости от темы
    const themeTextColorClass = theme !== themeLightClass ? portfolioStyle.text_color_darkTheme : portfolioStyle.text_color_lightTheme;
    const themeBackgroundColorClass = theme !== themeLightClass ? portfolioStyle.card_theme_dark : portfolioStyle.card_theme_light;

    return (
        <section className={`${portfolioStyle.wrap} ${themeTextColorClass}`} id='portfolio' ref={scrollToRef}>
            <h2 className={portfolioStyle.title}>My projects</h2>
            <ul className={portfolioStyle.innerWrap}>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/react-burger/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Stellar Burgers</h3>
                            <p className={portfolioStyle.cardSubtitle}>The space burger joint application.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/algososh/#/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Algososh</h3>
                            <p className={portfolioStyle.cardSubtitle}>Web application with visualization of popular algorithms and data structures.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/mesto-project/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Mesto</h3>
                            <p className={portfolioStyle.cardSubtitle}>The project is an interactive web page with photos and names of various places.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/friends/index.html" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Friends</h3>
                            <p className={portfolioStyle.cardSubtitle}>Web application of the Charity Development Fund.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/cannot_draw/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Can't Draw</h3>
                            <p className={portfolioStyle.cardSubtitle}>One-page website with a presentation of the drawing application.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/russian-travel/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Traveling In Russia</h3>
                            <p className={portfolioStyle.cardSubtitle}>One-page website about traveling in Russia with photos and descriptions of interesting and beautiful places of the country.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/how-to-learn-plus/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>How To Learn Plus</h3>
                            <p className={portfolioStyle.cardSubtitle}>One-page website about teaching techniques, principles and methods.</p>
                        </div>
                    </a>
                </li>
            </ul>
            
        </section>
    )
}

export default Portfilio;
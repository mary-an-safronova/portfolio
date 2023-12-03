import aboutStyle from './about.module.css';
import { FC } from 'react';
import photoImg from '../../images/portfolio_photo.png';

type Props = {
    theme: string;
    themeLightClass: string;
    scrollToRef: () => void;
    handleTabClick: (value: string) => void;
}

const About: FC<Props> = ({ theme, themeLightClass, scrollToRef, handleTabClick }) => {

    // Цвет текста в зависимости от темы
    const themeTextColorClass = theme !== themeLightClass ? aboutStyle.text_color_darkTheme : aboutStyle.text_color_lightTheme;

    return (
        <section className={`${aboutStyle.innerWrap} ${themeTextColorClass} ${theme !== themeLightClass ? aboutStyle.innerWrap_theme_dark : aboutStyle.innerWrap_theme_light}`} id='about' ref={scrollToRef}>
            <div className={aboutStyle.infoWrap}>
                <h1 className={aboutStyle.title}>Мария Сафронова</h1>
                <p className={aboutStyle.subtitle}>Web-разработчик</p>
                <p className={aboutStyle.description}>
                    Я Frontend-разработчик.<br/>
                    Живу в Москве.<br/>
                    На протяжении последнего года являюсь студентом курса "Веб-разработчик плюс" от Яндекс.Практикума.<br/>
                    Моя страсть - разработка современных веб-сайтов и приложений.<br/>
                    В настоящее время нахожусь в поиске работы.<br/>
                    Если у Вас имеются интересные предложения, пожалуйста, <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handleTabClick('contacts')}>свяжитесь</span> со мной через почту или Telegram.<br/>
                </p>
                <p className={aboutStyle.skillsTitle}>Мои навыки</p>
                <div className={aboutStyle.skillsContainer}>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>HTML</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>CSS</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>JavaScript</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>TypeScript</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>React</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Redux</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>npm</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Git</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Gitflow</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Webpack</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>REST API</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>WebSockets</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>SASS</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Layout</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>BEM-Nested</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>OOP</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Cypress</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Jest</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Node.js</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Express</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>MongoDB</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>ODM Mongoose</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>NestJS</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>TypeORM</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>SQL</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>PostgreSQL</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Linux</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Figma</p></div>
                    <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Notion</p></div>
                </div>
                <div className={aboutStyle.buttonWrap}>
                    <a href={require("../../files/Mary_Safronova_Resume.pdf")} target='blank'>
                        <button className={`${aboutStyle.btn} ${themeTextColorClass}`}>Резюме</button>
                    </a>
                    <button className={`${aboutStyle.btn} ${themeTextColorClass}`}
                        onClick={() => handleTabClick('contacts')}
                    >Контакты</button>
                </div>
            </div>
            <div className={aboutStyle.photoWrap}>
                <img className={aboutStyle.photo} src={photoImg} alt="photo" />
            </div>
        </section>
    )
}

export default About;
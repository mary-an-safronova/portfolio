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
        <section className={`${aboutStyle.wrap}`} id='about' ref={scrollToRef}>
            <div className={`${aboutStyle.innerWrap} ${theme !== themeLightClass ? aboutStyle.innerWrap_theme_dark : aboutStyle.innerWrap_theme_light} ${themeTextColorClass}`}>
                <div className={aboutStyle.infoWrap}>
                    <h1 className={aboutStyle.title}>Mariia Safronova</h1>
                    <p className={aboutStyle.subtitle}>A Web Developer</p>
                    <p className={aboutStyle.description}>
                        I am a Frontend Developer.<br/>
                        I live in Moscow.<br/>
                        For the last year I have been a student of the course "Web Developer Plus" from Yandex.Practicum.<br/>
                        My passion is the development of modern websites and applications.<br/>
                        I am currently looking for a job as a Junior Interface Developer.<br/>
                        At the moment I have no experience as a Frontend Developer, but I have all the necessary knowledge and skills to work effectively as a Junior Frontend Developer.
                    </p>
                    <p className={aboutStyle.skillsTitle}>My skills</p>
                    <div className={aboutStyle.skillsContainer}>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>JavaScript</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>TypeScript</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>HTML</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>CSS</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>SASS</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Layout</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>BEM-Nested</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>OOP</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>React</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Redux</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>REST API</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>WebSockets</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Git</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Gitflow</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Webpack</p></div>
                        <div className={aboutStyle.skill}><p className={aboutStyle.skillText}>Linux</p></div>
                    </div>
                    <div className={aboutStyle.buttonWrap}>
                        <button className={`${aboutStyle.btn} ${themeTextColorClass}`}>Download CV</button>
                        <button className={`${aboutStyle.btn} ${themeTextColorClass}`}
                            onClick={() => handleTabClick('contacts')}
                        >Contacts</button>
                    </div>
                </div>
                <div className={aboutStyle.photoWrap}>
                    <img className={aboutStyle.photo} src={photoImg} alt="photo" />
                </div>
            </div>
        </section>
    )
}

export default About;
import aboutStyle from './about.module.css';
import { FC } from 'react';

type Props = {
    theme: string;
    themeLightClass: string;
    scrollToRef: () => void;
}

const About: FC<Props> = ({ theme, themeLightClass, scrollToRef }) => {
    return (
        <section className={`${aboutStyle.wrap}`} id='about' ref={scrollToRef}>
            <div className={`${aboutStyle.innerWrap} ${theme !== themeLightClass ? aboutStyle.innerWrap_theme_dark : aboutStyle.innerWrap_theme_light}`}>

            </div>
        </section>
    )
}

export default About;
import contactsStyle from './contacts.module.css';
import { FC, useState } from 'react';
import { telegramIcon, vkIcon, linkedinIcon, instagramIcon, phoneIcon, emailIcon, codeWarsIcon, gitHubIcon } from '../../images/icons';

type Props = {
    theme: string;
    themeLightClass: string;
    scrollToRef: () => void;
}

const Contacts: FC<Props> = ({ theme, themeLightClass, scrollToRef }) => {
    const [num, setNum] = useState('');
    const [colorBtn, setColorBtn] = useState('rgb(133, 133, 173)');

    // Цвет текста в зависимости от темы
    const themeTextColorClass = theme !== themeLightClass ? contactsStyle.text_color_darkTheme : contactsStyle.text_color_lightTheme;

    const showNumber = () => {
        setNum('+7 (985) 885-54-04');
        setColorBtn('transparent');
    }

    return (
        <section className={`${contactsStyle.wrap}`} id='contacts' ref={scrollToRef}>
            <div className={`${contactsStyle.contactsWrap} ${theme !== themeLightClass ? contactsStyle.wrap_theme_dark : contactsStyle.wrap_theme_light} ${themeTextColorClass}`}>
                <h2 className={contactsStyle.contactsTitle}>Контакты</h2>
                <p className={contactsStyle.contactTitle}>Почта</p>
                <div className={contactsStyle.iconContactWrap}>
                    <img className={contactsStyle.contactImg} src={emailIcon} alt="E-mail icon" />
                    <p className={contactsStyle.contact}>mary.an.safronova@yandex.ru</p>
                </div>

                <p className={contactsStyle.contactTitle}>Телефон</p>
                <div className={contactsStyle.iconContactWrap}>
                    <img className={contactsStyle.contactImg} src={phoneIcon} alt="Phone icon" />
                    <button className={`${contactsStyle.contactNumWrap} ${themeTextColorClass}`} onClick={showNumber} style={{ backgroundColor: colorBtn, transition: 'background-color 0.3s ease' }}>{num}</button>   
                </div>

                <ul className={contactsStyle.socialWrap}>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://t.me/Mary_Safronova" target='blank'>
                            <span><img className={contactsStyle.img} src={telegramIcon} alt="Telegram icon" title='Telegram' /></span>
                            <span><img className={contactsStyle.img} src={telegramIcon} alt="Telegram icon" title='Telegram' /></span>
                            <span><img className={contactsStyle.img} src={telegramIcon} alt="Telegram icon" title='Telegram' /></span>
                            <span><img className={contactsStyle.img} src={telegramIcon} alt="Telegram icon" title='Telegram' /></span>
                            <span><img className={contactsStyle.img} src={telegramIcon} alt="Telegram icon" title='Telegram' /></span>
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://www.linkedin.com/in/mariia-safronova-1bb3a9288/" target='blank'>
                            <span><img className={contactsStyle.img} src={linkedinIcon} alt="LinkedIn icon" title='LinkedIn' /></span>
                            <span><img className={contactsStyle.img} src={linkedinIcon} alt="LinkedIn icon" title='LinkedIn' /></span>
                            <span><img className={contactsStyle.img} src={linkedinIcon} alt="LinkedIn icon" title='LinkedIn' /></span>
                            <span><img className={contactsStyle.img} src={linkedinIcon} alt="LinkedIn icon" title='LinkedIn' /></span>
                            <span><img className={contactsStyle.img} src={linkedinIcon} alt="LinkedIn icon" title='LinkedIn' /></span>
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://www.codewars.com/users/mary-an-safronova" target='blank'>
                            <span><img className={contactsStyle.img} src={codeWarsIcon} alt="CodeWars icon" title='CodeWars' /></span>
                            <span><img className={contactsStyle.img} src={codeWarsIcon} alt="CodeWars icon" title='CodeWars' /></span>
                            <span><img className={contactsStyle.img} src={codeWarsIcon} alt="CodeWars icon" title='CodeWars' /></span>
                            <span><img className={contactsStyle.img} src={codeWarsIcon} alt="CodeWars icon" title='CodeWars' /></span>
                            <span><img className={contactsStyle.img} src={codeWarsIcon} alt="CodeWars icon" title='CodeWars' /></span>
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://github.com/mary-an-safronova" target='blank'>
                            <span><img className={contactsStyle.img} src={gitHubIcon} alt="GitHub icon" title='GitHub' /></span>
                            <span><img className={contactsStyle.img} src={gitHubIcon} alt="GitHub icon" title='GitHub' /></span>
                            <span><img className={contactsStyle.img} src={gitHubIcon} alt="GitHub icon" title='GitHub' /></span>
                            <span><img className={contactsStyle.img} src={gitHubIcon} alt="GitHub icon" title='GitHub' /></span>
                            <span><img className={contactsStyle.img} src={gitHubIcon} alt="GitHub icon" title='GitHub' /></span>
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://vk.com/marya_an" target='blank'>
                            <span><img className={contactsStyle.img} src={vkIcon} alt="VK icon" title='VK' /></span>
                            <span><img className={contactsStyle.img} src={vkIcon} alt="VK icon" title='VK' /></span>
                            <span><img className={contactsStyle.img} src={vkIcon} alt="VK icon" title='VK' /></span>
                            <span><img className={contactsStyle.img} src={vkIcon} alt="VK icon" title='VK' /></span>
                            <span><img className={contactsStyle.img} src={vkIcon} alt="VK icon" title='VK' /></span>
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://instagram.com/marya.safronova?igshid=ZGUzMzM3NWJiOQ==" target='blank'>
                            <span><img className={contactsStyle.img} src={instagramIcon} alt="Instagram icon" title='Instagram' /></span>
                            <span><img className={contactsStyle.img} src={instagramIcon} alt="Instagram icon" title='Instagram' /></span>
                            <span><img className={contactsStyle.img} src={instagramIcon} alt="Instagram icon" title='Instagram' /></span>
                            <span><img className={contactsStyle.img} src={instagramIcon} alt="Instagram icon" title='Instagram' /></span>
                            <span><img className={contactsStyle.img} src={instagramIcon} alt="Instagram icon" title='Instagram' /></span>
                        </a>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Contacts;
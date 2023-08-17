import contactsStyle from './contacts.module.css';
import { FC } from 'react';
import { telegramIcon, vkIcon, linkedinIcon, instagramIcon, phoneIcon, emailIcon } from '../../images/icons';

type Props = {
    theme: string;
    themeLightClass: string;
    scrollToRef: () => void;
}

const Contacts: FC<Props> = ({ theme, themeLightClass, scrollToRef }) => {

    // Цвет текста в зависимости от темы
    const themeTextColorClass = theme !== themeLightClass ? contactsStyle.text_color_darkTheme : contactsStyle.text_color_lightTheme;

    return (
        <section className={`${contactsStyle.wrap}`} id='contacts' ref={scrollToRef}>
            <div className={`${contactsStyle.contactsWrap} ${theme !== themeLightClass ? contactsStyle.wrap_theme_dark : contactsStyle.wrap_theme_light} ${themeTextColorClass}`}>
                <h2 className={contactsStyle.contactsTitle}>Contacts</h2>
                <p className={contactsStyle.contactTitle}>E-mail</p>
                <div className={contactsStyle.iconContactWrap}>
                    <img className={contactsStyle.contactImg} src={emailIcon} alt="E-mail icon" />
                    <p className={contactsStyle.contact}>mary.an.safronova@yandex.ru</p>
                </div>

                <p className={contactsStyle.contactTitle}>Phone</p>
                <div className={contactsStyle.iconContactWrap}>
                    <img className={contactsStyle.contactImg} src={phoneIcon} alt="Phone icon" />
                    <p className={contactsStyle.contact}>+7 (985) 885-54-04</p>
                </div>

                <p className={contactsStyle.contactTitle}>Social</p>
                <ul className={contactsStyle.socialWrap}>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://t.me/Mary_Safronova">
                            <img className={contactsStyle.img} src={telegramIcon} alt="Telegram icon" />
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://www.linkedin.com/in/mariia-safronova-1bb3a9288/">
                            <img className={contactsStyle.img} src={linkedinIcon} alt="LinkedIn icon" />
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://vk.com/marya_an">
                            <img className={contactsStyle.img} src={vkIcon} alt="VK icon" />
                        </a>
                    </li>
                    <li className={contactsStyle.socialIcon}>
                        <a className={contactsStyle.link} href="https://instagram.com/marya.safronova?igshid=ZGUzMzM3NWJiOQ==">
                            <img className={contactsStyle.img} src={instagramIcon} alt="Instagram icon" />
                        </a>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default Contacts;
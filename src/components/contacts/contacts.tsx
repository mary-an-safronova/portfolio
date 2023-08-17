import contactsStyle from './contacts.module.css';
import { FC } from 'react';

type Props = {
    theme: string;
    themeLightClass: string;
    scrollToRef: () => void;
}

const Contacts: FC<Props> = ({ theme, themeLightClass, scrollToRef }) => {
    return (
        <section className={`${contactsStyle.wrap} ${theme !== themeLightClass ? contactsStyle.wrap_theme_dark : contactsStyle.wrap_theme_light}`} id='contacts' ref={scrollToRef}>
        </section>
    )
}

export default Contacts;
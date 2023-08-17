import portfolioStyle from './portfolio.module.css';
import { FC } from 'react';

type Props = {
    scrollToRef: () => void;
}

const Portfilio: FC<Props> = ({ scrollToRef }) => {
    return (
        <section className={portfolioStyle.wrap} id='portfolio' ref={scrollToRef}>

        </section>
    )
}

export default Portfilio;
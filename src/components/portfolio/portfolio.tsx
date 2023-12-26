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
            <h2 className={portfolioStyle.title}>Мои проекты</h2>
            <ul className={portfolioStyle.innerWrap}>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/react-burger/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Stellar Burgers</h3>
                            <p className={portfolioStyle.cardSubtitle}>Веб-приложение с возможностью сборки и заказа бургера. Drag and Drop.
                                Модальные окна. Счетчики ингредиентов и цены. Регистрация и авторизация
                                пользователей, восстановление пароля, редактирование личных данных.
                                Просмотр заказов и их статусов в реальном времени. Реализовано
                                взаимодействие с сервером.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/algososh/#/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Algososh</h3>
                            <p className={portfolioStyle.cardSubtitle}>Веб приложение с визуализацией популярных алгоритмов и
                                структур данных. Эта проектная работа заточена на анимацию и поэтапное
                                отображение работы алгоритма, что позволит вам детальнее понять каждый
                                шаг его работы.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://github.com/mary-an-safronova/web-plus-docker-and-compose" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Контейнеризация и деплой сервиса КупиПодариДай</h3>
                            <p className={portfolioStyle.cardSubtitle}>Сервис контейнеризирован при помощи Docker и Docker Compose. 
                                Он состоит из трех частей: бэкенд-сервиса на Node.js, БД (PostrgreSQL) и фронтенда на React (раздаётся nginx), 
                                развернут в Яндекс Облаке.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://github.com/mary-an-safronova/kupipodariday-backend" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Бэкенд КупиПодариДай</h3>
                            <p className={portfolioStyle.cardSubtitle}>Бэкенд сервиса вишлистов КупиПодариДай. 
                                В нём каждый зарегистрированный пользователь может рассказать о том, какой подарок он бы хотел получить, 
                                а также скинуться на подарок для другого пользователя, указав сумму, которую готов на это потратить. 
                                Используемые технологии: NestJS, TypeORM. В качестве базы данных выбрана PostgreSQL.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/mesto-project/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Mesto</h3>
                            <p className={portfolioStyle.cardSubtitle}>Интерактивная веб-страница с фотографиями и названиями
                                различных мест планеты. Возможность редактирования личных данных,
                                просмотра, добавления и удаления фото по ссылке. Возможность ставить и
                                удалять лайки, подсчет и отображение их количества. Реализовано
                                взаимодействие с сервером.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://github.com/mary-an-safronova/mesto-project-plus" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Бэкенд Mesto. Каркас API Mesto</h3>
                            <p className={portfolioStyle.cardSubtitle}>Серверная часть для проекта Mesto написана на Express. 
                            В качестве базы данных выбрана MongoDB с маппером Mongoose. При каждом запросе на сервер все ошибки обрабатываются. 
                            Роуты /users и /cards защищены авторизацией.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://github.com/mary-an-safronova/web-plus-pm2-deploy" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Деплой приложения Mesto на сервер</h3>
                            <p className={portfolioStyle.cardSubtitle}>Создан и настроен удалённый сервер, 
                                описан сценарий автоматического деплоя при помощи pm2, 
                                настроены SSL-сертификаты и перезапуск приложения при падении сервера.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/friends/index.html" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Friends</h3>
                            <p className={portfolioStyle.cardSubtitle}>БФ "Друзья" - командный проект в рамках обучения в Яндекс Практикуме. 
                                Веб-приложение Фонда развития благотворительности.
                            </p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/cannot_draw/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Can't Draw</h3>
                            <p className={portfolioStyle.cardSubtitle}>Одностраничный веб-сайт с презентацией приложения для рисования.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/russian-travel/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>Traveling In Russia</h3>
                            <p className={portfolioStyle.cardSubtitle}>Одностраничный сайт о путешествиях по России с фотографиями и описаниями интересных и красивых мест страны.</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a className={`${portfolioStyle.link} ${themeTextColorClass}`} href="https://mary-an-safronova.github.io/how-to-learn-plus/" target='blank'>
                        <div className={`${portfolioStyle.card} ${themeBackgroundColorClass}`}>
                            <h3 className={portfolioStyle.cardTitle}>How To Learn Plus</h3>
                            <p className={portfolioStyle.cardSubtitle}>Одностраничный веб-сайт, посвященный методам обучения, принципам и методикам.</p>
                        </div>
                    </a>
                </li>
            </ul>
            
        </section>
    )
}

export default Portfilio;
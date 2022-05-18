import React from 'react'
import {Link} from "react-router-dom";


const MainStatic = () => {
    return (
        <div class="wholeBody">


            <img src={require('../img/logo1.png')} alt="" className="main_img"/>
                <span className="headername"> Los Santos Customs - LSC</span>
                <hr/>
                    <div className="box1">
    <span className="text">LSC - проверенный тысячами клиентов автосервис, станция экспертного ремонта и обслуживания автомобилей ведущих брендов.
        Проводим детальную диагностику узлов и агрегатов – располагаем сертифицированным диагностическим оборудованием, соответствующим высоким требованиям крупнейших автоконцернов – BMW, Mercedes, Audi и т.д.
    </span>
                        <img src={require('../img/1.jpg')} className="boximg1"/>
                    </div>
                    <hr/>
                        <div className="asd">
                            Все виды технических работ!
                        </div>
                        <div className="box2">

        <span className="text">
            Сервисный центр «LSC» — возможность получить комплексный уход за автомобилем, сэкономив средства и время. Как профессиональный автотехцентр, мы предлагаем:
            <ul>
                <li>Техническое обслуживание;</li>
                <li>Диагностика и ремонт электрики на оригинальном оборудовании Mercedes, BMW, Audi, Toyota;</li>
                <li>Диагностика и ремонт двигателей бензиновых и дизельных;</li>
                <li>Ремонт редукторов, карданных валов и рулевых реек;</li>
                <li>Ремонт АКПП/МКПП/DSG;</li>
                <li>Тюнинг и ремонт выхлопной системы;</li>
                <li>Правку колесных дисков;</li>
                <li>Шиномонтаж;</li>
                <li>Хранение шин и дисков;</li>
                <li>Автомойка / Химчистка/ Детейлинг услуги;</li>
                <li>Кузовной ремонт и покраска автомобиля;</li>
                <li>Удаление вмятин без окраса кузова.</li>
            </ul>
            Доступ ко всем техническим базам производителей и многолетняя практика персонала позволяют быстро решать разные задачи, соблюдая регламент.
            Мы можем недорого отремонтировать автомобиль после ДТП, подготовить автомобиль к продаже, дальнему путешествию, устранить мелкие неполадки, настроить системы.
            Запишитесь на обслуживание, убедитесь в привилегиях сотрудничества с профессиональным сервисом.
        </span>
                            <img src={require('../img/4.jpg')} className="boximg2"/>
                        </div>
                        <hr/>
                            <div className="asd">
                                Персонал и оснащение
                            </div>
                            <div className="box3">
                                <img src={require('../img/5.jpg')} className="boximg3"/>
    <span className="text">
        Для качественной работы обязательно нужен квалифицированный персонал с опытом, профессиональное оборудование и инструменты.
        Понимая такие простые истины, мы собрали штат профильных специалистов — мастеров своего дела с опытом от 8 лет и предоставили им соответствующие условия.
        Рабочие посты СТО оснащены согласно высоким стандартам и требованиям ведущих производителей.
        Для каждого вида операций предусмотрены отдельные посты, бокс под покраску.
        Передвижное оборудование позволяет предоставлять оперативную помощь в решении сложных задач.
    </span>
                            </div>
                            <hr/>
                                <div className="asd">
                                    Гарантии
                                </div>
                                <div className="box4">
    <span className="text">
        Проводим послегарантийное и профилактическое обслуживание автомобилей.
        Предоставляем гарантии на услуги, а также на приобретенные запчасти.
        Гарантийный срок и пробег индивидуален для каждого класса работ.
        Для сложных узлов и агрегатов – 60 суток или 6 000 км пробега авто, в случае применения оригинальных запчастей производителя.
    </span>
                                    <img src={require('../img/2.png')} className="boximg4"/>
                                </div>
                                <hr/>
                                    <div className="asd">
                                        Преимущества автосервиса «LSC»
                                    </div>
                                    <div className="box5">
    <span className="text">
        <ul>
            <li><b>Быстрая оценка ремонта авто.</b> Сфотографируйте повреждение и отправьте запрос менеджеру с кратким описанием неисправности, и узнайте цену устранения неполадок.</li>
            <li><b>Бесплатные консультации.</b> Предоставляем рекомендации по оптимизации эксплуатации, отвечаем на технические вопросы.</li>
            <li><b>Выгодные расценки.</b> У нас можно заказать недорогой, но качественный автомобильный ремонт, получив хорошую скидку. Мы регулярно разрабатываем специальные предложения, бонусы.</li>
            <li><b>Полный комплекс услуг.</b> Выполняем все виды технических работ, включая уход за автомобилем.</li>
            <li><b>Гарантии.</b> Берем на себя ответственность за качество работ и установленных деталей. Срок зависит от вида запчастей, условий обслуживания.</li>
        </ul>
    </span>
                                    </div>

                                    <Link to={""}>
                                        <button className="butt1">Оставить заявку</button>
                                    </Link>
                                    <div className="asd">
                                        Наши постоянные клиенты:
                                    </div>
                                    <div className="customers">
                                        <img src={require('../img/unknown1.png')} className=""/>
                                            <img src={require('../img/unknown.png')} className=""/>
                                                <img src={require('../img/unknown2.png')} className=""/>
                                                    <img src={require('../img/Grand Theft Auto V Screenshot 2019.10.10 - 23.05.19.75.png')} className=""/>
                                    </div>
                                    <hr/>
                                        <div className="brandlogos">
                                            <img src={require('../img/Dinka-GTAO-Logo.png')} className=""/>
                                                <img src={require('../img/Declasse-GTAO-Logo-Old.png')} className=""/>
                                                    <img src={require('../img/Revolter-GTAV-detail.png')} className=""/>
                                                        <img src={require('../img/Benefactor-GTAO-Logo.png')} className=""/>
                                                            <img src={require('../img/Karin-GTAO-Logo.png')} className=""/>
                                                                <img src={require('../img/Grotti-GTAV-Logo.png')} className=""/>
                                        </div>


        </div>
    )
}

export default MainStatic
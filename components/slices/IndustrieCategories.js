import React from 'react'
import en from '../../locales/en';
import fr from '../../locales/fr';
import pt from '../../locales/pt';
import { useRouter } from 'next/router';
import Image from 'next/image';
import arrow from '../../public/assets/arrow_blue.png'
const IndustrieCategories = ({ props }) => {
    const data = props.data.data.attributes.industriesBlock;
    const router = useRouter();
    const { locale } = router;
    let lang;
    if (locale === 'en') {
        lang = en
    }
    if (locale === 'fr') {
        lang = fr
    }
    if (locale === 'pt') {
        lang = pt
    }
    return (
        <div className="industrie-categories">
            <div className="industrie-categories__wrapper">
                <div className="industrie-categories__learn">
                    <div className="container">
                        <h1 className="industrie-categories__learn--title">{lang.industriesLearnTitle}</h1>
                        <p className="industrie-categories__learn--text">{lang.industriesLearnDesc}</p>
                    </div>
                </div>
                <div className='industrie-categories__block container'>
                    {data.map((item, index) => (
                        <div key={index} className="industrie-categories__block--item">
                            <div className="industrie-categories__block--icon">
                                <Image width="100%" height="100%" src={item.icon.data.attributes.url} ></Image>
                            </div>
                            <div className="industrie-categories__block--category">
                                <div className="industrie-categories__block--title">{item.title}</div>
                                <div className="industrie-categories__block--arrow">
                                    <Image width="100%" height="100%" src={arrow.src} ></Image>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IndustrieCategories
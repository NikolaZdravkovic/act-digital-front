import React from 'react'
import { useRouter } from 'next/router';

import en from '../../locales/en';
import fr from '../../locales/fr';
import pt from '../../locales/pt';



const AboutCards = () => {
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
    const data = [
        { title: lang.missionAbout, description: lang.missionAboutDesc },
        { title: lang.visionAbout, description: lang.visionAboutDesc },
        { title: lang.valuesAbout, description: lang.valuesAboutDesc }]


    return (
        <div className="cards">
            <div className="cards-block">
                {data.map((item, index) => (
                    <div key={index} className="cards-item">
                        <div className="cards-item--hold">
                            <div className="cards-item--title">{item.title}</div>
                            <div className="cards-item--line"></div>
                            <div className="cards-item--description">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutCards
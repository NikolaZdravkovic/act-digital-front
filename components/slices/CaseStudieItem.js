import React from 'react'
import Image from 'next/image'
import case_studies_hero from '../../public/assets/caseStudiesPageHero.png'
import arrow from '../../public/assets/arrow_blue.png'
import Link from 'next/link'



const CaseStudieItem = (props) => {
    const data = props.props.attributes
    return (
        <Link href={`/case-studies/${data.slug}`}>
            <div className="studie-item__container">
                <div className="studie-item">
                    <div className="studie-item__image">
                        <Image priority
                            layout="fill"
                            objectFit="cover" src={data.image.data.attributes.url} />
                    </div>
                    <div className="studie-item__block">
                        <div className="studie-item--category">{data.category}</div>
                        <div className="studie-item--title">{data.title}</div>
                        <div className="studie-item--divider"></div>
                        <div className="studie-item--description">{data.description} </div>
                        <Link href={`/case-studies/${data.slug}`}>
                            <div className="studie-item--readMore">
                                <span>Read more</span>
                                <div className="studie-item--icon">
                                    <Image priority
                                        layout="fill"
                                        objectFit="cover" src={arrow.src} /></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CaseStudieItem
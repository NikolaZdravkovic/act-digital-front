import React from 'react'
import triangle_right from '../../public/assets/triangle_right.png'
import Link from 'next/link'

const CaseStudiesBlock = ({ props }) => {
    const data = props.data.data.attributes.caseStudies
    console.log(data)

    // const data = props.data.data.attributes.caseStudiesHP;

    return (
        <div className="case-studiesBlock container">
            <div className="case-studiesBlock__frame">
                <div className="case-studiesBlock__title">
                    Case Studies

                </div>
                <Link href="/case-studies">
                    <div className="case-studiesBlock__seeAll">
                        <div> See all</div>
                        <img src={`${triangle_right.src}`} alt="" />
                    </div>
                </Link>
            </div>
            <div className="case-studiesBlock__wrapper">
                {data.map((item, index) => (
                    <div key={index} className="case-studiesBlock__block">
                        <div className="case-studiesBlock__content">
                            <div className="case-studiesBlock__content--title">
                                {item.title}
                            </div>
                            <div className="case-studiesBlock__content--divider"></div>
                            <div className="case-studiesBlock__content--desc">{item.description}</div>
                        </div>
                        <div className="case-studiesBlock__img">
                            <img src={`${item.image.data.attributes.url}`} alt="" />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default CaseStudiesBlock
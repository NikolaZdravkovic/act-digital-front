import React from 'react'
import arrow from '../../public/assets/arrow.png'

const ContactBlock = ({ props }) => {
    const data = props.data.data.attributes.contactBlock;
    return (
        <div className="contactBlock-wrapper">
            <div className="contactBlock-block">
                <div className="contactBlock-desc">
                    {data.description}
                </div>
                <div className="contactBlock-img">
                    <img src={`${data.image.data.attributes.url}`} alt="" />
                </div>
                <div className="contactBlock-title__wrap">
                    <div className="contactBlock-title__wrapper">
                        <div className="contactBlock-title__wrap--title">
                            {data.title}
                        </div>
                        <div className="contactBlock-title__wrap--icon">
                            <img src={`${arrow.src}`} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactBlock
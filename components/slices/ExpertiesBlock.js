import React from 'react'
import Image from 'next/image'

const ExpertiesBlock = ({ props }) => {
    const data = props.data.data.attributes.experties

    // console.log(data)

    return (
        <div className="experties-wrapper container">
            <div className="experties-title">
                Experties
            </div>
            <div className="experties-block">
                {data.map((item, index) => (
                    <div key={index} className="experties-item">
                        <div className="experties-icon">
                            <Image
                                width="100%"
                                height="100%"
                                src={item.icon.data.attributes.url}
                            />
                        </div>
                        <div className="experties-block__hold container">
                            <div className="experties-block__hold--title">{item.title}</div>
                            <div className="experties-block__hold--description">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExpertiesBlock
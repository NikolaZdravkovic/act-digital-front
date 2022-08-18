import React from 'react'

const Experties = (props) => {
    const expertiesData = props.props.data.data.attributes.expertiesHP
    return (
        <div className="experties">
            <div className="experties-title container">
                Experties
            </div>
            <div className="experties-block">
                {expertiesData.map((item, index) => (
                    <div key={index} className="experties-block__item">
                        <img className="experties-block__item--img" src={`${item.image.data.attributes.url}`} alt="" />
                        <div className="experties-block__item--title">
                            {item.title}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Experties
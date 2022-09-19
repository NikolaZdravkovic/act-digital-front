import React from 'react'

const Clients = ({ props }) => {
    const data = props.data.data.attributes.clientsBlock;

    return (
        <div className="clients-wrapper">
            <div className="clients-title">Our clients</div>
            <div className="clients-block">
                {data.map((item, index) => (
                    <div key={index} className="clients-item">
                        <div  className="clients-img">
                            <img src={`${item.image.data.attributes.url}`} alt="" />
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Clients
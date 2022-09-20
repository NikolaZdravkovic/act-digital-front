import React from 'react'

const Industries = ({ props }) => {
    const industriesData = props.data.data.attributes.industriesHP
    let data;
    return (

        <div className="industries">
            <div className="industries-title">Industries</div>
            <div className="industries-block">
                {industriesData.map((item) => {
                    data = item.image.data.attributes.url;

                    return (
                        <div style={{ backgroundImage: `url(${item.image.data.attributes.url})` }} key={item.id} className="industries-item">
                            <span className="industries-block--title">
                                {item.title}
                            </span>
                        </div>

                    );
                })}


            </div>
        </div>

    )
}

export default Industries
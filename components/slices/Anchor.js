import React from 'react'

const Anchor = (props) => {
  // console.log(props.props.data.data.attributes.anchorHp)
  const anchorData = props.props.data.data.attributes.anchorHp
  return (

    <div className="anchor-wrapper">
      {anchorData.map((item) => {
        return (
          <div key={item.id} className="anchor-item">
            <span> {item.title}</span>
            <span className="anchor-arrow"></span>
          </div>
        );
      })}

    </div>
  )
}

export default Anchor
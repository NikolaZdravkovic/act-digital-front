import React from 'react'

const Anchor = (props) => {
  console.log(props.props.data.data.attributes.anchorHp)
  const anchorData = props.props.data.data.attributes.anchorHp
  return (

    <div className="anchor-wrapper">
      {anchorData.map((item) => {
        return (
          <div key={item.id} className="anchor-item">
            <span className="anchor-title"> {item.title}</span>
            <span className="anchor-arrow"></span>
            <span className="anchor-desc">{item.description}</span>
          </div>
        );
      })}

    </div>
  )
}

export default Anchor
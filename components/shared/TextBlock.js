import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const TextBlock = ({ props }) => {
  // const data = props.data.data.attributes.textBlock.content
  // console.log(props.data.data.attributes.textBlock.content)
  // console.log(props)
  return (
    <ReactMarkdown >
        {props}
    </ReactMarkdown>
  )
}

export default TextBlock
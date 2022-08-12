import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const TextBlock = (props) => {
  return (
        <ReactMarkdown children={props.props.content}>
        </ReactMarkdown>
  )
}

export default TextBlock
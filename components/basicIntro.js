import React from 'react'
import MDReactComponent from 'markdown-react-js';

function BasicIntro(props) {

  return(
    <div className="basic-intro">
      <h3 className="orange-text">{props.content.fields.title}</h3>
      <div>
        <p>
        <MDReactComponent text={props.content.fields.description} />
        </p>
      </div>
    </div>
  )
}

export default BasicIntro

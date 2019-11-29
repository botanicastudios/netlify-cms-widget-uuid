import React from 'react'
import uuid from 'uuid/v4'

export default class Control extends React.Component {

  render() {
    const {
      forID,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
      value,
      onChange
    } = this.props

    console.log('render', value)

    if(!value) { 
      onChange(uuid()) 
    }

    return ( 
      <input type="text"
        id={forID}
        value={value || ''}
        className={classNameWrapper}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
        readonly
      />
    )
  }
}
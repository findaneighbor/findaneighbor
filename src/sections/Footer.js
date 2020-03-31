import React from 'react'

const year = new Date().getFullYear()

export const Footer = ({ className = '', style = {} }) => {
  return <div style={style} className={`footer flex-col text-secondary-500 ${className}`}>
    <p>&copy; Find A Neighbor {year}</p>
  </div>
}

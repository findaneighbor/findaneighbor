import React from 'react'

const year = new Date().getFullYear()

export const Footer = ({ className = '', style = {} }) => {
  return <div style={style} className={`footer text-secondary-500 ${className}`}>
    &copy; Find A Neighbor {year}
  </div>
}

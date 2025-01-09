import React from 'react'

const LinesLogo = ({ color }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.757812" y="0.839844" width="24.2424" height="1.52" fill={color} />
      <rect x="0.757812" y="5.40039" width="24.2424" height="1.52" fill={color} />
      <rect x="0.757812" y="9.95898" width="24.2424" height="1.52" fill={color} />
      <rect x="0.757812" y="14.5195" width="18.1818" height="1.52" fill={color} />
      <rect x="0.757812" y="19.0801" width="24.2424" height="1.52" fill={color} />
      <rect x="0.757812" y="23.6406" width="12.8788" height="1.52" fill={color} />
    </svg>
  )
}

export default LinesLogo
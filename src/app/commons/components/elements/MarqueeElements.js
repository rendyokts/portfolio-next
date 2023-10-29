import React from 'react'
import Marquee from 'react-fast-marquee'


export default function MarqueeElement({ children, direction }) {
  return (
    <Marquee direction={direction} speed={25} className="py-3">
      {children}
    </Marquee>
  )
}
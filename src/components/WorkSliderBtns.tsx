'use client'

import { useSwiper } from 'swiper/react'
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi'
import React from 'react'

interface WorkSliderBtnsProps {
  containerStyles?: string
  btnStyles?: string
  iconStyles?: string
}

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({
  containerStyles,
  btnStyles,
  iconStyles,
}) => {
  const swiper = useSwiper()

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} bg-accent backdrop-blur-sm transition-all`}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={`${btnStyles} bg-accent backdrop-blur-sm transition-all`}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  )
}

export default WorkSliderBtns

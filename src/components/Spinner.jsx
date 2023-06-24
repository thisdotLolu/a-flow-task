import React from 'react'

const Spinner = () => {
  return (
    <div className='spinner'>
        <svg 
        width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" fill="url(#pattern0)"/>
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use 
                xlink:href="#image0_1_997" transform="scale(0.0208333)"/>
                </pattern>
                <image id="image0_1_997" width="48" height="48" xlink:href="data:image/png;base64,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"/>
                </defs>
                </svg>
    </div>
  )
}

export default Spinner





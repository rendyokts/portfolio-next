import React from 'react'

function DashedDivider({ className }) {
  return (
    <div className={`border-b border-dashed border-neutral-600 dark:border-neutral-300 ${className}`}></div>
  )
}

export default DashedDivider
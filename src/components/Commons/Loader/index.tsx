import React from 'react'

const Loader = () => {
  return (
    <div className="my-[3.25em] flex justify-center items-center h-[2em] w-full">
    <div className="flex items-center justify-center">
        <div className="m-[5px] dotAnimation dot1"></div>
        <div className="m-[5px] dotAnimation dot2"></div>
        <div className="m-[5px] dotAnimation dot3"></div>
        <div className="m-[5px] dotAnimation dot4"></div>
        <div className="m-[5px] dotAnimation dot5"></div>
    </div>
</div>
  )
}

export default Loader
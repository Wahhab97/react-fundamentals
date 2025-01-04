"use client"
import React, { useEffect } from 'react'

const ConditonalCompnent = ({count}) => {

  useEffect(() => {
    console.log("on mount");
  }, []);

  useEffect(() => {
    return () => {
      console.log("compnent will unmount");
    }
  }, []);

  return (
    <div>
      <p>this compnent is conditionally rendered</p>
      {/* <p>count from inside {count}</p> */}
    </div>
  )
}

export default ConditonalCompnent
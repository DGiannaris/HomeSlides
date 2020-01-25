import React, { useState } from "react";
import "./Bar.css";


function Bar({percent,color,title}) {


  return (
    <div style={{ width: "90%" }}>
      <div className='titleCont'>
        <p className='title'>
          {title}
        </p>
        <p className='title'>
          {`${percent}%`}
        </p>
      </div>
      <div
        className='greybar'
      >
        <div style={{ width: `${percent}%`, height: 5, backgroundColor: color }} />
        <div
          style={{
            backgroundColor: color
          }}
          className='percent'
        />
        <div style={{ width: `${100-percent}%`, height: 5, backgroundColor: "#f5f7fd" }} />
      </div>
    </div>
  );
}

export default Bar;

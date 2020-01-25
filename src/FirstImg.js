import React, { useState } from "react";
import "./FirstImg.css";


function FirstImg({width,height,data,style}) {


  return (
    
            <div style={{backgroundColor:'#cccccc',width:width,height:height,marginRight:'1%',marginTop:style?style:0}}>
              <img 
                style={{width:'100%',height:height,}}
                src={data}
                alt="first img"
                />
            </div>

  );
}

export default FirstImg;

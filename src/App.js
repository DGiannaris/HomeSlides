import React, { useState } from "react";
import "./App.css";
import FirstImg from './FirstImg';
import Bar from './Bar';

function App({home}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [slide, setSlide] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const barColors = ['#39d5dd', '#71bdf4','#f6ab95','#c284da']

  return (
    <div className='mainCont'>
      <div className='header'
      >
        <div className='pageButtonsCont'
        >
          <div
            className='homebutton'
            onClick={() => setPage(0)}
          >
            <p style={{ color: "white" }}>Home</p>
            {page == 0 && (
              <div className='greenball'/>
            )}
          </div>
          <div className='pagebutton'
            onClick={() => setPage(1)}
          >
            <p style={{ color: "white" }}>Page 2</p>
            {page == 1 && (
              <div className='greenball'/>
            )}
          </div>
          <div className='searchCont'>
            <input
              type="text"
              style={{
                backgroundColor: "#404859",
                borderWidth: 1,
                borderColor: "transparent",
                height: "50%"
              }}
              onChange={event => setSearch(event.target.value)}
            />

            <img
              style={{ width: 20, height: 20 }}
              src={require("./assets/search.png")}
            />
          </div>
        </div>

        <div className ='titlesCont'>

          <p style={{ fontSize: 52, color: "white" }}>Slide 1</p>
          <p style={{ fontSize: 19, color: "white", marginTop: -25 }}>Text for slide 1</p>

          <div className='kebapCont'>
            <div className='kebapball'
              style={{
                backgroundColor: "#1292ee"
              }}
            />
            <div className='kebapball'/>
            <div  className='kebapball'/>
          </div>
        </div>
      </div>

{/*==================================================SECTIONS TITLE====================================================*/}

<div>
      <div style={{width:'100%',textAlign:'center'}}>
            <p style={{color:'#071e57',fontSize:32}}>{home.description}</p>  
      </div> 

              <div className='sectionButtonsCont'>
                <div
                  className='homebutton'
                  onClick={() => setSlide(0)}
                >
                  <p style={{ color: "#253642" }}>Section 1</p>
                  {slide == 0 && (
                    <div className='blueball'/>
                  )}
                </div>
                <div
                  className='pagebutton'
                  onClick={() => setSlide(1)}
                >
                  <p style={{ color: "#253642" }}>Section 2</p>
                  {slide == 1 && (
                     <div className='blueball'/>
                  )}
                </div>
              </div>


              {slide==0&&<div className='section1Cont'>
                  <FirstImg width={'30%'} height={370} data={home.sections[0].images[0].img} />

                  <div className='duoimgCont'>
                    
                    <FirstImg width={'90%'} height={175} data={home.sections[0].images[1].img} />
                   
                    <FirstImg width={'90%'} height={175} data={home.sections[0].images[2].img} style={20} />
                 
                  </div>
                  <div className='duoimgCont'>

                  <FirstImg width={'90%'} height={175} data={home.sections[0].images[3].img} />
                  <FirstImg width={'90%'} height={175} data={home.sections[0].images[4].img} style={20} />

                  </div>
              </div>}

              {slide==1&&
              <div className='section2Cont'>
                <div style={{marginLeft:'15%'}}>
                
                  <div style={{width:'60%',}}>
                        <div>
                            <p style={{color:'#3ca5f1',fontSize:20,}}>{home.sections[1].title}</p>
                        </div>

                        <div>
                            <p style={{color:'#071e57',fontSize:32}}>{home.sections[1].graphText}</p>
                        </div>


                        {home.sections[1].stats.map((it,ind)=> <Bar percent={it.amount/10} color={barColors[ind]} title={it.title}/>)}


                    </div>
                  </div>

                  <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginLeft:'-10%',marginTop:60}}>
                   
                    <p style={{color:'#071e57',fontSize:32}}>{home.sections[1].formText}</p>
                    
                    <p style={{color:'#748494',fontSize:14,width:'84%',marginTop:-20}}>We work with ecosystem leaders, corporations and startups worldwide. How can we help you?</p>

                    {home.sections[1].formLabels.map((it,ind)=>
                    <input
                    type="text"
                    className='formInput'
                    placeholder={it}
                    onChange={event => setName(event.target.value)}
                  />
                    
                    )}
                   
                    <button type="button" className='button'>
                    {home.sections[1].buttonText}
                    </button>
                  </div>

                

                 
                 
              </div>}

</div>









    </div>
  );
}

export default App;

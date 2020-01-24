import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchField from "react-search-field";

function App() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [slide, setSlide] = useState(0);
  return (
    <div style={{width:'100%',minHeight:'101vh',backgroundColor:'#f8faff'}}>
      <div
        style={{
          backgroundColor: "#404859",
          width: "100%",
          height: 300,
          marginTop: -20
        }}
      >
        <div
          style={{
            marginTop: 10,
            paddingTop: 20,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: 60 }}
            onClick={() => setPage(0)}
          >
            <p style={{ color: "white" }}>Home</p>
            {page == 0 && (
              <div
                style={{
                  backgroundColor: "#2ed47d",
                  borderRadius: "50%",
                  width: 6,
                  height: 6,
                  alignSelf: "center"
                }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 20,
              height: 60
            }}
            onClick={() => setPage(1)}
          >
            <p style={{ color: "white" }}>Page 2</p>
            {page == 1 && (
              <div
                style={{
                  backgroundColor: "#2ed47d",
                  borderRadius: "50%",
                  width: 6,
                  height: 6,
                  alignSelf: "center"
                }}
              />
            )}
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginLeft: 40 }}
          >
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

        <div style={{ width: "100%", textAlign: "center", marginTop: -10 }}>
          <p style={{ fontSize: 52, color: "white" }}>Slide 1</p>
          <p style={{ fontSize: 19, color: "white", marginTop: -25 }}>
            Text for slide 1
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: 40,
              justifyContent: "space-evenly",
              margin: "auto"
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: "50%",
                backgroundColor: "#1292ee"
              }}
            />
            <div
              style={{
                width: 7,
                height: 7,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: "50%"
              }}
            />
            <div
              style={{
                width: 7,
                height: 7,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "white",
                borderRadius: "50%"
              }}
            />
          </div>
        </div>
      </div>

{/*==================================================SECTIONS TITLE====================================================*/}

<div>
      <div style={{width:'100%',textAlign:'center'}}>
      <p style={{color:'#071e57',fontSize:32}}>Our Sections</p>  
      </div> 

              <div
                style={{
                  marginTop: 10,
                  paddingTop: 20,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  
                  width: "80%"
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", height: 60 }}
                  onClick={() => setSlide(0)}
                >
                  <p style={{ color: "#253642" }}>Slide1</p>
                  {slide == 0 && (
                    <div
                      style={{
                        backgroundColor: "#1292ee",
                        borderRadius: "50%",
                        width: 6,
                        height: 6,
                        alignSelf: "center"
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginLeft: 20,
                    height: 60
                  }}
                  onClick={() => setSlide(1)}
                >
                  <p style={{ color: "#253642" }}>Slide 2</p>
                  {slide == 1 && (
                    <div
                      style={{
                        backgroundColor: "#1292ee",
                        borderRadius: "50%",
                        width: 6,
                        height: 6,
                        alignSelf: "center"
                      }}
                    />
                  )}
                </div>
              </div>


              <div style={{marginLeft:'26%',width:'60%',marginTop:30,display:'flex',flexDirection:'row'}}>
                  <div style={{backgroundColor:'#cccccc',width:'30%',height:370,marginRight:'1%'}}></div>
                  <div style={{display:'flex',flexDirection:'column',width:'30%',alignItems:'center'}}>
                    <div style={{backgroundColor:'#cccccc',width:'90%',height:175}}></div>
                    <div style={{backgroundColor:'#cccccc',width:'90%',height:175,marginTop:20}}></div>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',width:'30%',alignItems:'center'}}>
                    <div style={{backgroundColor:'#cccccc',width:'90%',height:175}}></div>
                    <div style={{backgroundColor:'#cccccc',width:'90%',height:175,marginTop:20}}></div>
                  </div>
              </div>

</div>









    </div>
  );
}

export default App;

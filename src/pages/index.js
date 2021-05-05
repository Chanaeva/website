import React from "react"
import styled from "styled-components"
import me from '../../static/IMG_0369.jpg'

const Wrapper = styled.section`
  padding: 1em;
  background: papayawhip;
  width: 100%;
  height: 100vh;
  display: flex; 
  flex-direction: row; 
`

const Lemon = styled.div`
  width: 200px;
  height: 200px;
  background-color: #fff44f;
  border: 4px solid #fff44f;
  border-radius: 20px 140px 40px 140px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  position: relative;
  top: 145px;
  z-index: 1;
`
const Leaf = styled.div`
  width: 100px;
  height: 100px;
  background: #77d01a;
  border-radius: 5px 100px;
  transform: rotate(105deg);
  -webkit-transform: rotate(105deg);
  -moz-transform: rotate(105deg);
  position: relative;
  top: -200px;
  left: 110px;
  z-index: 3;
`
const Stem = styled.div`
  width: 7px;
  height: 0px;
  border-bottom: 90px solid #ceaa98;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  transform: rotate(-10deg);
  position: relative;
  top: -284px;
  left: 88px;
  z-index: 2;
`

const Card = styled.div`
  width: 30%;
  height: 250px;
  background-color: white; 
  margin: 1em; 
`

const Wave = styled.div` {
  position: relative;
  height: 70px;
  width: 600px;
  background: #e0efe3;
}:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 340px;
    height: 80px;
    background-color: papayawhip;
    right: -5px;
    top: 40px;
}:after {
        content: "";
        display: block;
        position: absolute;
        border-radius: 100% 50%;
        width: 300px;
    height: 70px;
    background-color: #e0efe3;
    left: 0;
    top: 27px;
}
`


export default function Home() {
  return (
    <Wrapper>
      <div>
        <Lemon></Lemon>
        <Leaf></Leaf>
        <Stem></Stem>
      </div>
      <div>
      <Wave></Wave>
         <img alt="me" src={me}>

         </img>
      <Wave></Wave>
      </div>
      <Card>
      <h1>
           Hello! My name is Hana. 
         </h1>
         <p> I like to promgram software, I like to be curious and learn new things.</p>
      </Card>
    </Wrapper>
  )
}

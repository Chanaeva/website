import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width: 80vw;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LemonWrapper = styled.div`
  transform: rotate(251deg);
  -webkit-transform: rotate(251deg);
  -moz-transform: rotate(251deg);
  z-index: 1;
`

export const Lemon = styled.div`
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
export const Leaf = styled.div`
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
export const Stem = styled.div`
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

export const Wave = styled.div`
   {
    position: relative;
    height: 70px;
    width: 600px;
    background: #e0efe3;
  }
  :before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 340px;
    height: 80px;
    background-color: papayawhip;
    right: -5px;
    top: 40px;
  }
  :after {
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
export const SocialBtns = styled.a`
  text-decoration: none;
  background-color: #ceaa98;
  color: papayawhip;
  width: 150px;
  height: auto;
  padding-left: 2em;
  font-size: 25px;
  cursor: pointer;
`
export const ButtonWrapper = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: space-around;
`

export const ProfileCard = styled.div`
    height: 45vh;
    width: 90vw;
    border-radius: 90%; 
    background-color: papayawhip;
    padding: 3em;
    margin: 1em; 
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
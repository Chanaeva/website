import React from "react"
import {
  Lemon,
  Wrapper,
  Leaf,
  Stem,
  Wave,
  LemonWrapper,
  SocialBtns,
  ButtonWrapper,
  HeaderWrapper,
  ProfileCard
} from "../../src/styles/styledComps/styled"
import me from "../../static/IMG_0369.jpg"

export default function Home() {
  return (
    <Wrapper>
      <LemonWrapper>
        <Lemon></Lemon>
        <Leaf></Leaf>
        <Stem></Stem>
      </LemonWrapper>
      <HeaderWrapper>
          <ButtonWrapper>
            <SocialBtns target="_blank" href="https://github.com/Chanaeva">
              Github
            </SocialBtns>
            <SocialBtns
              target="_blank"
              href="https://www.linkedin.com/in/chanareynolds/"
            >
              Linkedin
            </SocialBtns>
          </ButtonWrapper>
      </HeaderWrapper>
      <ProfileCard>
        <img height="80%" alt="profile-pic" src={me}></img>
        <p>Things about me here??</p>
      </ProfileCard>
      <Wave></Wave>
      <LemonWrapper>
        <Lemon></Lemon>
        <Leaf></Leaf>
        <Stem></Stem>
      </LemonWrapper>
    </Wrapper>
  )
}

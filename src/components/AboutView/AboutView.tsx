/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import PlayButtonImage from 'src/images/AboutView_PlayButton.png';
import { styled } from '@mui/material/styles';
import Card from 'src/components/Card/Card';
import { AboutViewProps } from 'src/types';

const AboutView1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `86px 64px 102px 64px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const MainContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `426px`,
  width: `1311.5px`,
  margin: `0px`,
});

const Video: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `624px`,
  height: `416px`,
  left: `688px`,
  top: `10px`,
});

const VideoFrame: any = styled('div')({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  border: `1px solid rgba(0, 0, 0, 0.1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  width: `624px`,
  height: `416px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const PlayButton: any = styled('img')({
  height: `77.29px`,
  width: `68px`,
  position: `absolute`,
  left: `288px`,
  top: `169px`,
});

const Texts: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  left: `0px`,
  top: `0px`,
});

const WhatIsIvendpay: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `700`,
  fontSize: `40px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `60px`,
  textTransform: `none`,
  margin: `0px`,
});

const IvendpayIsASetOfCryp: any = styled('div')({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Poppins`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `32px`,
  textTransform: `none`,
  width: `412px`,
  margin: `19px 0px 0px 0px`,
});

const AboutCards: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `19px 0px 0px 0px`,
});

const Frame9: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Card1: any = styled(Card)(({ theme }: any) => ({
  width: `289px`,
  margin: `0px`,
}));

const Card2: any = styled(Card)(({ theme }: any) => ({
  width: `304px`,
  margin: `24px 0px 0px 0px`,
}));

const Card3: any = styled(Card)(({ theme }: any) => ({
  width: `304px`,
  margin: `24px 0px 0px 0px`,
}));

const Frame10: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 32px`,
});

const Card4: any = styled(Card)(({ theme }: any) => ({
  width: `304px`,
  margin: `0px`,
}));

const Card5: any = styled(Card)(({ theme }: any) => ({
  width: `304px`,
  margin: `24px 0px 0px 0px`,
}));

function AboutView(props: AboutViewProps): JSX.Element {
  return (
    <AboutView1 className={props.className}>
      <MainContent>
        <Video>
          <VideoFrame></VideoFrame>
          <PlayButton src={PlayButtonImage} loading="lazy" alt={'PlayButton'} />
        </Video>
        <Texts>
          <WhatIsIvendpay>{`What is ivendpay?`}</WhatIsIvendpay>
          <IvendpayIsASetOfCryp>
            {`Ivendpay - is a set of crypto payment solutions for any types of business.`}
          </IvendpayIsASetOfCryp>
          <AboutCards>
            <Frame9>
              <Card1 />
              <Card2 />
              <Card3 />
            </Frame9>
            <Frame10>
              <Card4 />
              <Card5 />
            </Frame10>
          </AboutCards>
        </Texts>
      </MainContent>
    </AboutView1>
  );
}

export default AboutView;

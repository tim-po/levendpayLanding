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
import LogoImage from 'src/images/InvestorCard_Logo.png';
import { styled } from '@mui/material/styles';
import { InvestorCardProps } from 'src/types';

const NameMMpro: any = styled('div')({
  backgroundColor: `rgba(247, 248, 249, 1)`,
  border: `1px solid rgba(229, 231, 235, 1)`,
  boxSizing: `border-box`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `96px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  overflow: `hidden`,
});

const Logo: any = styled('img')({
  height: `54px`,
  width: `235px`,
  objectFit: `cover`,
  position: `absolute`,
  left: `34px`,
  top: `21px`,
});

function InvestorCard(props: InvestorCardProps): JSX.Element {
  return (
    <NameMMpro className={props.className}>
      <Logo src={LogoImage} loading="lazy" alt={'Logo'} />
    </NameMMpro>
  );
}

export default InvestorCard;
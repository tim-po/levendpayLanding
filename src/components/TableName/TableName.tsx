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
import LogoImage from 'src/images/TableName_Logo.png';
import { styled } from '@mui/material/styles';
import { TableNameProps } from 'src/types';

const NameIvendpay: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px 0px 20px 0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Logo: any = styled('img')({
  height: `30px`,
  width: `30px`,
  objectFit: `contain`,
  margin: `0px`,
});

const Name: any = styled('div')({
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
  margin: `0px 0px 0px 8px`,
});

function TableName(props: TableNameProps): JSX.Element {
  return (
    <NameIvendpay className={props.className}>
      <Logo src={LogoImage} loading="lazy" alt={'Logo'} />
      <Name>{`Ivendpay`}</Name>
    </NameIvendpay>
  );
}

export default TableName;
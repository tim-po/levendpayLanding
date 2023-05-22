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
import { styled } from '@mui/material/styles';
import TableName from 'src/components/TableName/TableName';
import Checkbox1 from 'src/components/Checkbox1/Checkbox1';
import { CompetitorComparisonViewProps } from 'src/types';

const CompetitorComparison: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `90px 0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',
});

const Title: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 0px 0px 64px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const IvendpaySimilarBusin: any = styled('div')({
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

const IntegrationWithExcha: any = styled('div')({
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
  width: `529px`,
  margin: `10px 0px 0px 0px`,
});

const Table: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `410px`,
  width: `1440px`,
  margin: `36px 0px 0px 0px`,
});

const TableDecoration: any = styled('div')({
  opacity: `0.10000000149011612`,
  backgroundColor: `rgba(14, 28, 247, 1)`,
  width: `1152px`,
  height: `58px`,
  position: `absolute`,
  left: `288px`,
  top: `0px`,
});

const TableContent: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px 65px 0px 0px`,
  boxSizing: `border-box`,
  left: `0px`,
  top: `0px`,
});

const TetleColumn: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `410px`,
  margin: `0px`,
});

const TableTitleColumnDeco: any = styled('div')({
  backgroundColor: `rgba(14, 28, 247, 1)`,
  height: `58px`,
  width: `288px`,
  margin: `0px`,
});

const BinancePayIntegratio: any = styled('div')({
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
  margin: `15px 0px 0px 0px`,
});

const OkxPayIntegration: any = styled('div')({
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
  margin: `15px 0px 0px 0px`,
});

const GatePayIntegration: any = styled('div')({
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
  margin: `15px 0px 0px 0px`,
});

const OwnPayIntegration: any = styled('div')({
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
  margin: `15px 0px 0px 0px`,
});

const MobilePayIntegration: any = styled('div')({
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
  margin: `15px 0px 0px 0px`,
});

const ECommerceIntegration: any = styled('div')({
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
  margin: `15px 0px 0px 0px`,
});

const Atm: any = styled('div')({
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
  margin: `15px 0px 0px 0px`,
});

const IvendPayColumn: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `11px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 53px`,
});

const TableName1: any = styled(TableName)(({ theme }: any) => ({
  margin: `0px`,
}));

const Checkbox2: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox3: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox4: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox5: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox6: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox7: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox8: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const CoinPaymentsColumn: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `11px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 53px`,
});

const TableName2: any = styled(TableName)(({ theme }: any) => ({
  margin: `0px`,
}));

const Checkbox9: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox10: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox11: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox12: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox13: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox14: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox15: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const CoinPaymentsColumn1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `11px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 53px`,
});

const TableName3: any = styled(TableName)(({ theme }: any) => ({
  margin: `0px`,
}));

const Checkbox16: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox17: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox18: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox19: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox20: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox21: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox22: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const CoinPaymentsColumn2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `11px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 53px`,
});

const TableName4: any = styled(TableName)(({ theme }: any) => ({
  margin: `0px`,
}));

const Checkbox23: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox24: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox25: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox26: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox27: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox28: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox29: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const CoinPaymentsColumn3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `11px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 53px`,
});

const TableName5: any = styled(TableName)(({ theme }: any) => ({
  margin: `0px`,
}));

const Checkbox30: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox31: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox32: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox33: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox34: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox35: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox36: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const CoinPaymentsColumn4: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `11px 0px 0px 0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 53px`,
});

const TableName6: any = styled(TableName)(({ theme }: any) => ({
  margin: `0px`,
}));

const Checkbox37: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox38: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox39: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox40: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox41: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox42: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

const Checkbox43: any = styled(Checkbox1)(({ theme }: any) => ({
  height: `32px`,
  width: `32px`,
  margin: `15px 0px 0px 0px`,
}));

function CompetitorComparisonView(
  props: CompetitorComparisonViewProps
): JSX.Element {
  return (
    <CompetitorComparison className={props.className}>
      <Title>
        <IvendpaySimilarBusin>
          {`Ivendpay similar business`}
        </IvendpaySimilarBusin>
        <IntegrationWithExcha>
          {`Integration with exchanges gives the most smooth and cost efficient payment methods for businesses and its clients.`}
        </IntegrationWithExcha>
      </Title>
      <Table>
        <TableDecoration></TableDecoration>
        <TableContent>
          <TetleColumn>
            <TableTitleColumnDeco></TableTitleColumnDeco>
            <BinancePayIntegratio>
              {`Binance Pay integration`}
            </BinancePayIntegratio>
            <OkxPayIntegration>{`OKX Pay integration`}</OkxPayIntegration>
            <GatePayIntegration>{`Gate Pay integration`}</GatePayIntegration>
            <OwnPayIntegration>{`Own Pay integration`}</OwnPayIntegration>
            <MobilePayIntegration>
              {`Mobile Pay integration`}
            </MobilePayIntegration>
            <ECommerceIntegration>
              {`E-Commerce integration`}
            </ECommerceIntegration>
            <Atm>{`ATM`}</Atm>
          </TetleColumn>
          <IvendPayColumn>
            <TableName1 />
            <Checkbox2 />
            <Checkbox3 />
            <Checkbox4 />
            <Checkbox5 />
            <Checkbox6 />
            <Checkbox7 />
            <Checkbox8 />
          </IvendPayColumn>
          <CoinPaymentsColumn>
            <TableName2 />
            <Checkbox9 />
            <Checkbox10 />
            <Checkbox11 />
            <Checkbox12 />
            <Checkbox13 />
            <Checkbox14 />
            <Checkbox15 />
          </CoinPaymentsColumn>
          <CoinPaymentsColumn1>
            <TableName3 />
            <Checkbox16 />
            <Checkbox17 />
            <Checkbox18 />
            <Checkbox19 />
            <Checkbox20 />
            <Checkbox21 />
            <Checkbox22 />
          </CoinPaymentsColumn1>
          <CoinPaymentsColumn2>
            <TableName4 />
            <Checkbox23 />
            <Checkbox24 />
            <Checkbox25 />
            <Checkbox26 />
            <Checkbox27 />
            <Checkbox28 />
            <Checkbox29 />
          </CoinPaymentsColumn2>
          <CoinPaymentsColumn3>
            <TableName5 />
            <Checkbox30 />
            <Checkbox31 />
            <Checkbox32 />
            <Checkbox33 />
            <Checkbox34 />
            <Checkbox35 />
            <Checkbox36 />
          </CoinPaymentsColumn3>
          <CoinPaymentsColumn4>
            <TableName6 />
            <Checkbox37 />
            <Checkbox38 />
            <Checkbox39 />
            <Checkbox40 />
            <Checkbox41 />
            <Checkbox42 />
            <Checkbox43 />
          </CoinPaymentsColumn4>
        </TableContent>
      </Table>
    </CompetitorComparison>
  );
}

export default CompetitorComparisonView;

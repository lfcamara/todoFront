import styled from 'styled-components'
import { Card } from 'antd';
import { colors } from '../../../colors'

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vw;
  background: ${colors.blue};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-end: 2vw;
`

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-block: 1vw;
  margin-inline-start: 1vw;
`;

export const CardComponent = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 50vw;
  background-color: '#00000';
  border: solid 0.5px ${ colors.gray };
`
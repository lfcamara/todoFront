import styled from 'styled-components'
import { Card } from 'antd'
import { Typography } from 'antd';
import { colors } from '../../../colors';

const { Paragraph  } = Typography;
export const TaskComponent = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 1vw;
  border: solid 0.5px ${ colors.gray };
`;
export const Body = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1vw;
  justify-content: space-between;
`;

export const DivRight = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Description  = styled(Paragraph )``
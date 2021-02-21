import styled from 'styled-components'
import { Card } from 'antd'

export const TaskComponent = styled(Card)`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(240deg, ${ ({color}) => color.primary }, ${ ({color}) => color.secundary });
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
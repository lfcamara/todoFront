import styled from 'styled-components'
import { colors } from '../../../colors'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: ${ colors.gray }
`;

export const HeaderRight = styled.div`
  justify-content: flex-end;
`;
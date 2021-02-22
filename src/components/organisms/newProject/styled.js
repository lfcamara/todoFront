import styled from 'styled-components'
import { Card } from 'antd';
import { colors } from '../../../colors'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-inline-start: 2vw;
`

export const Container = styled(Card)`
  width: 40vw;
  padding: 2vw;
  margin-block: 2vw;
  margin-inline: 2vw;
  border: 1px solid ${ colors.gray };
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1vw;
`
import { Input } from 'antd'
import styled from 'styled-components'
import { colors } from '../../colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vw;
`
export const Password = styled(Input.Password)`
display: flex;
    flex-direction: row;
    align-items: center;
    input[type="password" i] {
      display: flex;
      border-radius: none;
      outline: none;
      outline-style: none;
      border: none;
      border-bottom: solid ${ colors.gray } 1px;
      padding: 1vw;
      width: 30vw;
      margin-block-start: 2vw;
      margin-block-end: 2vw;
      &:focus, &:focus{
        outline: none !important;
      }
      &:focus, &:active, &:hover {
        box-shadow: none;
        border-bottom: solid ${ colors.gray } 1px;
        border-color: ${ colors.gray };
      }
      &:[type="password" i] {
        box-shadow: none;
        border: nonw;
      }
    }

    input[type="text" i] {
      display: flex;
      border-radius: none;
      outline: none;
      outline-style: none;
      border: none;
      border-bottom: solid ${ colors.gray } 1px;
      padding: 1vw;
      width: 30vw;
      margin-block-start: 2vw;
      margin-block-end: 2vw;
      &:focus, &:focus{
        outline: none !important;
      }
      &:focus, &:active, &:hover {
        box-shadow: none;
        border-bottom: solid ${ colors.gray } 1px;
        border-color: ${ colors.gray };
      }
      &:[type="password" i] {
        box-shadow: none;
        border: nonw;
      }
    }
`
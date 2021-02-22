import styled from 'styled-components'
import { Input } from 'antd';
import { colors } from '../../../colors'

export const InputComponent = styled(Input)`
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
`
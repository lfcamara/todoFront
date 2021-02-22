import styled from 'styled-components'
import { Button } from 'antd';
import { colors } from '../../../colors';

export const ButtonComponent = styled(Button)`
    background-color: ${({color}) => color ? color : colors.blue };
    color: ${ colors.white };
    cursor: pointer;
    width: 10vw;
    height: 3.5vw;
    border:none;
    &:hover {
        background-color: ${ ({color})=> color ? color : colors.blue };    
        opacity: 0.8;
        color: ${ colors.white };
    }
    &:focus {
        background-color: ${ ({color}) => color ? color : colors.blue };    
        opacity: 0.8;
        color: ${ colors.white } ;    
    }
    &:click {
        color: ${ colors.white };  
    }
`;


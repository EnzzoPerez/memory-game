import React from 'react'
import styled from 'styled-components'
import { Icon, Label, Menu, Button } from 'semantic-ui-react'

const Head = styled.header `
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
`;

const Title = styled.div`
    font-size: 25px;
    padding: 10px;
    color: white;
`;

const BtnReinicio = styled.div `
    position: absolute;
    left:12px;
    top: 58px;
`;

const Izq = styled.div`
    display: flex;
    align-items: center;
`

export default class Header extends React.Component{
    constructor(){
        super()
        this.handleReset= this.handleReset.bind(this)
    }
    handleReset(){
        this.props.reset()
    }
    render(){
        return(
            <Head>
                <div>
                    <Title>
                        Jueguito de Memoria
                    </Title>
                    <BtnReinicio>
                        <Button onClick={this.handleReset} color='blue'>Reiniciar</Button>
                    </BtnReinicio>
                </div>
                
                <Izq>
                    <Menu compact>
                        <Menu.Item as='a'>
                            <Icon name='crosshairs' /> Intentos: 
                            <Label color='red' size='small'>{this.props.fallas}</Label>
                        </Menu.Item>
                    </Menu>
                </Izq>
            </Head>
        );
    }
}
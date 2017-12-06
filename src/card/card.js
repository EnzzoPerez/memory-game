import React from 'react'
import styled from 'styled-components'
import FlipCard from '../lib/main'

const Oculto = styled.div`
    width: 125px;
    height: 125px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Carta = styled.div`
    width: 125px;
    height: 125px;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default class Card extends React.Component{
    render(){
        return(
            <div onClick={this.props.seleccionarCarta}>
                <FlipCard
                    flipped={this.props.siendoComparada || this.props.adivinado}
                    disabled={true}>
                    <Oculto>
                    </Oculto>
                    <Carta>
                        <i className={`fa ${this.props.icon} fa-4x`}></i>
                    </Carta>
                </FlipCard>
            </div>
        )
    }
}
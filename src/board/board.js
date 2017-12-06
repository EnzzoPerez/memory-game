import React from 'react'
import styled from 'styled-components'

import Card from '../card/card'


const Tablero = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    height: 700px;
    width: 700px;
`

export default class Board extends React.Component{
    
    render(){
        return(
            <Tablero>
                { this.props.baraja.map((carta, index) => {
                        const siendoComparada = this.props.pareja.indexOf(carta) > -1;
                        return <Card 
                            key={index} 
                            icon={carta.icon} 
                            siendoComparada={siendoComparada}
                            seleccionarCarta={()=>this.props.seleccionarCarta(carta)}
                            adivinado={carta.adivinado}/>
                    })
                }
            </Tablero>
        );
    }
}
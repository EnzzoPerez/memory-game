import React from 'react'
import styled from 'styled-components'

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
`;

const BtnReinicio = styled.div `
    position: absolute;
    left:12px;
    top: 58px;
`;

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
                <Title>
                    Jueguito de Memoria
                </Title>
                <BtnReinicio>
                    <button onClick={this.handleReset} className="reiniciar">Reiniciar</button>
                </BtnReinicio>
                <div className="intentos">
                    Intentos: {this.props.fallas}
                </div>
            </Head>
        );
    }
}
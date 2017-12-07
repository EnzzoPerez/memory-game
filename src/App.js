import React, { Component } from 'react';
import './App.css';

import Header from './header/header'
import Board from './board/board'
import buildBaraja from './utils/buildBaraja'

const getInitialState = () => {
  const baraja = buildBaraja()
  return baraja
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      baraja: getInitialState(),
      parejaSelect: [],
      comparing: false,
      fallas: 0
    }
    this.seleccionarCarta = this.seleccionarCarta.bind(this)
    this.reiniciar = this.reiniciar.bind(this)
  }

  render() {
    return (
      <div className="App">
        <Header fallas={this.state.fallas} reset={this.reiniciar}/>
        <Board 
          baraja={this.state.baraja}
          pareja={this.state.parejaSelect}
          seleccionarCarta={this.seleccionarCarta} />
      </div>
    );
  }

  seleccionarCarta(carta){
    
    if(this.state.comparing || 
      this.state.parejaSelect.indexOf(carta) > -1 ||
      carta.adivinado){
        return
    }
    //console.log('datoscarta:', this.state)
    const parejaSelect = [...this.state.parejaSelect, carta]
    this.setState({
      parejaSelect: parejaSelect
    })

    if(parejaSelect.length === 2){
      this.comparar(parejaSelect)
    }

  }

  comparar(pareja){
    this.setState({ comparing: true })
    setTimeout(()=>{
      const [primeraCarta, segundaCarta] = pareja
      let baraja = this.state.baraja

      if (primeraCarta.icon === segundaCarta.icon){
        baraja = baraja.map((carta)=> {
          if(carta.icon !== primeraCarta.icon){
            return carta
          }
          return {...carta, adivinado: true}
        })
      }
      else{
        this.setState((countFalla)=>({
          fallas: countFalla.fallas + 1,
          comparing:true
        }))
      }
      this.verificarVictoria(baraja)
      this.setState({
        baraja,
        parejaSelect: [],
        comparing:false
      })

    }, 1000)
  }

  verificarVictoria(baraja){
    if( baraja.filter((carta)=> !carta.adivinado).length === 0){
      alert(`Ganaste en ${this.state.fallas} intentos.
      Para jugar de nuevo pulsa el boton Reiniciar :).`)
      baraja.forEach(element => {
        element.adivinado = false
      });
      this.reiniciar()
    }
  }

  reiniciar(){
    this.setState({
      baraja: getInitialState(),
      parejaSelect: [],
      comparing: false,
      fallas: 0
    });
  }

}

export default App;

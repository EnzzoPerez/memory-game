import shuffle from 'lodash.shuffle'
import FontAwesomeClasses from './font'

const NUMERO_CARTAS = 20

export default () => {
    const fonts = FontAwesomeClasses()
    let cartas = []

    while(cartas.length < NUMERO_CARTAS){
        const index = Math.floor(Math.random() * fonts.length)
        const carta = {
            icon: fonts.splice(index, 1)[0],
            adivinado: false
        }
        
        cartas.push(carta);
        cartas.push({...carta});
    }

    return shuffle(cartas);
}
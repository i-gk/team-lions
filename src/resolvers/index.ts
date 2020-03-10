import player from './player';

const greeting = {
    Query: {
        greeting: (): String => {
            return 'Hola! 🙋🏻‍♂️'
        }
    }
}

export default [
    greeting,
    player
]
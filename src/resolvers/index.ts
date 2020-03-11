import player from './player';
import team from './team';

const greeting = {
    Query: {
        greeting: (): String => {
            return 'Hola! 🙋🏻‍♂️'
        }
    }
}

export default [
    greeting,
    player,
    team
]
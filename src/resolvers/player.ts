import { Player } from '../models'

export default {
    Query: {
        players: (root, args, context, info) => {
            return Player.find({});
        }
    }
}
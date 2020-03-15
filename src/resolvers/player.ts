import { Player } from "../models";

export default {
  Query: {
    players: (root, args, context, info) => {
      return Player.find({});
    },

    player: (root, args, context, info) => {
      return Player.findOne({ id: args.id });
    }
  },

  Mutation: {
    addPlayer: (root, args, context, info) => {}
  }
};

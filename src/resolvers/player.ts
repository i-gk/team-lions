import { Player, Team } from "../models";
import { PlayerService } from "../services";

export default {
  Query: {
    players: (root, args, context, info) => {
      return Player.find({});
    },

    player: (root, { playerId }, context, info) => {
      console.log(playerId);
      return Player.findOne({ playerId });
    }
  },

  Mutation: {
    addPlayer: async (root, { teamId, ...playerInfo }, context, info) => {
      return PlayerService.addNewPlayer(teamId, playerInfo);
    },

    updatePlayer: async (root, { playerId, ...playerInfo }, context, info) => {
      return PlayerService.updatePlayer(playerId, playerInfo);
    },

    addNewTeamForPlayer: async (root, { args }, context, info) => {}
  }
};

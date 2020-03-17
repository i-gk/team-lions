import { Player, Team } from "../models";

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
    addPlayer: async (root, args, context, info) => {
      let team = await Team.findOne({ teamId: args.teamId }, {_id: 0, teamId: 1, name: 1});

      let { ["teamId"]: _, ..._args} = args;
      let playerId = args.number.concat("_").concat(args.firstName).concat("_").concat(args.lastName).toLowerCase();

      let constructedTeamData = {
        playerId,
        ..._args,
        teams: [team]
      }

      console.log(constructedTeamData);
      return Player.create(constructedTeamData);
    },

    updatePlayer: async (root, args, context, info) => {
      let { ["playerId"]: playerId, ...newData}: any = args;
      
      // console.log(newData);
      if (Object.keys(newData).length > 0) {
        return Player.findOneAndUpdate({playerId}, newData, {new: true});
      }

      console.error('No new records received for an update');
    },

    addNewTeamForPlayer: async (root, args, context, info) => {}
  }
};

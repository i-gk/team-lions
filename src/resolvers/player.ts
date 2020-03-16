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
      let id = args.number.concat("_").concat(args.firstName).concat("_").concat(args.lastName).toLowerCase();

      let constructedTeamData = {
        id,
        ..._args,
        teams: [team]
      }

      // console.log(constructedTeamData);
      return Player.create(constructedTeamData);
    }
  }
};

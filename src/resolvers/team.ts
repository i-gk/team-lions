import { Team, Player } from '../models';

export default {
    Mutation: {
        addNewTeam: async (root, args, context, info) => {
            console.log(args);
            let captain = await Player.findOne({playerid: args.captainId}, {firstName: 1, lasnName: 1, playerid: 1});
            let viceCaptain = await Player.findOne({playerid: args.viceCaptainId}, {firstName: 1, lasnName: 1, playerid: 1});

            let { ['captainId']: _, ['viceCaptainId']: __, ..._args } = args;
            let constructedTeamData = {
                teamId: Math.ceil(Math.random() * 100) + "_" + args.name, 
                ..._args,
                captain,
                viceCaptain
            }
            console.log(constructedTeamData);
            return Team.create(constructedTeamData);
        }
    }
}
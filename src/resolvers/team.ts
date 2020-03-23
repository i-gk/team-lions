import { TeamService } from "../services";

export default {
  Query: {
    team: async (root, { teamId }, context, info) => {
      return TeamService.getTeam(teamId);
    }
  },

  Mutation: {
    addNewTeam: async (
      root,
      { captainId, viceCaptainId, ...teamInfo },
      context,
      info
    ) => {
      return TeamService.addNewTeam(captainId, viceCaptainId, teamInfo);
    },

    updateTeam: async (root, { teamId, ...teamInfo }, context, info) => {
      return TeamService.updateTeam(teamId, teamInfo);
    }
  }
};

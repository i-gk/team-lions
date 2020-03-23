import { Team, Player } from "../models";
import { PlayerService } from "../services";
import { InvalidTeamNameError } from "../exceptions";

class TeamService {
  private readonly CONCAT_ELEMENT = "_";

  /**
   * Retrieves all information for a given team-id
   *
   * @param teamId unique id for the team
   */
  public async getTeam(teamId: string) {
    return Team.findOne({ teamId });
  }

  /**
   * Adds new team
   *
   * @param captainId Required. Will query player db to get additional details required for the team document.
   * @param viceCaptainId Required. Will query player db to get additional details required for the team document.
   * @param teamInfo other details to fill in for the team
   */
  public async addNewTeam(
    captainId: string,
    viceCaptainId: string,
    teamInfo: any
  ) {
    let captain, viceCaptain;

    try {
      captain = await PlayerService.getPlayer(captainId, {
        _id: 0,
        firstName: 1,
        lastName: 1,
        playerId: 1
      });
      viceCaptain = await PlayerService.getPlayer(viceCaptainId, {
        _id: 0,
        firstName: 1,
        lastName: 1,
        playerId: 1
      });

      let constructedTeamData = {
        teamId: this.generateTeamId(teamInfo.name),
        captain,
        viceCaptain,
        teamInfo
      };

      return Team.create(constructedTeamData);
    } catch (error) {
      console.error(error.message);
      return Promise.reject(error.message);
    }
  }

  /**
   * Finds the team by Id and update the data
   *
   * @param teamId team id to update records
   * @param param fields and values with data to update in the document
   */
  public async updateTeam(
    teamId: string,
    { captainId, viceCaptainId, websites, ...teamInfo }: any
  ) {
    let constructedTeamData = teamInfo;
    let newSites = websites || [];

    try {
      if (captainId) {
        constructedTeamData.captain = await PlayerService.getPlayer(captainId, {
          _id: 0,
          firstName: 1,
          lastName: 1,
          playerId: 1
        });
      }

      if (viceCaptainId) {
        constructedTeamData.viceCaptain = await PlayerService.getPlayer(
          viceCaptainId,
          {
            _id: 0,
            firstName: 1,
            lastName: 1,
            playerId: 1
          }
        );
      }

      return Team.findOneAndUpdate(
        { teamId },
        {
          ...constructedTeamData,
          // https://docs.mongodb.com/manual/reference/operator/update/push/#example-push-each
          $push: { websites: { $each: newSites } }
        },
        { new: true }
      );
    } catch (error) {
      console.error(error.message);
      return Promise.reject(error.message);
    }
  }

  private generateTeamId(name: string): string {
    if (name && name.trim().length >= 2) {
      return Math.ceil(Math.random() * 100) + this.CONCAT_ELEMENT + name;
    }

    throw new InvalidTeamNameError(
      `Team Name validation failed. Must have at least two characters`
    );
  }
}

export default new TeamService();

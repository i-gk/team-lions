import { Player, Team } from "../models";

class PlayerService {
  private readonly NUMBER_CONCAT_ELEMENT = "_";

  /**
   * Add new player for a given team and returns the player infromation
   * An error will be thrown if:
   *    1. provided team id is invalid
   *    2. provided player details are invalid to generate a new player id
   *
   * @param teamId Team Id, new player is assigning to
   * @param playerInfo All available player informatio
   */
  public async addNewPlayer(teamId: string, playerInfo: any) {
    let team,
      newPlayerId,
      newPlayerData = null;

    try {
      team = await this.getTeamInfo(teamId);
      newPlayerId = this.createNewPlayerId({
        playerId: playerInfo.playerId,
        firstName: playerInfo.firstName,
        lastName: playerInfo.lastName
      });

      newPlayerData = {
        newPlayerId,
        playerInfo,
        teams: [team]
      };

      console.debug(`New player data: ${JSON.stringify(newPlayerData)}`);
      return Player.create(newPlayerData);
    } catch (error) {
      console.error(error.message);
      return Promise.reject(error.message);
    }
  }

  /**
   * Update player information and returns the updated record with latest data
   *
   * @param playerId player id to collect player record
   * @param playerInfo new information to update
   */
  public updatePlayer(playerId: string, playerInfo: any) {
    if (Object.keys(playerInfo).length > 0) {
      return Player.findOneAndUpdate({ playerId }, playerInfo, { new: true });
    }

    console.log("No new records received for an update");
  }

  /**
   * Fetched team info by teamId and update the information on the player
   *
   * @param playerId player id that should be updating
   * @param teamId new team id
   */
  public async addNewTeamForPlayer(playerId: string, teamId: string) {
    try {
      let team = await this.getTeamInfo(teamId);
      return Player.findOneAndUpdate(
        { playerId },
        { $push: { teams: team } },
        { new: true, upsert: true }
      );
    } catch (err) {
      console.error(err.message);
      return Promise.reject(err.message);
    }
  }

  // TODO this should be served from teams service
  private async getTeamInfo(teamId: string) {
    let team = await Team.findOne({ teamId }, { _id: 0, teamId: 1, name: 1 });
    console.debug(`getTeamInfo: Found team: ${team}`);

    if (team !== null) {
      return team;
    }

    throw new InvalidTeamError(`Cannot find record for teamId: ${teamId}`);
  }

  private createNewPlayerId({ playerId, firstName, lastName }): string {
    if (
      Number.isInteger(Number.parseInt(playerId)) &&
      firstName &&
      firstName.length > 0 &&
      lastName &&
      lastName.length > 0
    ) {
      return playerId
        .concat(this.NUMBER_CONCAT_ELEMENT)
        .concat(firstName)
        .concat(this.NUMBER_CONCAT_ELEMENT)
        .concat(lastName);
    }

    throw new InvalidPlayerDataError(
      `Validation for playerId: ${playerId}, firstname: ${firstName} and lastname: ${lastName} failed`
    );
  }
}

// TODO these should be in separate exception classes
// ---- Error Classes ---
class InvalidPlayerDataError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class InvalidTeamError extends Error {
  constructor(msg) {
    super(msg);
  }
}

export default new PlayerService();

import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    players: [Player]!
    player(playerId: String!): Player!
  }

  extend type Mutation {
    addPlayer(
      number: String!
      firstName: String!
      lastName: String!
      phone: String!
      battingStyle: String!
      bowlingStyle: String!
      playingRole: String!
      birthday: String!
      teamId: String!
    ): Player

    updatePlayer(
      playerId: String!
      firstName: String
      lastName: String
      phone: String
      battingStyle: String
      bowlingStyle: String
      playingRole: String
      birthday: String
    ): Player

    addNewTeamForPlayer(playerId: String!, teamId: String!): Player
  }

  type Player {
    number: String
    firstName: String
    lastName: String
    playerId: String
    phone: String
    battingStyle: String
    bowlingStyle: String
    playingRole: String
    birthday: String
    teams: [TeamInfo!]
  }

  type TeamInfo {
    teamId: String
    name: String
  }
`;

// export default playerDef;

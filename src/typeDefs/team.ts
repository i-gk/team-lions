import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    team(teamId: String!): Team
  }

  extend type Mutation {
    addNewTeam(
      name: String!
      startYear: String!
      description: String
      websites: [String]
      captainId: String!
      viceCaptainId: String
    ): Team

    updateTeam(
      teamId: String!
      name: String
      startYear: String
      description: String
      websites: [String]
      captainId: String
      viceCaptainId: String
    ): Team
  }

  type Team {
    teamId: String
    name: String
    startYear: String
    description: String
    websites: [String]
    captain: capViceCap
    viceCaptain: capViceCap
  }

  type capViceCap {
    playerid: String!
    firstName: String
    lasnName: Int
  }
`;

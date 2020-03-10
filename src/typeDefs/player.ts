import { gql } from 'apollo-server-express';

export default gql `
    extend type Query {
        players: [Player]!,
        player(id: String!): Player
    }

    type Player {
        number: String,
        firstName: String,
        lasnName: String,
        id: String,
        phone: String,
        battingStyle: String,
        bowlingStyle: String,
        playingRole: String,
        birthday: String,
        teams: [TeamInfo!]
    }

    type TeamInfo {
        id: String,
        name: String
    }
`;

// export default playerDef;
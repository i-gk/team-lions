import { gql } from 'apollo-server-express';
import player from './player';
import team from './team';

const root = gql `
    type Query {
        greeting: String
    }

    type Mutation {
        _: String
    }

    type Subscription {
        _: String
    }
`;

export default [
    root,
    player,
    team
]
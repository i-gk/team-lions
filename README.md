# Intro

This is a pet project to collect the information on MKE Team Lions 2020 season performance.

## Highlevel Features

Create an api server to provide:

```
1. Manage player records

    (a) Insert player details ✅

    (b) Retrieve player details ✅

    (c) Update player details ✅
`
2. Manage team info

    (a) Insert team information ✅

    (b) Retrieve team details ✅

    (c) Update team details ✅

3. Track matches

    (a) Insert match scores ❌

    (b) Retrieve match information ❌

4. Stats

    (a) Player Stats ❌

    (b) Batsman Stats ❌

    (c) Bowler Stats ❌
```

## Tech Stack

- The server will be `Apollo-Express` powered

- The server API layer will be `Graphql`

- `MongoDB` will do the data storage

## Dev Env setup

- clone and run npm install from root

### Setting mongodb

- create following environment variables for mongodb connection

  - `MONGO_USERNAME`
  - `MONGO_PSWD`
  - `MONGO_IP`
  - `MONGO_PORT`
  - `MONGO_DB_NAME`

- run `npm run dev` from root to launch watch server

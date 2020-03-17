import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  playerId: String,
  number: String,
  firstName: String,
  lasnName: String,
  lastName: String,
  phone: String,
  battingStyle: String,
  bowlingStyle: String,
  playingRole: String,
  birthday: String,
  teams: [
    {
      teamId: String,
      name: String
    }
  ]
});

export default mongoose.model("players", playerSchema);

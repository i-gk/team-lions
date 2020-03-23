import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamId: { type: String, unique: true },
  name: { type: String, unique: true },
  startYear: String,
  description: String,
  websites: [String],
  captain: {
    playerId: String,
    firstName: String,
    lastName: String
  },
  viceCaptain: {
    playerId: String,
    firstName: String,
    lastName: String
  }
});

export default mongoose.model("teams", teamSchema);

import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  teamId: String,
  name: String,
  startYear: String,
  description: String,
  websites: [String],
  captain: {
    playerid: String,
    firstName: String,
    lasnName: String
  },
  viceCaptain: {
    playerid: String,
    firstName: String,
    lasnName: String
  }
});

export default mongoose.model("teams", teamSchema);

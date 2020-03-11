import mongoose from 'mongoose';

const playerSchema  = new mongoose.Schema({
    number: String,
    firstName: String,
    lasnName: String,
    playerid: String,
    phone: String,
    battingStyle: String,
    bowlingStyle: String,
    playingRole: String,
    birthday: String,
    teams: [{
      id: String,
      name: String
    }]
});

export default mongoose.model('players', playerSchema);
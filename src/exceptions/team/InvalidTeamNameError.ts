export default class InvalidTeamNameError extends Error {
  constructor(message: string) {
    super(message);
  }
}

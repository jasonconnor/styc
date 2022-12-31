import { gameReducer } from "./game";
import { userProfileReducer } from "./profile";
import { leaderboardReducer } from './leaderboard';

const rootReducer = {
  userProfile: userProfileReducer,
  leaderboard: leaderboardReducer,
  game: gameReducer,
};

export default rootReducer;
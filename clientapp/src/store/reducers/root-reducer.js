import { userProfileReducer } from "./profile";
import { leaderboardReducer } from './leaderboard';

const rootReducer = {
  userProfile: userProfileReducer,
  leaderboard: leaderboardReducer,
};

export default rootReducer;
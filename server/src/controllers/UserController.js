import User from '../models/UserModel.js';

export default class UserController {
  static getCurrentUser = async (req, res) => {
    let user = null;

    try {
      user = await User.findOne({_id: req.token.sub});
    } catch(error) {
      console.log(error);
      return res.status(500).json({
        message: 'Failed to get current user.',
        error: error.message
      });
    }

    return res.status(200).json(user);
  }
}
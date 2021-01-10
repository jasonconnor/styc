import User from '../models/UserModel.js';

export default class UserController {
  static getCurrentUser = async (req, res) => {
    let user = null;

    try {
      user = await User.findOne({id: req.user.sub});
      return res.status(200).json(user);
    } catch(error) {
      console.log(error);
      return res.status(500).json({
        message: 'Failed to get current user.',
        error: error.message
      });
    }
  }
}
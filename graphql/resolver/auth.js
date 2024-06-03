const bcrypt = require("bcryptjs");
const User = require("../../models/user"); // database collection for users
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User exist already");
      }

      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      console.log('name', args.userInput.name);
      const user = new User({
        name: args.userInput.name,
        email: args.userInput.email,
        mobile: args.userInput.mobile,
        password: hashedPassword,
      });
      console.log('user', user);
      const result = await user.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },

  login : async ({email, password}) => {
    const user = await User.findOne({email : email});
    if(!user){
      throw new Error('User does not exist');
    }

      const isEqual = await bcrypt.compare(password, user.password);
      if(!isEqual){
        throw new Error('Password is incorrect');
      }
      const token = jwt.sign({userId: user.id, email: user.email}, 'somesupersecretkey', {
        expiresIn: '1h'
      });
      return { userId: user.id, token: token, tokenExpiration: 1 };

}
};
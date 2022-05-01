import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const userInfo = await User.find({
        userEmail: req.body.userEmail,
      }).exec();

      res.status(200).json(userInfo);
      break;

    default:
      break;
  }
};

export default handler;

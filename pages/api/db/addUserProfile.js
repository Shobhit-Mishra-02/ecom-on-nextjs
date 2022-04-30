import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      const user = await User.findOneAndUpdate(
        {
          userEmail: req.body.userEmail,
        },
        {
          $set: {
            ...req.body,
          },
        },
        {
          upsert: true,
        }
      );
      res.status(200).json(user);
      break;

    default:
      break;
  }
};

export default handler;

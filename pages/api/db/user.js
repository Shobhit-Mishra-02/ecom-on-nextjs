import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/User";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  req.status(200).json({ message: "This is handle the users" });
};

export default handler;

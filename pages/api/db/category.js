import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/Category";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  res.status(200).json({ message: "this will handler the categories" });
};

export default handler;

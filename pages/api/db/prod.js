import dbConnect from "../../../lib/dbConnect";
import Prod from "../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  res.status(200).json({ messsage: "we need to work on this" });
};

export default handler;

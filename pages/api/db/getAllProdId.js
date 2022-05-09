import dbConnect from "../../../lib/dbConnect";
import Prod from "../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      const data = await Prod.find({}, { _id: 1 });
      res.status(200).json(data);
      break;

    default:
      break;
  }
};

export default handler;

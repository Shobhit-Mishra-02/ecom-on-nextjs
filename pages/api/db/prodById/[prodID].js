import dbConnect from "../../../../lib/dbConnect";
import Prod from "../../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;
  const { prodID } = req.query;
  await dbConnect();

  switch (method) {
    case "GET":
      const data = await Prod.findById(prodID, { __v: 0 }).exec();
      res.status(200).json(data);
      break;
  }
};

export default handler;

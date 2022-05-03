import dbConnect from "../../../lib/dbConnect";
import Prod from "../../../models/Prod";

//Route: /api/db/prod
//This will give all the products in the db.

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      const data = await Prod.find({}, { __v: 0 }).exec();
      res.status(200).json(data);
      break;
  }
};

export default handler;

import dbConnect from "../../../../lib/dbConnect";
import Prod from "../../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;
  const { categoryID } = req.query;
  await dbConnect();
  switch (method) {
    case "GET":
      const data = await Prod.find({ category: categoryID }).exec();
      res.status(200).json(data);
      break;
  }
};

export default handler;

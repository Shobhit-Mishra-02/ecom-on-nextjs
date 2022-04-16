import dbConnect from "../../../../lib/dbConnect";
import Prod from "../../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;
  const { prodID } = req.query;
  await dbConnect();

  switch (method) {
    case "GET":
      const deleteProd = await Prod.deleteOne({ _id: prodID }).exec();
      res.status(200).json(deleteProd);
      break;
  }
};

export default handler;

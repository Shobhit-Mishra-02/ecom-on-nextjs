import dbConnect from "../../../../lib/dbConnect";
import Prod from "../../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;
  const { prodID } = req.query;
  await dbConnect();
  switch (method) {
    case "POST":
      const updateProd = await Prod.updateOne(
        { _id: prodID },
        {
          $set: { ...req.body },
        }
      );
      res.status(200).json(updateProd);
      break;
  }
};

export default handler;

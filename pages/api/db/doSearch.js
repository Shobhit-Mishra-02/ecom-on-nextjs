import dbConnect from "../../../lib/dbConnect";
import Prod from "../../../models/Prod";

//Route: /api/db/doSearch
//This will do a text search basically it will do a search throughout the whole product db.

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const data = await Prod.find({
        productName: { $regex: req.body.search, $options: "i" },
      });
      res.status(200).json(data);
      break;
  }
};

export default handler;

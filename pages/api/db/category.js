import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/Category";

//Route: /api/db/categroy
//This will give all the categories in the db.

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "GET":
      const data = await Category.find({}).exec();
      res.status(200).json(data);
      break;
  }
};

export default handler;

import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/Category";

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

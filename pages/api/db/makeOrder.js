import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  //   const data = await Order.find({}).exec();

  switch (method) {
    case "POST":
      const data = await Order.create(req.body);
      res.status(200).json(data);
      break;
  }
};

export default handler;

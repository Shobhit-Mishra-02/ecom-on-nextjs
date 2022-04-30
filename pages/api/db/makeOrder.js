import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/Order";
import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      const data = await Order.create(req.body);
      res.status(200).json(data);
      break;

    case "GET":
      const { user } = getSession(req, res);
      const orderData = await Order.find({ email: user.email })
        .sort({ $natural: -1 })
        .populate("products")
        .exec();
      res.status(200).json(orderData);
      break;
  }
};

export default withApiAuthRequired(handler);

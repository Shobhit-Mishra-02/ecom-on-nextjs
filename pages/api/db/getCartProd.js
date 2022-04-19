import dbConnect from "../../../lib/dbConnect";
import Cart from "../../../models/Cart";

const handler = async (req, res) => {
  const { method } = req;

  const userEmail = req.body.email;
  await dbConnect();

  switch (method) {
    case "POST":
      const data = await Cart.find({ email: userEmail }, { __v: 0 })
        .populate("product")
        .exec();

      res.status(200).json(data);
      break;

    default:
      break;
  }
};

export default handler;

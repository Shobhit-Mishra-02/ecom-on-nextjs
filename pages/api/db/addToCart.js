import dbConnect from "../../../lib/dbConnect";
import Cart from "../../../models/Cart";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const data = await Cart.create(req.body);
      res.status(200).json({
        data,
      });
      break;
  }
};

export default handler;

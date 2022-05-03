import dbConnect from "../../../lib/dbConnect";
import Cart from "../../../models/Cart";

//Route: /api/db/clearCart
//This will clear the the cart section for a particular user in the db.

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      //   const email = req.body;
      const data = await Cart.deleteMany(req.body);
      res.status(200).json(data);
      break;

    default:
      break;
  }
};

export default handler;

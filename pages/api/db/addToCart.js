import dbConnect from "../../../lib/dbConnect";
import Cart from "../../../models/Cart";

//Route: /api/db/addToCart
//Make a post request to this route and this will add a product to the cart.

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

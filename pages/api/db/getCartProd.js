import dbConnect from "../../../lib/dbConnect";
import Cart from "../../../models/Cart";

//Route: /api/db/getCartProd
//This will give the cart products of the particular user

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

    //This route will update the quantity of the no. of cart products by one
    case "PUT":
      const { id, quan } = req.body;
      const updateQuan = await Cart.findByIdAndUpdate(id, {
        $set: {
          quantity: quan,
        },
      }).exec();

      res.status(200).json(updateQuan);
      break;

    case "DELETE":
      const deleteProd = await Cart.findByIdAndDelete(req.body.id).exec();

      res.status(200).json(deleteProd);
      break;
  }
};

export default handler;

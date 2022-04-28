import dbConnect from "../../../lib/dbConnect";
import Prod from "../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      // const searchText = req.body.search;
      // const data = await Prod.find(
      //   {
      //     $text: { $search: req.body.search },
      //   },
      //   { __v: 0 }
      // ).exec();
      // res.status(200).json(data);
      const data = await Prod.find({
        productName: { $regex: req.body.search, $options: "i" },
      });
      res.status(200).json(data);
      break;
  }
};

export default handler;

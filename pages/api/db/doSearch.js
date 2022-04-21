import dbConnect from "../../../lib/dbConnect";
import Prod from "../../../models/Prod";

const handler = async (req, res) => {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "POST":
      const data = await Prod.find(
        {
          $text: { $search: req.body.search },
        },
        { __v: 0 }
      ).exec();
      res.status(200).json({
        message: "request for search",
        data,
      });
      break;
  }
};

export default handler;

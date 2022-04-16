import { IncomingForm } from "formidable";
import mv from "mv";
import Prod from "../../../models/Prod";
import dbConnect from "../../../lib/dbConnect";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) return reject(err);

      var oldPath = files.file.filepath;
      var newPath = `./public/uploads/${files.file.originalFilename}`;

      mv(oldPath, newPath, function (err) {});
      await dbConnect();

      const info = {
        ...fields,
        productImage: files.file.originalFilename,
      };
      const dbData = await Prod.create(info);

      res.status(200).json({ fields, files });
    });
  });
};

export default handler;

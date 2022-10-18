import db from "../Model";
import { RequestHandler } from "express";

const User = db.users;

export const saveUser: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.userName || !req.body.email || !req.body.password) {
      return res.status(400).send({
        message: "Please fill all the fields",
        status: 400,
      });
    }

    const username = await User.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if (username) {
      return res.status(409).send("Username already exists");
    }
    const emailcheck = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (emailcheck) {
      res.status(409).send("Email already exists");
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

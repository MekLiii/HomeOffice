// const bcrypt = require("bcrypt");
// const db = require("../../Model");
// const jwt = require("jsonwebtoken");

import bcrypt from "bcrypt";
import db from "../../Model";
import jwt from "jsonwebtoken";
import {Request,Response} from 'express';


const User = db.users;


const signup = async (req:Request, res:Response) => {
  try {
    const { userName, email, password } = req.body;
    const data = {
      userName,
      email,
      password: await bcrypt.hash(password, 10),
    };
    const user = await User.create(data);
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: "1h",
      });
      res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
      return res.status(201).send({ user, token });
    }
    return res.status(400).send("Something went wrong");
  } catch (err) {
    console.log(err);
  }
};
const login = async (req:Request, res:Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ 
      where: { email },
     });

    if(!email || !password){
      return res.status(400).send("Please fill all the fields")
    }
    if (!user) {
      return res.status(400).send("User not found");
    }
    const isSame = await bcrypt.compare(password, user.password);

    if (!isSame) {
      return res.status(400).send("Wrong password");
    }
    console.log(process.env.JWT_SECRET,"secret")
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    return res.status(201).send({ user, token });
  } catch (err) {
    console.log(err);
  }
};

export {
  signup,
  login,
}

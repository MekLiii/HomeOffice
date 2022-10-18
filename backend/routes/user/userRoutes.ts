import express from 'express';
import { signup, login } from '../../controllers/user/userControlers';
import { saveUser } from '../../Middleware/userAuth';


const router = express.Router();

router.post("/signup", saveUser, signup);

router.post("/login", login);

export default  router;
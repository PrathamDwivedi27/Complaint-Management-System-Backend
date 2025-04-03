import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import { JWT_SECRET } from '../config/server-config.js';
import User from '../model/userSchema.js';
import { ADMIN_SECRET } from '../config/server-config.js';

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid user or password',
        success: false,
      });
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token: token,
      data: user,
      userId: user._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const createToken = (id,role) => {
  console.log("role",role);
  return jwt.sign({ id:id,role:role }, JWT_SECRET, { expiresIn: '15d' });
};

const registerUser = async (req, res) => {
  const { name, email, password,role,phone, adminSecret } = req.body;
  try {
    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(200).json({
        message: 'User already exists',
        data: exists,
        success: true,
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(402).json({
        message: 'Write a valid email',
        success: false,
      });
    }

    if (role === "admin") {
        if (!adminSecret || adminSecret !== ADMIN_SECRET) {
            return res.status(403).json({ 
                message: "Invalid admin secret key!" 
            });
        }
    }

    //hashing
    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
      role:role,
      phone:phone
    });
    console.log(newUser);

    const user = await newUser.save();

    const token = createToken(user._id,user.role);
    console.log("token",token);
    res.status(202).json({
      message: 'Verified token',
      success: true,
      token: token,
      userId: user._id,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export {
    loginUser,
    registerUser
}

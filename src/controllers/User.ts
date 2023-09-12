import {Request, Response} from 'express';

import User from '../models/User';

const createUser = async (req: Request, res: Response) => {
  const {name, lastname, email, password} = req.body;
  const newUser = new User({
    name,
    lastname,
    email,
    password,
  });

  return await newUser
    .save()
    .then(data => {
      {
        res.status(200).json(data);
      }
    })
    .catch(error => {
      {
        res.status(500).json(error);
      }
    });
};

const getUser = async (req: Request, res: Response) => {
  const {id} = req.params;
  return await User.findById(id)
    .then(data => {
      data
        ? res.status(200).json(data)
        : res.status(404).send('User not found');
    })

    .catch(error => {
      res.status(500).json(error);
    });
};

const getAllUsers = async (_req: Request, res: Response) => {
  return await User.find()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

const updateUser = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {name, lastname, email, password} = req.body;
  return await User.findByIdAndUpdate(
    id,
    {
      name,
      lastname,
      email,
      password,
    },
    {new: true},
  )
    .then(data => {
      data
        ? res.status(200).json(data)
        : res.status(404).send('User not found');
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

const deleteUser = async (req: Request, res: Response) => {
  const {id} = req.params;
  return await User.findByIdAndRemove(id)
    .then(data => {
      data
        ? res.status(200).json(data)
        : res.status(404).send('User not found');
    })
    .catch(error => {
      res.status(500).json(error);
    });
};
export default {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
};

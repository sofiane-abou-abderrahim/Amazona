import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

const uploadRouter = express.Router();

uploadRouter.post('/', async (req, res) => {});

export default uploadRouter;

import express from "express";
import { getUsers, createUser, updateUser, updateData,deleteUser } from "../Controller/data.js";

const router = express.Router();

router.get('/users', getUsers);
router.post('/create', createUser);
router.put('/updateUser/:id', updateUser);
router.patch('/updateData/:id', updateData);
router.delete('/:id', deleteUser);


export default router;

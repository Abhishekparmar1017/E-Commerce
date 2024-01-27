import express from 'express';
import {forgotPasswordController, 
    getAllOrdersController, 
    getOrdersController, 
    loginController, 
    orderStatusController, 
    registerController,
    textController,
    updateProfileController,
} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST

router.post('/register',registerController);

// LOGIN POST
router.post('/login',loginController);

// Frogot Password || post
router.post('/forgot-password',forgotPasswordController)

// test routes
router.get('/test',requireSignIn,isAdmin,textController);

// protected route auth
router.get('/user-auth',requireSignIn,(req,res) =>{
    res.status(200).send({ok:true});
});

// protected Admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res) =>{
    res.status(200).send({ok:true});
});

// update profile9:18:5
router.put('/profile',requireSignIn, updateProfileController);

// orders
router.get('/orders',requireSignIn, getOrdersController);

// All orders
router.get('/all-orders',requireSignIn,isAdmin, getAllOrdersController);

// order status update
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController);

export default router;
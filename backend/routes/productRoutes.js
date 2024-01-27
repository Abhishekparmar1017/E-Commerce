import express from 'express';
import {isAdmin,requireSignIn} from '../middlewares/authMiddleware.js'
import { braintreePaymentController, 
    braintreeTokenController, 
    createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFilterController,
    productListController,
    productPhotoController,
    realtedProductController,
    searchProductController,
    updateProductController} from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

// routes
router.post('/create-product',
requireSignIn,
isAdmin,
formidable(),
createProductController);

// Get all products
router.get('/get-products',getProductController);

// single product
router.get('/get-products/:slug',getSingleProductController);

// get photo
router.get('/product-photo/:pid',productPhotoController);

// delete product
router.delete('/delete-product/:pid',deleteProductController);

// update routes
router.put('/update-product/:pid',
requireSignIn,
isAdmin,
formidable(),
updateProductController);

// filter product
router.post('/product-filters',productFilterController);

// product count
router.get('/product-count',productCountController);

// product per page
router.get('/product-list/:page',productListController);

// search product
router.get('/search/:keyword',searchProductController);

// similer product
router.get('/related-products/:pid/:cid',realtedProductController);

// category wise product
router.get('/product-category/:slug',productCategoryController);

// payment routes
// token
router.get('/braintree/token',braintreeTokenController);

// payments
router.post('/braintree/payment',requireSignIn,braintreePaymentController);

export default router;
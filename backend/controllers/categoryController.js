import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req,res) =>{
    try {
        const {name} = req.body
        if(!name){
            return res.status(401).send({message:'Name is required'})
        }
        const exisitingCategory = await categoryModel.findOne({name});
        if(exisitingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already Exisits'
            });
        }
        const  category = await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:'new category created',
            category
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in Catrgory'
        });
    }
};

// update category

export const updateCategoryController = async(req,res) =>{
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id,
            {name,slug:slugify(name)},
        {new:true});
        res.status(200).send({
            success:true,
            message:'Category Update Successfully',
            category,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while updating caregory"
        });
    }
};

// get all categoryController

export const categoryController =  async(req,res) =>{
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:"All categories Lins",
            category,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting all categories"
        });
    }
};

// singleCatgoryController

export const singleCatgoryController = async(req,res)=>{
    try {
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"Get single category Successfully",
            category,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting Single categories"
        });
    }
};

// deleteCategoryController

export const deleteCategoryController =  async(req,res) =>{
    try {
        const {id} = req.params
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"Categry Deleted Successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Erroe while deleting category"
        })
    }
};
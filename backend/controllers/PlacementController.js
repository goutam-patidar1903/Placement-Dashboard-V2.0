const mongoose=require('mongoose');
const Placement=require('../models/PlacementModel');

// To GET All records
const getPlacements = async(req,res) => {
    const placements = await Placement.find({}).sort({_id:1});
    res.status(200).json(placements);
}


// To POST record
const createPlacement = async(req,res) => {
    const {_id , name , placementType , company , salary , salaryType} = req.body;

    //Incase fields are empty
    let emptyFields=[]

    if(!_id) emptyFields.push('id');
    if(!name) emptyFields.push('name');
    if(!company) emptyFields.push('company');
    if(salary <= 0) emptyFields.push('salary');

    if (emptyFields.length > 0) return res.status(400).json({error:'Please fill in all fields', emptyFields})

    //add to DB
    try
    {
        const placement = await Placement.create({_id , name , placementType , company , salary , salaryType});

        res.status(200).json(placement);
    }catch(error)
    {
        emptyFields.push('id');
        res.status(404).json({error : error.message,emptyFields});
    }
}

//To DELETE record
const deletePlacement = async(req,res) => {
    const {id}=req.params

    const placement= await Placement.findOneAndDelete({_id:id});

    if(!placement) return res.status(400).json({error:`Workout not exists for ID : ${id}`})

    res.status(200).json(placement);
}

const updatePlacement = async(req,res) => {
    const {id}=req.params

    //Incase fields are empty
    let emptyFields=[]

    if(!req.body.name) emptyFields.push('name');
    if(!req.body.company) emptyFields.push('company');
    if(req.body.salary <= 0) emptyFields.push('salary');

    if (emptyFields.length > 0) return res.status(400).json({error:'Please fill in all fields', emptyFields})

    const placement= await Placement.findOneAndUpdate({_id:id},{...req.body});

    if(!placement) return res.status(400).json({error:`Workout not exists for ID : ${id}`})

    res.status(200).json(placement);
}

module.exports={
    getPlacements,
    createPlacement,
    deletePlacement,
    updatePlacement
}
const mongoose=require('mongoose');
const Placement=require('../models/PlacementModel');


//To get Company name and there count
const getCompaniesCount = async(req,res) => {
    try {
        const companies = await Placement.aggregate([
            {
                $group: {
                    _id: "$company",
                    count: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    company: "$_id",
                    count: 1
                }
            },
            {
                $sort: {
                    company: 1
                }
            }
        ]);
        res.status(200).json(companies);
    } catch (error) {
        res.status(404).json({error : error.message});
    }
}



module.exports = {
    getCompaniesCount
}
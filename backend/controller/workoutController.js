
//model
const { model } = require('mongoose');
const Workout = require('../models/workout');
const mongoose = require('mongoose');

//add new workout
const createWorkout =  async (req,resp) => {
    const{title, load, reps} = req.body
    
    try{
         const workout = Workout.create({title, load, reps});
          resp.status(200).json(workout)        
    }catch(error){
        resp.status(400).json({error: error.message})
    }
}

//get all the workout
const getWorkouts = async(req, resp) =>{
    const workouts = await Workout.find({}).sort({createAt: -1})

    resp.status(200).json(workouts);
}


//get single workout
const getWorkout = async(req, resp) => {
    
    const {id} = req.params
    
    //invalid id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return resp.status(400).json({error:"No such workout"})
    } 
    
    const workout = await Workout.findById(id)
    
    if(!workout){
        return resp.status(400).json({error : "No such data found"})
    }
    resp.status(200).json(workout);
}

//delete workout

const deleteWorkout = async (req, resp) => {

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid({id})){
        return resp.status(400).json({error:"No such Workout"})
    }

    const workout = await Workout.findOneAndDelete({_id : id})

    if(!workout){
        return resp.status(400).json({error:"No such workout"})
    }

    resp.status(200).json(workout)
}

//update workout
const updateWorkout = async(req, resp) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid({id})){
        return resp.status(400).json({error:"No such Workout"})
    }

    const workout = await Workout.findByIdAndUpdate({_id : id},{
        ...req.body
    })

    if(!workout){
        return resp.status(400).json({error:"No such workout"})
    }
    resp.status(200).json(workout);
}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}
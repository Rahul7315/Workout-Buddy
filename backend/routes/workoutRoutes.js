
const express = require('express')

const router = express.Router()

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController')

//Get workouts
router.get('/',getWorkouts)

//Get single workout
router.get('/:id',getWorkout)

//POST  workout
router.post('/', createWorkout)


//Delete workout
router.delete('/:id',deleteWorkout)

//Update workout
router.patch('/:id',updateWorkout)


module.exports = router
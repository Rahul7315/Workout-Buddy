import { useEffect, useState } from "react";
import WorkoutDetails from '../pages/WorkoutDetails' 
import WorkoutForm from '../pages/WorkoutForm'
const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/workoutRoutes');
            const json = await response.json()

            if (response.ok) {
                setWorkouts(json)
            }
        }

        fetchWorkouts();

    }, []
    )

    return (
       
        <div className="Home-container">
            
            <div>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout = {workout}/>
                ))}
            </div>
            <div className="form1"><WorkoutForm /></div>
            
        </div>
   
    )
}

export default Home;
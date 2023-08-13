import { useState } from "react"

const WorkoutForm = () => {
    
    const[title, setTitle] = useState('')
    const[load, setLoad] = useState('')
    const[reps, setReps] = useState('')
    const[error, setError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = {title, reps, load}

        const response = await fetch('/api/workoutRoutes', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
           setError(json.error) 
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            window.location.reload();
            console.log('Added Workout'); 
         }
    }

    return(
        <form className="form-container" onSubmit={handleSubmit}>

            <center><h3 className="title-color">Add New WorkOut</h3></center>
            <div className="form-details">
            <label className="label">WorkOut Name:</label>
            <input className="box" type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            
            <label className="label">Load [In Kgs]:</label>
            <input className="box" type="number" onChange={(e) => setLoad(e.target.value)} value={load} />
            
            <label className="label">Reps:</label>
            <input className="box" type="number" onChange={(e) => setReps(e.target.value)} value={reps} />
           
            <button className="submit-btn">Add Workout</button> 
            {error && <div>{error}</div>}
            </div>
        </form>
    )

}

export default WorkoutForm;
const WorkoutDetails = ({ workout }) => {
    const handleClick = async () => {
        try {
            const response = await fetch('api/workoutRoutes/' + workout._id, {
                method: 'DELETE'
            });

            if (response.ok) {
                const json = await response.json();
                window.location.reload();
                console.log("deleted", json);
            } else {
                // Handle non-successful response (e.g., status code 4xx or 5xx)
                console.error("Failed to delete workout:", response.statusText);
            }
        } catch (error) {
            // Handle any network-related or other errors
            console.error("Error while deleting workout:", error);
        }
    };

    return (
        <div className="WorkoutDetails-container">
            <button className="btn btn-danger" onClick={handleClick} >Delete</button>
            <h4 className="workout-title">{workout.title}</h4>
            <div className="details">
                <h5>Loads : {workout.load} Kgs</h5>
                <h5>Reps : {workout.reps}</h5>
              
                <h6>Last Modified : {workout.createdAt}</h6>
                
            </div>
        </div>
    );
};

export default WorkoutDetails;

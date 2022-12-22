import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        // sending request to page with id of selected workout
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        // response contains json data, the document that has just been deleted
        const json = await response.json()

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return ( 
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
     );
}
 
export default WorkoutDetails;
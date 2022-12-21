import { useState } from "react";

const WorkoutForm = () => {
    // States for all new data user will input
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')

    const [error, setError] = useState(null)

    // handle function
    const handleSubmit = async (e) => {
        // prevent form refreshing
        e.preventDefault()

        // object for new workout
        const workout = {title, load, reps}

        // get where post request is going to
        const response = await fetch('/api/workouts', {
            method: 'POST',

            // stringify into JSON so it can be sent
            body: JSON.stringify(workout),

            // define content type being submitted as json
            headers:{
                'Content-Type': 'application/json'
            }
        })

        // get response from json after handling submit
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            setError(null)
            console.log('new workout added', json)

            // reset body values
            setTitle('')
            setLoad('')
            setReps('')
        }
    }

    return ( 
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add A New Workout</h3>

            <label>Exercise Title:</label>
            <input 
                type="text"
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
            />

            <label>Load (in kg):</label>
            <input 
                type="number"
                onChange={(e) => setLoad(e.target.value)} 
                value={load}
            />

            <label>Reps:</label>
            <input 
                type="number"
                onChange={(e) => setReps(e.target.value)} 
                value={reps}
            />

            <button>Add Workout</button>

            {/* create error div if error exists */}
            {error && <div className="error">{error}</div>}
        </form>
     );
}
 
export default WorkoutForm;
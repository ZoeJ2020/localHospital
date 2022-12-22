//  react context component
import { createContext, useReducer } from "react";

// creates blank new context
export const WorkoutContext = createContext()

export const workoutsReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload
            }

        case 'CREATE_WORKOUT':
            return {
                // action.payload would be a new workouts, state.workouts is the previous array of workouts
                // we are adding our new workout through action.payload
                // to the front of this existing array
                workouts: [action.payload, ...state.workouts]
            }

        case 'DELETE_WORKOUT':
            return{
                // filter through current workouts on current state before change

                // if workout id is not the same as the id we want to delete, it will stay inside our array.
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }

        // default case, return state unchanged
        default:
            return state
    }
}

// provide context to component tree, so components can access

// context provider component
export const WorkoutContextProvider = ({ children }) => {
    // children = whatever component this provider wraps, in this case the App component we have wrapped in index.js file

    // this hook is like useState which updates value
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    })

  

    return(
        // this wraps whatever part of application needs access to this context = aka. the database information

        // provide dynamic value of workout data from database to App
        <WorkoutContext.Provider value={{...state, dispatch}}>
            {/* in our case, the entire website will need access, as all our info is on our one page */}
            { children }
        </WorkoutContext.Provider>
    )
}
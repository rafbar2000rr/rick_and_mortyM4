import {ADD_CARD, DELETE_CARD} from '../actions/types'

const initialState ={
    idUser: 0,
    myFavorites: [],
    myFavorites: [],
}

export default function rootReducer(state = initialState, {type, payload}) {
    switch(action.type){
        case GET_FAVS:
            return{
                ...state,
                allMyFavorites: [...action.payload],
                myFavorites: [...action.charpayload],
            }
        case ADD_FAV:
                const addFavorites = [state.allMyFavorites, action. payload]
                return{
                    ...state,
                    allMyFavorites: [...addFavorites],
                    myFavorites: [...addFavorites],
                }
        
        case REMOVE_FAV:
            const deleteFavorites = state.allMyFavorites.filter(char => char.id !== action.payload )
            
            
        case LOGIN:
            return{
                    ...state,
                    idUser: action.payload,
            }
            default: 
                return {...state};
    }
}
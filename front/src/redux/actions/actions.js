import {ADD_CARD, DELETE_CARD} from './types';

export function addCard(personaje){
    return({
        type: ADD_CARD,
        payload: personaje,
    })
}

export function deleteCard(id){
    return({
        type: DELETE_CARD,
        payload: id,
    })
}


export function login(email, password) {
    return async function (dispatch) {
        try {
            const obj = await fetch(`http://localhost:3001/login?email=${email}&password=${password}`)
            .then((response) => response.json());

            if(obj.access) dispatch({type: 'LOGIN', payload:obj.id});
        } catch(error) {
            console.log(error);
        }
        
        }
}

export function addFav(personaje, idUser){
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav?idUser=${idUser}`,
            {
                method: 'POST',
                body: JSON.stringify(personaje),
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',

                },
            }).then((response) => response.json());

            if(data) dispatch({type: 'ADD_FAV', payload: data});
        } catch(error) {
            console.log(error);
        }
        
        }

}


export function removeFav(id, idUser) {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav/${id}?idUser=${idUser}`,
            {
                method: 'DELETE',
            }
            ).then((response) => response.json());

            if(data.success) dispatch({type: 'REMOVE_FAV', payload: id});
        } catch(error) {
            console.log(error);
        }
        
        }
}

export function getFavs(idUser) {
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/fav=?idUser=${idUser}`)
            .then((response) => response.json());

            if(data) dispatch({type: 'GET_FAVS', payload:data});
        } catch(error) {
            console.log(error);
        }
        
        }
}

export function filterCards(status) {
    return{
        type: FILTER, 
        payload: status,
    }
}
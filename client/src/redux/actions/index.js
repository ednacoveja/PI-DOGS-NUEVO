import axios from "axios";

//variables de actions type:
export const GET_DOGS = "GET_DOGS";

//el middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.


//traer todos los perros, manera completa de funcion con async await
export function getAllDogs() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
}


//traer todos los perros, manera mas corta con async await
/*export const getAllDogs = () => {
    return async function (dispatch) {
      await axios
        .get("http://localhost:3001/dogs")
        .then((json) =>
          dispatch({ type: GET_ALL_MOVIES, payload: json.data })
        );
    };
  };*/
  


//traer todos los perros, con promesa 
/*export function getAllDogs() {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/dogs")
      .then((json) => {
        dispatch({
          type: GET_DOGS,
          payload: json.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}*/


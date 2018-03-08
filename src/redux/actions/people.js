import axios from 'axios';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
var apiUrl = "https://pokeapi.co/api/v2/pokemon/";
var url = "https://10.0.0.23:5000/api/organizations"



function setPeople(data){
    return{
        type:FETCH_PEOPLE,
        payload: data
    }
}

export const getPeopleList = () => (dispatch) => {
    console.log("hello");
    axios.get(apiUrl)
        .then((res)=> {
            const pokedata = setPeople(res.data.results);
            console.log('data pokemon list:', pokedata);

            // pokedata.map((pokemon)=>{
            //     const pokeList = setPeople(pokemon.name);
            //     console.log('pokemon list: ', pokeList);
            //     dispatch(pokeList);
            //
            // })
            dispatch(pokedata);
        })
        .catch((error)=>{
            console.log('error fetchng data:', error);
        })


}



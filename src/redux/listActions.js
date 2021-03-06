import { GET_LISTS, ADD_LIST } from "../constants";

export function fetchLists(){
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/lists")
          .then((res) => res.json())
        //   .then(lists => console.log(lists))
          .then((lists) => dispatch({ type: GET_LISTS, payload: lists }));
    }
}


export function createList(list){
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/lists/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify(list)
      })
        .then((res) => res.json())
        .then((list) => dispatch({ type: ADD_LIST, payload: list }));
    };    
}
export function userHasErrored(bool) {
    return {
        type: 'USER_HAS_ERRORED',
        hasErrored: bool
    };
}
export function userFetchDataSuccess(user) {
    return {
        type: 'USER_FETCH_DATA_SUCCESS',
        user
    };
}
export function fetchUserData(url,data){
  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    .then( (response) => {
       if (!response.ok) {
         throw Error(response.statusText);
       }
       return response;
    })
    .then((response) => response.json())
    .then((user) => dispatch(userFetchDataSuccess(user)))
    .catch(() => dispatch(userHasErrored(true)));
  };
}

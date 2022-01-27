const setCurrentUser = (loginValues) => {
  return (dispatch) =>{
    fetch("http://mainstage-backend.herokuapp.com/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user: loginValues})
    })
    .then(resp => resp.json())
    .then(json => {
      window.localStorage.setItem('jwt', json.jwt)
      dispatch({type: 'SET_USER', payload: json.user})
    })
  }
}

export {setCurrentUser}
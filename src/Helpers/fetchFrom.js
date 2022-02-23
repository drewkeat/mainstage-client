import BASE_URL from '../api'

const fetchFrom = (directory, requestOptions) => {
 return (fetch(BASE_URL + directory, {
    method: requestOptions.method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify(requestOptions.body)
  })
  .then((resp) => {
    if (!resp.ok) {
      return resp.json().then((error) => {
        throw new Error(error);
      });
    } else {
      const jwt = resp.headers.get("jwt");
      if (jwt) {
        localStorage.setItem('jwt', jwt)
      }
      return resp.json();
    }
  })
 )
}

export default fetchFrom
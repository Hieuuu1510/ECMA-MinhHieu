fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((response) => console.log(response));
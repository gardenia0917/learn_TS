let url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let address = document.querySelector('#address');

// user data
let user = {};

/**
 * @typedef {object} Address
 * @property {string} 
 */

/**
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
    return axios.get(url)
}

fetchUser().then(function (response) {
    response.address
})

function startApp() {
//   axios
//     .get(url)
    fetchUser()
    .then(function (response) {
     // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
        console.log(user)
        username.innerText = user[0].name;
        email.innerText = user[0].email;
        address.innerText = user[0].address;
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
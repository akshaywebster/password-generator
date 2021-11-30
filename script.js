//generate random password
function generate() {
  //set password length/complexity
  let complexity = document.getElementById('slider').value
  console.log(complexity)

  //possible passwords values
  let values =
    'ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+'

  let password = ''

  //create for loop to choose password characters
  for (let i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
  }

  //add password to textbox/display area
  document.getElementById('display').value = password
}

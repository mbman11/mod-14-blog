const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};


// const loginBtn = document.getElementById('login');

// loginBtn.addEventListener("click", async function(event){
//   console.log("helloo")
//   event.preventDefault();

//   const userNameField = document.querySelector('#user-name').value.trim();
//   const emailField = document.querySelector('#email').value.trim();
//   const passwordField = document.querySelector('#password').value.trim();
  
//   if (userNameField && passwordField) {
//     const response = await fetch(`/api/create-user`, {
//       method: 'POST',
//       body: JSON.stringify({ userNameField, emailField, passwordField }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//       console.log('logged In')
//     } else {
//       alert('Failed to create project');
//     }
//   }
// });


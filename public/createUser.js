
const createAccountBtn = document.getElementById('create-accountBtn');

createAccountBtn.addEventListener("click", async function(event){
  console.log('hola')
  event.preventDefault();

  const userName = document.querySelector('#user-name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (userName && email && password) {
    const response = await fetch(`/api/create-user`, {
      method: 'POST',
      body: JSON.stringify({ userName, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log('user added')
      document.location.replace('/dashboard');

    } else {
      alert('Failed to create project');
    }
  }
});




const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener("click", async function(event){
  console.log('hola')
  event.preventDefault();

  const userName = document.querySelector('#user-name').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (userName && password) {
    const response = await fetch(`/api/create-user/login`, {
      method: 'POST',
      body: JSON.stringify({ userName, password }),
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

    if (response.ok) {
      console.log('logged in')
      document.location.replace('/');

    } else {
      alert('Failed to login');
    }
  }
});

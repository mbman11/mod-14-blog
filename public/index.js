
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener("click", async function(event){
  console.log("helloo")
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const author = document.querySelector('#blog-author').value.trim();
  const text = document.querySelector('#blog-text').value.trim();
  
  if (title && author && text) {
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({ title, author, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
      console.log('blog added')
    } else {
      alert('Failed to create project');
    }
  }
});



const loginBtn = document.getElementById('login');

loginBtn.addEventListener("click", async function(event){
  event.preventDefault();

  const userNameField = document.querySelector('#user-name').value.trim();
  const passwordField = document.querySelector('#password').value.trim();
  
  if (userNameField && passwordField) {
    const response = await fetch(`/`, {
      method: 'GET',
      body: JSON.stringify({ userNameField, passwordField }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
      console.log('logged In')
    } else {
      alert('Failed to create project');
    }
  }
});
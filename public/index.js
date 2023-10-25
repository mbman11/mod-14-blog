
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

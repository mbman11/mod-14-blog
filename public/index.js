

const btn = document.getElementById('newPost-btn');

btn.addEventListener("click", function(event){
  console.log('Hello');
  const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#project-name').value.trim();
    const author = document.querySelector('#project-funding').value.trim();
    const text = document.querySelector('#project-desc').value.trim();
  
    if (title && author && text) {
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ title, author, text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/blogs');
      } else {
        alert('Failed to create project');
      }
    }
  };
})

// title and text and author variable to event listener
// await fetch req /api/blog first arg in fetch
// then obj w method as POST
// stringify results
//

// const newFormHandler = async (event) => {
//   event.preventDefault();

//   const title = document.querySelector('#project-name').value.trim();
//   const author = document.querySelector('#project-funding').value.trim();
//   const text = document.querySelector('#project-desc').value.trim();

//   if (title && author && text) {
//     const response = await fetch(`/api/blogs`, {
//       method: 'POST',
//       body: JSON.stringify({ title, author, text }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/blogs');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };
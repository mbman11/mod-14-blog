const postId = '';


const deleteBlogBtn = document.getElementById('deleteButton');

deleteBlogBtn.addEventListener("click",function(){
  console.log('hello')
  fetch(`/api/blogs/delete/${postId}`,  {
    method: 'DELETE'
  })
})


//delete route for button


const deleteBlogBtn = document.getElementById('deleteButton');

deleteBlogBtn.addEventListener("click",function(){
  console.log('hello')
  fetch(`/api/blogs/delete/:id`,  {
    method: 'DELETE'
  })
})



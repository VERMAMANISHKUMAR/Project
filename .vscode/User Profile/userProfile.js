// const divEle = document.querySelector('.card-container');

// const request=new XMLHttpRequest();

// request.open('GET' , `https//dummyjson.com/users`);
// request.send();
 
// request.addEventListener('load',function () {
          
//           console.log(JSON.parse (this.responseText));
// });
const divEle = document.querySelector('.card-container');
 function getDetails(id){
  
  const req = new XMLHttpRequest();

  req.open('GET', `https://dummyjson.com/users/${id}`);
  req.send();

  req.addEventListener('load', function () {
    //console.log(JSON.parse (this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data);
    displayUser(data)

  });
 }
 //this is callback function
 function displayUser(data){
  const card = `  <div class="user-card">
    <img src=${data.image}alt="Profile Image" />
    <h3>${data.firstName}</h3>
    <h3>${data.lastName}</h3>
    <p class="email">${data.email}</p>
    <button class="btn">View Profile</button>
    </div>`;
    divEle.insertAdjacentHTML("beforeend",card)
 }
getDetails(1)
getDetails(2)
getDetails(3)
getDetails(4)
getDetails(5)


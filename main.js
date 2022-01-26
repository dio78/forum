// your code here

var button = document.getElementById('submit');

button.addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  var newDiv = document.createElement('div');
  var userMessage = document.createElement('p');
  var userName = document.createElement('p');
  
  userMessage.append(message);
  userName.append('Posted By: ' + name);

  newDiv.appendChild(userMessage);
  newDiv.appendChild(userName);

  var posts = document.getElementsByClassName('posts')[0];

  posts.append(newDiv);
})
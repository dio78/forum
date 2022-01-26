// your code here

var button = document.getElementById('submit');

button.addEventListener('click', function () {
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;

  var newDiv = document.createElement('div');
  newDiv.setAttribute('style', 'margin-bottom: 30px;')
  var userMessage = document.createElement('p');
  var userName = document.createElement('p');
  
  userMessage.append(message);
  userName.append('Posted By: ' + name);

  newDiv.appendChild(userMessage);
  newDiv.appendChild(userName);

  var upvoteBtn = document.createElement('button');
  upvoteBtn.setAttribute('id',`upvote-${name}`);
  upvoteBtn.setAttribute('class', 'btn btn-success');
  upvoteBtn.append('Upvote')
  upvoteBtn.setAttribute('style', 'margin-right: 5px;');

  var upvoteCnt = document.createElement('p');
  upvoteCnt.setAttribute('style', 'display: inline; margin-right: 10px; color: green;');
  var upvotes = 0;
  
  

  var downvoteBtn = document.createElement('button');
  downvoteBtn.setAttribute('id', `downvote-${name}`);
  downvoteBtn.setAttribute('class', 'btn btn-danger');
  downvoteBtn.append('Downvote');
  downvoteBtn.setAttribute('style', 'margin-right: 5px;');
 

  var downvoteCnt = document.createElement('p');
  downvoteCnt.setAttribute('style', 'display: inline; color: red;');
  var downvotes = 0;
  
  downvotes = 0;

  upvoteBtn.addEventListener('click', function () {
    upvotes++;
    if (upvotes > 0) {
      upvoteCnt.innerHTML = `+${upvotes}`;
    } else {
      upvoteCnt.append(upvotes);
    };
  });

  downvoteBtn.addEventListener('click', function () {
    downvotes++;
    if (downvotes > 0) {
      downvoteCnt.innerHTML = `-${downvotes}`;
    } else {
      downvoteCnt.append(downvotes);
    };
  });


  newDiv.appendChild(upvoteBtn);
  newDiv.appendChild(upvoteCnt);
  newDiv.appendChild(downvoteBtn);
  newDiv.appendChild(downvoteCnt);

  
  var posts = document.getElementsByClassName('posts')[0];

  posts.append(newDiv);
})
// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function changeText(text) {
  var display = document.getElementById('text-switcher');
  display.innerHTML = "";
  display.innerHTML = text;
}

function changeTextBack(text) {
  var display = document.getElementById('text-switcher');
  display.innerHTML = "";
  display.innerHTML = text;
}

//Form Text Input Resizing Function - Name
let elName = document.querySelector(".input-wrap-name .input");
let extraWidthName = document.querySelector(".input-wrap-name .extra-width-name");
elName.addEventListener("keyup", () => {
  extraWidthName.innerHTML = elName.value;
});

//Form Text Input Resizing Function - Message
let elMessage = document.querySelector(".input-wrap-message .input");
let extraWidthMessage = document.querySelector('.input-wrap-message .extra-width-message');
elMessage.addEventListener("keyup", () => {
  extraWidthMessage.innerHTML = elMessage.value;
});

function loadComments() {
  var numComments = document.getElementById("num-comments").value;

  fetch('/list-comments?num=' + numComments).then(response => response.json()).then((comments) => {
    const commentListElement = document.getElementById('comments-list');
    commentListElement.innerHTML = "";
    comments.forEach((comment) => {
      const commentElement = document.createElement('p');
      commentElement.className = 'comment-element';
      commentElement.appendChild(createDiv(comment.author, 'lightBlueColor'));
      commentElement.appendChild(createDiv(comment.message, 'redColor'));
      commentElement.appendChild(createDiv('}', ''));
      commentListElement.appendChild(commentElement);
    })
  });
}

function createDiv(text, cssClass) {

  const commentDiv = document.createElement('div');

  if (cssClass == 'lightBlueColor') {
    const authorSpan = document.createElement('span');
    const bracket = document.createTextNode(' {');

    authorSpan.className = cssClass;
    authorSpan.innerText = '.' + text;

    commentDiv.appendChild(authorSpan);
    commentDiv.appendChild(bracket);
  }
  else if (cssClass == 'redColor') {
    const messageSpan = document.createElement('span');
    messageSpan.className = cssClass;

    /* 
    '\u00A0' is the code for a non-breaking white space,
    used here as a simulated tabspace
    */
    const title = document.createTextNode('\u00A0\u00A0message: ');
    const message = document.createTextNode(text);
    const semicolon = document.createTextNode(';');

    messageSpan.appendChild(message);
    commentDiv.appendChild(title);
    commentDiv.appendChild(messageSpan);
    commentDiv.appendChild(semicolon);
  }
  else {
    commentDiv.innerText = text;
  }

  return commentDiv;
}



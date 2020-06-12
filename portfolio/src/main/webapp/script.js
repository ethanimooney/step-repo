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
    document.getElementById('comments-list').innerHTML = "";
    comments.forEach((comment) => {
      const commentElement = document.createElement('p');
      commentElement.className = 'comment-element';
      commentElement.appendChild(createDiv(comment.author, 'text-css-label'));
      commentElement.appendChild(createDiv(comment.message, 'text-css-value'));
      commentElement.appendChild(createDiv('}', ''));
      commentListElement.appendChild(commentElement);
    })
  });
}

function createDiv(passMessage, passClass) {

  const child = document.createElement('div');

  if (passClass == 'text-css-label') {
    const labelSpan = document.createElement('span');
    const bracket = document.createTextNode(" {");

    labelSpan.className = passClass;
    labelSpan.innerText = '.' + passMessage;

    child.appendChild(labelSpan);
    child.appendChild(bracket);
  }
  else if (passClass == 'text-css-value') {
    const subChild = document.createElement('span');
    subChild.className = passClass;

    const title = document.createTextNode('\u00A0\u00A0message: ');
    const value = document.createTextNode(passMessage);
    const semicolon = document.createTextNode(';');

    subChild.appendChild(value);
    child.appendChild(title);
    child.appendChild(subChild);
    child.appendChild(semicolon);
  }
  else {
    child.innerText = passMessage;
  }

  return child;
}



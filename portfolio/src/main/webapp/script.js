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
      commentListElement.appendChild(createCommentElement(comment));
    })
  });
}

function createCommentElement(comment) {
  const commentElement = document.createElement('li');
  commentElement.className = 'comment-element';

  const authorElement = document.createTextNode(comment.author);

  const messageElement = document.createTextNode(comment.message);

  const spanOne = document.createElement('span');
  spanOne.className = 'text-css-label';

  const spanTwo = document.createElement('span');
  spanTwo.className = 'text-css-value';

  const br = document.createElement('br');
  const br2 = document.createElement('br');
  const br3 = document.createElement('br');
  const br4 = document.createElement('br');
  const dot = document.createTextNode(".");
  const leftBrace = document.createTextNode(" {");
  const rightBrace = document.createTextNode("}");
  const messageTitle = document.createTextNode("message: ");
  const semi = document.createTextNode(";");
  const tabs = document.createTextNode("\u00A0");


  commentElement.appendChild(spanOne);
  spanOne.appendChild(dot);
  spanOne.appendChild(authorElement);
  commentElement.appendChild(leftBrace);
  commentElement.appendChild(br);

  commentElement.appendChild(tabs);
  commentElement.appendChild(tabs);
  commentElement.appendChild(messageTitle);
  commentElement.appendChild(spanTwo);
  spanTwo.appendChild(messageElement);
  commentElement.appendChild(semi);
  commentElement.appendChild(br2);
  commentElement.appendChild(rightBrace);
  commentElement.appendChild(br3);
  commentElement.appendChild(br4);
  return commentElement;
}
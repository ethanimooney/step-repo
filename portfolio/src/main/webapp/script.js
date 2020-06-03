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

function loadComments() {
  fetch('/list-comments').then(response => response.json()).then((comments) => {
    const commentListElement = document.getElementById('comments-list');
    comments.forEach((comment) => {
      commentListElement.appendChild(createCommentElement(comment));
    })
  });
}

function createCommentElement(comment) {
  const commentElement = document.createElement('div');
  commentElement.className = 'comment-element';

  const authorElement = document.createElement('h3');
  authorElement.innerText = comment.author;

  const messageElement = document.createElement('p');
  messageElement.innerText = comment.message;

  commentElement.appendChild(authorElement);
  commentElement.appendChild(messageElement);
  //taskElement.appendChild(deleteButtonElement);
  return commentElement;
}
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

package com.google.sps.data;

import java.util.Date;

/** 
* An individual comment instance, contains the comments data:
* id, timestamp, author name, and message.
*/
public final class Comment {

  private final long id;
  private final long timestamp;
  private final String author;
  private final String message;

  public Comment(long id, long timestamp, String author, String message) {
    this.id = id;
    this.timestamp = timestamp;
    this.author = author;
    this.message = message;
  }

  public long getId() {
    return id;
  }

  public long getTimestamp() {
    return timestamp;
  }

   public String getAuthor() {
    return author;
  }

   public String getMessage() {
    return message;
  }
}


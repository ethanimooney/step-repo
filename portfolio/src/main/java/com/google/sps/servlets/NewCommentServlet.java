package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.Arrays;
import com.google.gson.Gson;

//Servlet that creates a new comment entity and adds it to the database
@WebServlet("/new-comment")
public class NewCommentServlet extends HttpServlet {
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    datastore.put(createCommentEntity(request));
    response.sendRedirect("/index.html");
  }

  public Entity createCommentEntity(HttpServletRequest request) {
    String author = request.getParameter("cf-name");
    String message = request.getParameter("cf-message");
    long timestamp = System.currentTimeMillis();
    
    Entity commentEntity = new Entity("Comment");
    commentEntity.setProperty("author", author);
    commentEntity.setProperty("message", message);
    commentEntity.setProperty("timestamp", timestamp);

    return commentEntity;
  }
}

package com.google.sps.servlets;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.gson.Gson;
import com.google.sps.data.Comment;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Servlet that lists the comments
@WebServlet("/list-comments")
public class ListCommentsServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Query query = new Query("Comment").addSort("timestamp", SortDirection.DESCENDING);

    int numComments = Integer.parseInt(request.getParameter("num"));

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    List<Entity> results = datastore.prepare(query).asList(FetchOptions.Builder.withLimit(numComments));

    Gson gson = new Gson();

    response.setContentType("application/json;");
    response.setCharacterEncoding("UTF-8"); 
    response.getWriter().println(gson.toJson(fillList(results)));
  }

  private List<Comment> fillList(List<Entity> results){
    List<Comment> comments = new ArrayList<>();
    for (Entity entity : results) {
      long id = entity.getKey().getId();
      long timestamp = (long) entity.getProperty("timestamp");
      String author = (String) entity.getProperty("author");
      String message = (String) entity.getProperty("message");

      Comment comment = new Comment(id, timestamp, author, message);
      comments.add(comment);
    }

    return comments;
  }
}

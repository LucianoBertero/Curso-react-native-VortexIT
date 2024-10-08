import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.random() * 99999,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    case "get_blogpost":
      return action.payload;

    default:
      return action.payload;
  }
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", {
      title: title,
      content: content,
    });

    // dispatch({ type: "add_blogpost", payload: { title, content } });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    console.log(response, "asdasdas");
    console.log("hasta aca");

    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });

    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);

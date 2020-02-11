import axios from "axios";

export default {
  // Gets all
  getAll: function(category) {
    return axios.get("/api/" + category);
  },
  // Gets specific based on id
  getOne: function(category, id) {
    return axios.get("/api/" + category + id);
  },
  // Deletes specific based on id
  deleteOne: function(category, id) {
    return axios.delete("/api/" + category + id);
  },
  // Saves to the database
  saveOne: function(data) {
    return axios.post("/api", data);
  }
};
 
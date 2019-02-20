import axios from "axios";

export default {
    // Gets all calorie tracker data inputs
    getCalorieTracker: function() {
      return axios.get("/api/calorieTrackers");
    },
    // Gets the calorie tracker inputs with the given id
    getCalorieTrackerById: function(id) {
      return axios.get("/api/calorieTrackers/" + id);
    },
    // Deletes the calorie tracker inputs with the given id
    deleteCalorieTracker: function(id) {
      return axios.delete("/api/calorieTrackers/" + id);
    },
    // Saves a calorie tracker inputs to the database
    saveCalorieTracker: function(calorieTrackerData) {
      return axios.post("/api/calorieTrackers", calorieTrackerData);
    }
  };

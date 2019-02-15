import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, FormBtn } from "../../components/Form";

class CalorieTracker extends Component {
  state = {
    calorieTrackerCounts: [],
    positiveCalories: "",
    negativeCalories: ""
  };

  componentDidMount() {
    this.loadCalorieTracker();
  }

  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    API.saveCalorieTracker({
      positiveCalories: this.state.positiveCalories,
      negativeCalories: this.state.negativeCalories
    }).then(results => {
      this.setState({
        calorieTrackerCounts: [results.data, ...this.state.calorieTrackers],
        positiveCalories: "",
        negativeCalories: ""
      });
      console.log(results);
    })
  };

  loadCalorieTrackerCounts = () => {
    API.getCalorieTrackers()
      .then(res =>
        this.setState({ calorieTrackers: res.data, positiveCalories: "", negativeCalories: "" })
      )
      .catch(err => console.log(err));
  };

  deleteCalorieTracker = id => {
    API.deleteCalorieTracker(id).then(() => {
      this.setState({
        calorieTrackers: this.state.calorieTrackers.filter(calorieTracker => calorieTracker._id !== id),
      });
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input value={this.state.positiveCalories} name="positiveCalories" placeholder="PositiveCalories (required)" onChange={this.handleInputChange} />
              <Input value={this.state.negativeCalories} name="negativeCalories" placeholder="NegativeCalories (required)" onChange={this.handleInputChange} />
              <FormBtn onClick={this.handleFormSubmit}>Submit Daily Calorie Count</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Daily Calorie Count List</h1>
            </Jumbotron>
            {this.state.calorieTrackers.length ? (
              <List>
                {this.state.calorieTracker.map(calorieTracker => {
                  return (
                    <ListItem key={calorieTracker._id}>
                      <a href={"/calorieTrackers/" + calorieTracker._id}>
                        <strong>
                          {calorieTracker.positiveCalories} by {calorieTracker.negativeCalories}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => { this.deleteCalorieTracker(calorieTracker._id) }} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CalorieTracker;

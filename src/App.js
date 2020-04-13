//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // Lions will be conisdered the Home team
  const [homeScore, setHomeScore] = useState(0)

  // Tigers will be the away team
  const [awayScore, setAwayScore] = useState(0)

  // score function
  function score(event){
    console.log(event.target.className);
    if(event.target.className === `homeButtons__touchdown`) {      
      setHomeScore(homeScore + 7);      
    }else if(event.target.className === "homeButtons__fieldGoal") {
      setHomeScore(homeScore + 3);
    }else if(event.target.className === "awayButtons__touchdown") {
      setAwayScore(awayScore + 7);
    }else if(event.target.className === "awayButtons__fieldGoal") {
      setAwayScore(awayScore + 3);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
  <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {score}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {score}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {score}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {score}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;

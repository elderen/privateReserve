import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: ["spotify:track:4tiZtoRBKOnAmZ3c95DMOo", "spotify:track:2ZitZzpm4i01kZm1nNPRPg", "spotify:track:2XeZi7qwChzLOt32tsoPXV", "spotify:track:4PouRT4KlI9TRHp45uMqdO", "spotify:track:1D2L6MefbXon28PzIk9I3r", "spotify:track:7LnU4vflcZ8fyuFaVxGtuN"]
    }
  }
  render() {
    return (
      <>
        <div>
          <p>Private</p>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
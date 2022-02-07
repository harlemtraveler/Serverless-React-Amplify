import React, { Component } from "react";
import { Auth, Hub } from "aws-amplify";
import { Authenticator, AmplifyTheme } from "aws-amplify-react/lib";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuthenticator } from "aws-amplify-react";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends React.Component {
  state = {
    user: null
  };

  componentDidMount() {
    this.getUserData();
    Hub.listen("auth", this, "onHubCapsule");
  }

  onHubCapsule = capsule => {
    switch (capsule.payload.event) {
      case "signIn":
        console.log("signed in");
        this.getUserData();
        // this.registerNewUser();
        break;
      case "signUp":
        console.log("signed up")
        break;
      case "signOut":
        console.log("signed out");
        this.setState({ user: null });
        break;
      default:
        return;
    }
  }

  getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    user ? this.setState({ user }) : this.setState({ user: null });
  };

  handleSignout = async () => {
    try {
      await Auth.signOut();
    } catch (err) {
      console.error("Error signing out user", err);
    }
  };

  render() {
    const { user } = this.state;
    return !user ? (
      <Authenticator theme={theme} />
    ) : (
      <Router>
        <React.Fragment>
          {/* Navigation */}
          <Navbar user={user} handleSignout={this.handleSignout} />

          {/*  Routes  */}
          <div className={"app-container"}>
            <Routes>
              <Route exact path={"/"} component={HomePage} />
              <Route path={"/profile"} component={ProfilePage} />
              <Route
                path={"markets/:marketId"}
                component={({ match }) => (
                  <MarketPage
                    marketId={match.params.marketId}
                  />
                )}
              />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

const theme = {
  ...AmplifyTheme,
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "#ffc0cb"
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: "var(--amazonOrange)"
  },
  sectionBody: {
    ...AmplifyTheme.sectionBody,
    padding: "5px"
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "var(--squidInk)"
  }
};

// export default withAuthenticator(App, true, [], null);
export default App;
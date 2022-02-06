import React, { Component } from "react";
import { withAuthenticator } from "aws-amplify-react";
import HomePage from "./pages/HomePage";
import MarketPage from "./pages/MarketPage";
import NavBar from "./components/Navbar";
import "./App.css";

class App extends React.Component {
    state = {};

    render() {
        return <div>App</div>
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         App
//       </header>
//     </div>
//   );
// }

export default withAuthenticator(App, { includeGreetings: true });

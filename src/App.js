import "./App.css";
import React, { Component } from "react";
import profilPic from "./img.png";

class App extends Component {
    constructor() {
        super();
        this.state = {
            Person: {
                fullName: "Hafdhi Imen",
                bio: "this is a biography",
                imgSrc: profilPic,
                profession: "IT engineer",
            },
            time: new Date(),
            show: true,
        };
    }
    handleClick = () => {
        this.setState((state) => ({ show: !this.state.show }));
    };
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({
                time: new Date(),
            }));
        }, 1000);
    }

    render() {
        return (
            <div className="App">
                <br />
                <button onClick={this.handleClick}>
                    {this.state.show ? "Show" : "Hide"}
                </button>
                {this.state.show ? (
                    ""
                ) : (
                    <div>
                        <br />
                        <img
                            src={this.state.Person.imgSrc}
                            alt="profil_pic"
                            style={{
                                fontStyle: "bold",
                                color: "aqua",
                                width: "200px",
                                height: "200px",
                                borderRadius: "20px",
                            }}
                        />
                        <br />
                        <h2
                            style={{
                                fontSize: "large",
                                fontStyle: "bold",
                                color: "teal",
                            }}
                        >
                            Full name: {this.state.Person.fullName}
                        </h2>
                        <h3 style={{ fontStyle: "bold", color: "purple" }}>
                            Biography: {this.state.Person.bio}
                        </h3>
                        <h3 style={{ fontStyle: "bold", color: "blue" }}>
                            Profession: {this.state.Person.profession}
                        </h3>
                        <h3>Timing:{this.state.time.toLocaleTimeString()}</h3>
                    </div>
                )}
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import background from './background.jpg';
import philippe from './philippe.png';
import github from './github.png';
import linkedin from './linkedin.png';
import resume from './resume.png';
import "typeface-roboto";
import './App.scss';

class Link extends Component{

    render() {
        return <a href={this.props.link} target="_blank" rel="noopener noreferrer">
            <img src={this.props.image} alt={this.props.label}/>
            <br/>
            {this.props.label}
        </a>
    }

}

class App extends Component {

    links = [
        {
            image: github,
            label: "GitHub",
            link: "https://github.com/philippevienne"
        },
        {
            image: resume,
            label: "CV",
            link: "./cv.pdf"
        },
        {
            image: linkedin,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/pvienne/"
        }
    ];

    render() {
        return (
            <div className="body">

                <div className="background">
                    <img src={background} alt="Forest with fog"/>
                </div>
                <div className="container">
                    <div className="App">
                        <div className="content">
                            <h1>Philippe VIENNE</h1>
                            <div className="info">
                                <p><a href="tel:+33601836588">+33&nbsp;6&nbsp;01&nbsp;83&nbsp;65&nbsp;88</a><br/><a
                                    href="mailto:philippe@vienne.me">philippe@vienne.me</a></p>
                            </div>
                            <div className="links">
                                {this.links.map((link, i) => <Link key={i} {...link}/>)}
                            </div>
                        </div>
                        <div className="photo">
                            <div>
                                <br/>
                                <img src={philippe} alt="Philippe VIENNE"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

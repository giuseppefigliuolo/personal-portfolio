import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Project from "./components/Project";
import "./style/index.scss";

//img
import spaziSostenibiliImg from "./imgs/spazi-sostenibili.png";
import marioMeleImg from "./imgs/mario-mele.png";
import soccerNodeImg from "./imgs/soccernode.png";
import chatAppImg from "./imgs/chat-app.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/project/spazisostenibili">
            <Project
              title="Spazi Sostenibili"
              img={spaziSostenibiliImg}
              link="https://moholepeople.it/spazisostenibili/"
              techs={["PHP", "WordPress", "JS", "ACF", "AOS"]}
              description="Do you want to find out more about myself and my skills? Just send me an email, I would love to reply! 
              ou want to find out more about myself and my skills? Just send me an email, I would love to reply! "
              linkRepo="https://github.com/giorgiocolombo/ss-wordpress"
            />
          </Route>
          <Route path="/project/my-chat-app">
            <Project
              title="MyChatApp"
              img={chatAppImg}
              link="http://figliuolo-chat.herokuapp.com/"
              techs={["NodeJS", "Socket.io", "ExpressJS"]}
              description="Do you want to find out more about myself and my skills? Just send me an email, I would love to reply! 
              ou want to find out more about myself and my skills? Just send me an email, I would love to reply! "
              linkRepo="https://github.com/giuseppefigliuolo/websocket_chat-app"
            />
          </Route>
          <Route path="/project/mariomele">
            <Project
              title="Mario Mele Fashion Designer"
              img={marioMeleImg}
              link="http://marioemme.netlify.com/"
              techs={["JS", "Scss", "Swiper.js", "AOS"]}
              description="Do you want to find out more about myself and my skills? Just send me an email, I would love to reply! 
              ou want to find out more about myself and my skills? Just send me an email, I would love to reply! "
              linkRepo="https://github.com/giuseppefigliuolo/emme-project"
            />
          </Route>
          <Route path="/project/soccernode">
            <Project
              title="SoccerNode"
              img={soccerNodeImg}
              link="https://soccernode.herokuapp.com/"
              techs={["React", "Scss", "Framer Motion", "AOS"]}
              description="Do you want to find out more about myself and my skills? Just send me an email, I would love to reply! 
              ou want to find out more about myself and my skills? Just send me an email, I would love to reply! "
              linkRepo="https://github.com/giuseppefigliuolo/emme-project"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

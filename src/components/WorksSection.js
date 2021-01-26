import React, { useEffect } from "react";
import HeaderTitle from "./HeaderTitle";
import WorkPreview from "./WorkPreview";

//Images
import soccerNodeImg from "./../imgs/soccernode.png";
import spaziSostenibiliImg from "./../imgs/spazi-sostenibili.png";
import marioMeleImg from "./../imgs/mario-mele.png";
import chatAppImg from "./../imgs/chat-app.png";

const WorksSection = () => {
  return (
    <section id="lavori">
      <HeaderTitle title="I miei lavori" />
      <WorkPreview
        backgroundImg={spaziSostenibiliImg}
        number="01"
        title="Spazi Sostenibili"
      />
      <WorkPreview
        backgroundImg={marioMeleImg}
        reversed={true}
        number="02"
        title="Mario Mele Fashion Designer"
      />
      <WorkPreview
        backgroundImg={soccerNodeImg}
        number="03"
        title="SoccerNode"
      />
      <WorkPreview
        backgroundImg={chatAppImg}
        reversed={true}
        number="04"
        title="My Chat App"
      />
    </section>
  );
};

export default WorksSection;

import React from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./gitHub.scss";
const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: "",
  },
}) => {
  return (
    <div className="card">
      <div className="left">
        <img src={data.image} />
      </div>
      <div className="right">

      <h1>{data.title}</h1>
      <p>{data.description}</p>

      <div className="tags">
        {data.tags.map((tag) => (
            <p className="tag" key={tag}>
            {tag}
          </p>
        ))}
        </div>
      <div className="urls">
        <a href={data.repoLink}>Repository</a>
        <a href={data.demoLink}>Demo Link</a>
      </div>
      </div>
    </div>
  );
};
const Github = () => {
  return (
    <div>
      <MacWindow>
        <div className="cards">
          {githubData.map((project) => {
            return <GitCard key={project.id} data={project} />;
          })}
        </div>
      </MacWindow>
    </div>
  );
};

export default Github;

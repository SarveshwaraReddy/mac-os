import React, { useEffect, useRef, useState } from "react";
import MacWindow from "./MacWindow";
import githubData from "../../assets/github.json";
import "./gitHub.scss";

const localImages = import.meta.glob("../../assets/*", {
  import: "default",
});

const resolveImage = async (imagePath) => {
  if (!imagePath) return "";
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }
  const normalized = imagePath.replace(/^\.?\/?assets\//, "");
  const assetKey = `../../assets/${normalized}`;
  const loader = localImages[assetKey];
  if (!loader) return "";
  return loader();
};

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
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    let isCancelled = false;

    resolveImage(data.image)
      .then((resolved) => {
        if (!isCancelled) {
          setImageSrc(resolved || "");
        }
      })
      .catch(() => {
        if (!isCancelled) {
          setImageSrc("");
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [data.image]);

  return (
    <div className="card">
      <div className="left">
        <img
          src={imageSrc}
          alt={data.title}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
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
        <a href={data.repoLink} target="_blank">Repository</a>
        <a href={data.demoLink} target="_blank">Demo Link</a>
      </div>
      </div>
    </div>
  );
};
const Github = ({windowName,windowsState, setwindowsState}) => {
  const cardsRef = useRef(null);

  return (
    <div>
      <MacWindow windowName={windowName} windowsState={windowsState} setwindowsState={setwindowsState}>
        <div className="cards" ref={cardsRef}>
          {githubData.map((project) => {
            return <GitCard key={project.id} data={project} />;
          })}
        </div>
      </MacWindow>
    </div>
  );
};

export default Github;

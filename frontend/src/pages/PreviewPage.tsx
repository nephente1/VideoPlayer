import React, { useContext } from "react";
import { VideoPlayer } from "../components/VideoPlayer/VideoPlayer";
import { DataContext } from "../components/DataProvider";
import { useParams } from "react-router-dom";

export const PreviewPage: React.FC = () => {
  const { moviesData } = useContext(DataContext);
  const params = useParams();
  const title = moviesData?.find(el => el.imdbID === params.name)?.title;

  return <VideoPlayer title={title} />
};

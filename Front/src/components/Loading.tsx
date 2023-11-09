import React, { useEffect, useRef, useState } from "react";
import "./modude/css/loading.css";
import { hideLoading, initLoading } from "./utils/initLoading";

const Loading = () => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const loadingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    initLoading(setLoadingProgress);
  }, []);

  if(loadingProgress){
    hideLoading();
  }

  return (
    <div ref={loadingRef} className="loading">
      <div className="loading__inner">
        <div
          className="loading__inner-progress"
          style={{ width: `${loadingProgress}%` }}
        ></div>
      </div>
      <div className="loading_percent">{loadingProgress}%</div>
    </div>
  );
};

export default Loading;

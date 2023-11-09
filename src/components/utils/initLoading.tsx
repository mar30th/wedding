import imagesLoaded from "imagesloaded";

export const initLoading = (setLoadingProgress: (percent: number) => void) => {
  let loadedCount = 0;
  let imgs = document.querySelectorAll("img").length;
  let container = document.querySelector("body");

  let imgLoaded = imagesLoaded(container);

  imgLoaded
    .on("progress", (instance: any) => {
      loadedCount++;
      let percent = Math.floor((loadedCount / imgs) * 100);
      setLoadingProgress(percent);
    })
    .on("always", (instance: any) => {
      console.log("always");
    })
    .on("fail", (instance: any) => {
      console.log("fail");
      hideLoading();
    })
    .on("done", (instance: any) => {
      console.log("done");
      hideLoading();
    });
};

export const hideLoading = () => {
  const loading = document.querySelector(".loading");
  loading?.classList.add("--isloaded");
};

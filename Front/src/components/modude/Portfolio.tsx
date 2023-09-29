import React from "react";
import p1 from "../../assets/img/1.jpg";
import p2 from "../../assets/img/2.jpg";

const Portfolio = () => {
  return (
    <div className="md:w-4/5 mx-auto">
      <div className="mx-auto text-2xl md:text-5xl text-center font-semibold ">
        <div className="grid md:grid-cols-12">
          <div className="col-span-12">
            <h2 className="mb-36">The new family members?</h2>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="md:col-span-1">
          <img src={p1} alt="" style={{ height: "444px", width: "566px" }} />
        </div>
        <div className=" text-left p-4 align-self-center allow-drop">
          <h3 className="text-5xl py-5">Mr.Bơ</h3>
          <div className="t">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ducimus laborum beatae reprehenderit voluptatibus cumque magnam
              labore odit? Ad, excepturi perferendis eveniet officiis
              consequuntur unde numquam qui accusantium rerum aliquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              totam nulla numquam reprehenderit, sequi, labore cumque fuga
              officiis, possimus neque accusamus deserunt alias voluptas maiores
              magni fugit molestias mollitia nisi.
            </p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="md:order-1">
          <img src={p1} alt="" style={{ height: "444px", width: "566px" }} />
        </div>
        <div className=" text-left p-4 align-self-center allow-drop">
          <h3 className="text-5xl py-5">Mr.Bơ</h3>
          <div className="t">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              ducimus laborum beatae reprehenderit voluptatibus cumque magnam
              labore odit? Ad, excepturi perferendis eveniet officiis
              consequuntur unde numquam qui accusantium rerum aliquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              totam nulla numquam reprehenderit, sequi, labore cumque fuga
              officiis, possimus neque accusamus deserunt alias voluptas maiores
              magni fugit molestias mollitia nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

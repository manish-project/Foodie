import React from "react";
import aboutimg from "../assets/about.png";
import Button from "../layouts/Button";
function About() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <div className="pr-10">
        <img src={aboutimg} alt="Img" className="w-96" />
      </div>
      <div className="space-y-4 lg:pt-14">
        <h1 className="font-semibold text-6xl text-center md:text-start">
          Why choose us?
        </h1>
        <p className="font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore
          facilis nesciunt quis temporibus rerum sit tempora, nobis animi. Ipsa
          molestiae temporibus sit, odit placeat consequatur modi perferendis a
          voluptate optio cum vitae veniam adipisci similique minus qui
          sapiente, reprehenderit sed explicabo exercitationem ipsum ad. Debitis
          enim reiciendis officia quisquam. Quibusdam cumque officiis facere
          magni delectus, quod repellendus libero! Dolores placeat, corrupti
          dolor magni, cupiditate harum tempore saepe aut porro nulla
          blanditiis! Beatae porro odit aspernatur aperiam placeat quas,
          voluptatem nobis impedit quod quis ipsam reiciendis ex necessitatibus
          vitae repellendus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          corporis odit qui dolores quae explicabo! Nobis nostrum quia fugiat
          quis, dolores debitis expedita quae illo, reiciendis eos dolore
          voluptatem et labore excepturi explicabo sint ducimus obcaecati,
          laudantium rem ullam natus! Saepe omnis nam sed esse atque consectetur
          nostrum cupiditate architecto ipsum ea facere maxime doloremque
          accusantium, totam perspiciatis corporis quisquam maiores earum aut
          assumenda. Itaque quasi vitae qui sapiente dolores sunt quos, earum
          soluta accusamus fugiat porro aperiam! Vero quis aut accusamus harum
          eaque rem iure natus ipsum ad corporis maxime tenetur, ullam officia
          id asperiores, totam, molestiae libero et.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="learn more" />
        </div>
      </div>
    </div>
  );
}

export default About;

import React from "react";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: "/html.png",
      name: "HTML",
    },
    {
      id: 2,
      logo: "/css.jpg",
      name: "CSS",
    },
    {
      id: 3,
      logo: "/java.png",
      name: "Java",
    },
    {
      id: 4,
      logo: "/javascript.png",
      name: "JavaScript",
    },
    {
      id: 5,
      logo: "/oracle.png",
      name: "Oracle",
    },
    {
      id: 6,
      logo: "/spring.png",
      name: "Spring",
    },
    {
      id: 7,
      logo: "/springBoot.jpg",
      name: "Spring Boot",
    }, {
      id: 8,
      logo: "/reactjs.png",
      name: "React",
    },
  ];

  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-xl md:text-2xl font-bold mb-5">Skills</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7">
            {cardItem.map(({ id, logo, name }) => (
              <div
                key={id}
                className="flex flex-col items-center justify-center border-2 rounded-full md:w-[200px] md:h-[200px] shadow-md p-3 cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={logo}
                  alt={`${name} logo`}
                  className="w-[100px] h-[100px] object-contain rounded-full mb-2"
                />
                <div className="text-center font-medium">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Skills;

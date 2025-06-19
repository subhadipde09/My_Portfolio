import React from "react";

function Projects() {
  const projectList = [
    {
      id: 1,
      image: "/weather-forecast.jpg",
      title: "Weather App",
      tech: "Java | JSP | Servlet | OpenWeatherMap API",
      description:
        "A web-based weather forecasting application developed using Java, JSP, and Servlet that integrates the OpenWeatherMap API to provide real-time weather updates. Users can search for any city and instantly view data such as temperature, humidity, and weather conditions. This project highlights API integration, dynamic data handling, and full-stack web development skills.",
      link: "https://github.com/subhadipde09", // Put your GitHub or live link here
    },
     {
      id: 2,
      image: "/Attendance.jpg",
      title: "Automatic Attendance System (FYP)",
      tech: "JavaScript | App Script | Cpp | ESP32 | WiFi",
      description:
        "Developed a real-time automatic attendance system using the ESP32 microcontroller to capture data over WiFi and automatically log it to Google Sheets using App Script. A web dashboard was created using JavaScript for real-time monitoring and management. Enabled wireless, contactless attendance logging for classrooms and offices.",
      link: "https://drive.google.com/file/d/1eZiPvNroqRcE6hirQ2NfzbWrFTzRBUMx/view?usp=sharing", // Put your GitHub or live link here
    },
    // Add more projects here
  ];

  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className=" text-xl md:text-2xl font-bold mb-5">Projects</h1>
          <p className="text-gray-700 mb-8">
            Here are some of the projects I’ve worked on recently:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projectList.map(({ id, image, title, tech, description, link }) => (
              <div
                key={id}
                className="border rounded-lg p-4 shadow-md hover:shadow-2xl transition duration-300"
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-x md:text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-500 mb-2">{tech}</p>
                <p className="text-sm text-justify text-gray-700 mb-4">{description}</p>
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline "
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default Projects;

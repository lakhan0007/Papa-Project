import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Card from "../Components/Cards/NewCard";

function Project() {


  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePGkzr5kLOhGEIKzMh_C757qJV3RZL4w8IeJJg2ZpYA&s",
      title: "AbbuJaan1",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio.",
      button:
        "Go SomeWhere",
    },
    {
      image:
        "https://images.unsplash.com/photo-1715123163355-ed55d7d2bb43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "AbbuJaan2",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio.",
      button:
        "Go SomeWhere",
    },
    {
      image:
       "https://images.unsplash.com/photo-1715114064376-c0a0e9610d6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
      title: "AbbuJaan3",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio.",
      button:
        "Go SomeWhere",
    },
    {
      image:
        "https://images.unsplash.com/photo-1714556982592-dd2eaedf6bea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      title: "AbbuJaan4",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio.",
      button:
        "Go SomeWhere",
    },
  ];


  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <div className="text-center mb-5">
            <h2>Blogs</h2>
          </div>
          <Card CardData={data} />
           <Card
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePGkzr5kLOhGEIKzMh_C757qJV3RZL4w8IeJJg2ZpYA&s"
            }
            title={"AbbuJaan1"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio."
            }
            button={"Go SomeWhere"}
          />
          <Card
            image={
              "https://images.unsplash.com/photo-1715123163355-ed55d7d2bb43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"AbbuJaan2"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio."
            }
            button={"Go SomeWhere"}
          />
          <Card
            image={
              "https://images.unsplash.com/photo-1715114064376-c0a0e9610d6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8"
            }
            title={"AbbuJaan3"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio."
            }
            button={"Go SomeWhere"}
          />
          <Card
            image={
              "https://images.unsplash.com/photo-1714556982592-dd2eaedf6bea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
            }
            title={"AbbuJaan4"}
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis aperiam rem maiores blanditiis nostrum voluptas corrupti eius repellat distinctio."
            }
            button={"Go SomeWhere"}
          /> 



        </div>
      </div>

      <Footer />
    </>
  );
}

export default Project;


















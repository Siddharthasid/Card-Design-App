import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <>
    <Card
      imgsrc="https://wallpapercave.com/wp/wp4056410.jpg"
      title="A Netflix Original Series"
      sname="Dark"
      link="https://www.netflix.com/in/title/80100172"
    />

    <Card
      imgsrc="https://www.hellokpop.com/wp-content/uploads/2020/03/Extracurricular_Pre_Jisoo_Ver_RGB_US-e1584628347973.jpg"
      title="A Netflix Original Series"
      sname="Extra Curricular"
      link="https://www.netflix.com/in/title/80990668"
    />

    <Card
      imgsrc="https://www.behindwoods.com/tamil-movies/slideshow/best-web-series-to-watch-netflix-amazon-prime/images/stranger-things-in-netflix.jpg"
      title="A Netflix Original Series"
      sname="Stranger Things"
      link="https://www.netflix.com/in/title/80057281"
    />
  </>,
  document.getElementById("root")
);

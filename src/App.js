import React, { useEffect, useState } from "react";
import "./App.css";
import Dateinfo from "./Dateinfo";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, Button, ModalHeader } from "reactstrap";

// const sahteData = {
//   date: "1997-01-21",
//   explanation:
//     "In Jules Verne's science fiction classic A Journey to the Center of the Earth, Professor Hardwigg and his fellow explorers encounter many strange and exciting wonders. What wonders lie at the center of our Galaxy? Astronomers now know of some of the bizarre objects which exist there, like vast dust clouds,\r bright young stars, swirling rings of gas, and possibly even a large black hole. Much of the Galactic center region is shielded from our view in visible light by the intervening dust and gas. But it can be explored using other forms of electromagnetic radiation, like radio, infrared, X-rays, and gamma rays. This beautiful high resolution image of the Galactic center region in infrared light was made by the SPIRIT III telescope onboard the Midcourse Space Experiment. The center itself appears as a bright spot near the middle of the roughly 1x3 degree field of view, the plane of the Galaxy is vertical, and the north galactic pole is towards the right. The picture is in false color - starlight appears blue while dust is greenish grey, tending to red in the cooler areas.",
//   hdurl: "https://apod.nasa.gov/apod/image/9701/galcen_msx_big.gif",
//   media_type: "image",
//   service_version: "v1",
//   title: "Journey to the Center of the Galaxy \r\nCredit:",
//   url: "https://apod.nasa.gov/apod/image/9701/galcen_msx.jpg",
// };

function App() {
  const [data, setData] = useState("");
  const [showExplanation, setShowExplantion] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ERLxqVjhe6bMu1Yp5poqoo5AcQajEPJ2fut865zk"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  useEffect(() => {
    console.log("Use Effect Kullanıldı");
  }, [showExplanation]);
  if (data == "") return <div className="App">Sayfa Yükleniyor...</div>;
  return (
    <div className="App">
      <header class="headerclass">
        <div class="boldandlogo">
          <img
            src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
            alt="nasalogo"
          />
          <h2>Astronomy Pitcure of the Day</h2>
        </div>

        <div class="alar">
          <a href="#">
            <h3>About APOD</h3>
          </a>
          <a href="#">
            <h3>Index</h3>
          </a>
          <a href="#">
            <h3>Submissions</h3>
          </a>
          <a href="#">
            <h3>Calendar</h3>
          </a>
          <a href="#">
            <h3>Educiation</h3>
          </a>
          <a href="#">
            <h3>Discuss</h3>
          </a>
        </div>
      </header>

      <br />
      <br />
      <div class="mainpic">{<img src={data.url} alt="PhotooftheDay" />}</div>

      <div class="maindiv">
        <div class="copyright">
          <h2>{data.copyright}</h2>
        </div>
        <div class="date">
          <Dateinfo date={data.date} />
        </div>
      </div>
      <Button
        color={showExplanation ? "danger" : "success"}
        onClick={() => {
          setShowExplantion(!showExplanation);
        }}
      >
        {showExplanation ? (
          <h3>AÇIKLAMAYI GİZLE</h3>
        ) : (
          <h3>AÇIKLAMAYI GÖSTER</h3>
        )}
      </Button>
      <br />
      <br />
      {showExplanation && (
        <div class="explanation">
          <p>{data.explanation}</p>{" "}
        </div>
      )}
    </div>
  );
}

export default App;

import React from "react";
import Footer from "../components/Footer";
import CardRoom from "../components/CardRoom";
import listRoom from "../json/listRoom.json";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="bg-secondary">
      {/* <Header /> */}
      <Header />

      {/*Main*/}
      <div className="row m-0">
        <div
          className="accordion accordion-flush container mt-5 mb-5 col-12 col-sm-10 p-0 p-sm-2"
          id="accordionFlushExample"
        >
          {listRoom.map((room) => {
            return (
              <CardRoom
                key={room.numberRoom}
                numberRoom={room.numberRoom}
                numberEnglish={room.numberEnglish}
                payMonth={room.payMonth}
              />
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;

import React from "react";
import Me from "../assets/img/Me.jpg";

function Iam() {
  return (
    <div className="Iam">
      <p>
        <img src={Me} alt="My_photo" />
        <p className="right">
          Young,
          <br /> promising
          <br /> and confident person.
        </p>
        <br />I easily find a common language with people and I like to develop.
        <br /> I am engaged in programming web applications and I feel that I
        have found myself in this. I want to become a middle developer in a
        couple of years, and after a while I want to become a senior. Big plans
        and big dreams..
      </p>
    </div>
  );
}

export default Iam;
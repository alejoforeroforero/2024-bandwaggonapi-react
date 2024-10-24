import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavHub.module.css";
import calendarImg from "@/assets/nav/hub-calendar.png";
import folderImg from "@/assets/nav/hub-folder.png";
import driveImg from "@/assets/nav/hub-drive.png";
import processImg from "@/assets/nav/hub-process.png";
import historyImg from "@/assets/nav/hub-history.png";
import elementsImg from "@/assets/nav/hub-elements.png";
import homeImg from "@/assets/nav/hub-home.png";

const NavHub = () => {
  const items = [
    {
      id: "m1",
      img: calendarImg,
      link: "/calendar",
    },
    {
      id: "m2",
      img: folderImg,
      link: "/folder",
    },
    {
      id: "m3",
      img: driveImg,
      link: "/folder",
    },
    {
      id: "m4",
      img: processImg,
      link: "/process",
    },
    {
      id: "m5",
      img: historyImg,
      link: "/history",
    },
    {
      id: "m6",
      img: elementsImg,
      link: "/elements",
    },
    {
      id: "m7",
      img: homeImg,
      link: "/home",
    },

    homeImg,
  ];

  const [angle, setAngle] = useState(100);

  // Ángulo ajustado para que los items se distribuyan en 180 grados
  const angleStep = 180 / items.length;

  const rotate = (direction) => {
    setAngle(
      (prevAngle) => prevAngle + (direction === "left" ? angleStep : -angleStep)
    );
  };

  const handleItemClick = (index) => {
    const currentItemAngle = index * angleStep + angle;
    const targetAngle = 180; // El ítem debe terminar abajo en el centro
    const angleToRotate = targetAngle - currentItemAngle;

    let normalizedAngle = angleToRotate;
    while (normalizedAngle > 180) normalizedAngle -= 360;
    while (normalizedAngle < -180) normalizedAngle += 360;

    setAngle((prevAngle) => prevAngle + normalizedAngle);
  };

  let width = -300 + "px";

  return (
    <div className={styles["menu-container"]}>
      <div
        className={styles["menu-circle"]}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={styles["menu-item"]}
            onClick={() => handleItemClick(index)}
            style={{
              "--i": index,
              "--total": items.length,
              "--angle-step": angleStep,
              transform: `
                  rotate(calc(var(--i) * (180deg / var(--total)))) 
                  translate(0, ${width})
                  rotate(calc(-1 * (var(--i) * (180deg / var(--total)) + ${angle}deg)))
                `,
              cursor: "pointer",
            }}
          >
            <Link to={item.link}>
              <img src={item.img} alt="" />
            </Link>
          </div>
        ))}
      </div>
      <div className={styles["controls"]}>
        <button onClick={() => rotate("left")}>⟲ Rotate Left</button>
        <button onClick={() => rotate("right")}>⟳ Rotate Right</button>
      </div>
    </div>
  );
};

export default NavHub;

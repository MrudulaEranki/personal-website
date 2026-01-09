import React, { useState } from 'react';
import "../styles/dinos.css";

export default function FloatingDinos() {
  const [dinos, setDinos] = useState([]);

  const handleClick = (e) => {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    const newDinos = [
      {
        id: Date.now(),
        x: e.clientX + scrollX,
        y: e.clientY + scrollY,
        delay: 0,
      },
      {
        id: Date.now() + 1,
        x: e.clientX + scrollX + 30,
        y: e.clientY + scrollY - 20,
        delay: 50,
      },
      {
        id: Date.now() + 2,
        x: e.clientX + scrollX - 30,
        y: e.clientY + scrollY + 20,
        delay: 100,
      },
    ];

    setDinos((prev) => [...prev, ...newDinos]);

    // Remove dinos after animation (1s)
    setTimeout(() => {
      setDinos((prev) => prev.filter(d => !newDinos.includes(d)));
    }, 1000);
  };

  return (
    <div className="dino_click_container" onClick={handleClick}>
      {dinos.map(d => (
        <img
          key={d.id}
          src={`/dino${(d.id % 3) + 1}.png`} // cycle through 3 dinos
          className="dino_click"
          style={{ left: d.x, top: d.y, animationDelay: `${d.delay}ms` }}
          alt="dino"
        />
      ))}
    </div>
  );
}

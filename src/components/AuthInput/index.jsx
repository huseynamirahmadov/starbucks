import React, { useState } from 'react';
import './AuthInput.css'

const AuthInput = () => {
  const handleClick = (e) => {
    const element = e.currentTarget;
    const circle = element.querySelector(".md-click-circle");
    circle.classList.remove("md-click-animate");
    if (!circle.clientHeight && !circle.clientWidth) {
      const d = Math.max(element.offsetWidth, element.offsetHeight);
      circle.style.height = d + "px";
      circle.style.width = d + "px";
    }
    const x = e.pageX - element.getBoundingClientRect().left - circle.offsetWidth / 2;
    const y = e.pageY - element.getBoundingClientRect().top - circle.offsetHeight / 2;
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';
    circle.classList.add("md-click-animate");
  };

  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
      <div
        className="material-click material-on-me"
        style={{ width: '50%', height: '50%', background: '#F44336', color: '#fff' }}
        onClick={handleClick}
      >
        <span className="md-click-circle"></span>
      </div>
    </div>
  );
};

export default AuthInput;

<template>
    <div class="com__box">
      <!-- loading -->
      <div class="loading"></div>
    </div>
  </template>
  
  <style  scoped>
  .loading {
    display: inline-block;
    position: relative;
  }
  
  .loading::before {
    content: "百事";
    color: #1875e5;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 28px;
    letter-spacing: 2px;
    display: inline-block;
    animation: floating 1s ease-out infinite alternate;
    /* color: linear-gradient(90deg,#7209d4,#2832d4 33%,#00a5b2);; */
  }
  
  .loading::after {
    content: "";
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 0;
    top: 100%;
    filter: blur(4px);
    border-radius: 50%;
    animation: loading-animation 1s ease-out infinite alternate;
  }
  
  @keyframes floating {
    0% {
      transform: translateY(0);
    }
  
    100% {
      transform: translateY(-25px);
    }
  }
  
  @keyframes loading-animation {
    0% {
      transform: scale(0.8);
    }
  
    100% {
      transform: scale(1.2);
    }
  }
  </style>
  
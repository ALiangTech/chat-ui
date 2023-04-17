<template>
    <div class="com__box">
      <!-- loading -->
      <div class="loading">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .loading {
    width: 90px;
    height: 30px;
    position: relative;
  }
  
  .shape {
    width: 8px;
    height: 8px;
    position: absolute;
    top: 36%;
    opacity: 0.5;
  }
  
  .shape-1 {
    background-color: #1875e5;
    left: 10px;
    animation: animationShape1 1.5s ease infinite;
  }
  
  .shape-2 {
    background-color: #c5523f;
    left: 30px;
    animation: animationShape2 1.5s ease infinite 0.5s;
  }
  
  .shape-3 {
    background-color: #499255;
    left: 50px;
    animation: animationShape3 1.5s ease infinite 0.8s;
  }
  
  .shape-4 {
    background-color: #f2b736;
    left: 70px;
    animation: animationShape4 1.5s ease infinite 1s;
  }
  
  @keyframes animationShape1 {
    0% {
      transfrom: scale(1);
      opacity: 0.5;
    }
  
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
  
    100% {
      transfrom: scale(0.5);
      opacity: 0.5;
    }
  }
  
  @keyframes animationShape2 {
    0% {
      transfrom: scale(1);
      opacity: 0.5;
    }
  
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
  
    100% {
      transfrom: scale(0.5);
      opacity: 0.5;
    }
  }
  
  @keyframes animationShape3 {
    0% {
      transfrom: scale(1);
      opacity: 0.5;
    }
  
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
  
    100% {
      transfrom: scale(0.5);
      opacity: 0.5;
    }
  }
  
  @keyframes animationShape4 {
    0% {
      transfrom: scale(1);
      opacity: 0.5;
    }
  
    50% {
      transform: scale(1.5);
      opacity: 1;
    }
  
    100% {
      transfrom: scale(0.5);
      opacity: 0.5;
    }
  }
  </style>
  
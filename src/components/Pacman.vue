<script setup lang="ts"></script>

<template>
  <div id="wrapper">
    <div class="pacman">
      <div class="pacman-top"></div>
      <div class="pacman-bottom"></div>
      <div class="feed"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);

#wrapper {
  background-color: #000;
  border-bottom: solid 5px blue;
  border-top: solid 5px blue;
  overflow-x: hidden;
  padding-bottom: 142px;
  width: 800px;
}

.pacman {
  margin: 40px 10px;
}

.pacman-top {
  background-color: yellow;
  height: 100px;
  width: 200px;
  border-radius: 100px 100px 0 0;
  animation: spin1 0.5s infinite linear;
}

.pacman-bottom {
  background-color: yellow;
  height: 100px;
  width: 200px;
  border-radius: 0 0 100px 100px;
  animation: spin2 0.5s infinite linear;
}

.feed {
  margin-top: -185px;
  margin-left: 15px;
  width: 45px;
  height: 45px;
  border-radius: 30%;
  -moz-animation: eat 1s linear 0s infinite;
  -webkit-animation: eat 1s linear 0s infinite;
  animation: eat 1s linear 0s infinite;
}

/* Animation*/

@keyframes spin1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-35deg);
  }
}

@keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(35deg);
  }
}

@-moz-keyframes spin1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-35deg);
  }
}

@-moz-keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(35deg);
  }
}

@-webkit-keyframes spin1 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-35deg);
  }
}

@-webkit-keyframes spin2 {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(35deg);
  }
}

@keyframes eat {
  0% {
    box-shadow:
      100px 65px 0 0 white,
      300px 65px 0 0 white,
      500px 65px 0 0 white,
      700px 65px 0 0 white,
      900px 65px 0 0 white,
      1100px 65px 0 0 white,
      1300px 65px 0 0 white;
  }

  100% {
    box-shadow:
      0 65px 0 0 white,
      100px 65px 0 0 white,
      300px 65px 0 0 white,
      500px 65px 0 0 white,
      700px 65px 0 0 white,
      900px 65px 0 0 white,
      1100px 65px 0 0 white;
  }
}

@-moz-keyframes eat {
  0% {
    box-shadow:
      100px 65px 0 0 white,
      300px 65px 0 0 white,
      500px 65px 0 0 white,
      700px 65px 0 0 white,
      900px 65px 0 0 white,
      1100px 65px 0 0 white,
      1300px 65px 0 0 white;
  }

  100% {
    box-shadow:
      0 65px 0 0 white,
      100px 65px 0 0 white,
      300px 65px 0 0 white,
      500px 65px 0 0 white,
      700px 65px 0 0 white,
      900px 65px 0 0 white,
      1100px 65px 0 0 white;
  }
}

@-webkit-keyframes eat {
  0% {
    box-shadow:
      100px 65px 0 0 white,
      300px 65px 0 0 white,
      500px 65px 0 0 white,
      700px 65px 0 0 white,
      900px 65px 0 0 white,
      1100px 65px 0 0 white,
      1300px 65px 0 0 white;
  }

  100% {
    box-shadow:
      0 65px 0 0 white,
      100px 65px 0 0 white,
      300px 65px 0 0 white,
      500px 65px 0 0 white,
      700px 65px 0 0 white,
      900px 65px 0 0 white,
      1100px 65px 0 0 white;
  }
}
</style>

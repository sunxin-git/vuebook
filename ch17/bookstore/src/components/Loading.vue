<template>
  <div class="loading">
    <div class="shadow">
      <div class="loader">
        <div class="mask"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>
<style scoped>
.shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  margin-top: -50px;
  margin-left: -50px;
  box-shadow: -2px 2px 10px 0 rgba(0, 0, 0, 0.5),
    2px -2px 10px 0 rgba(255, 255, 255, 0.5);
}

.loader {
  background: -webkit-linear-gradient(
    left,
    skyblue 50%,
    #fafafa 50%
  ); /* Foreground color, Background color */
  border-radius: 100%;
  height: 100px; /* Height and width */
  width: 100px; /* Height and width */
  animation: time 8s steps(500, start) infinite;
}
.mask {
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 50%;
  animation: mask 8s steps(250, start) infinite;
  transform-origin: 100% 50%;
}
@keyframes time {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes mask {
  0% {
    background: #fafafa; /* Background color */
    transform: rotate(0deg);
  }
  50% {
    background: #fafafa; /* Background color */
    transform: rotate(-180deg);
  }
  50.01% {
    background: skyBlue; /* Foreground color */
    transform: rotate(0deg);
  }
  100% {
    background: skyBlue; /* Foreground color */
    transform: rotate(-180deg);
  }
}
</style>
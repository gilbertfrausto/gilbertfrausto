<template>
  <div class="w-full h-full absolute top-0 left-0 pointer-events-none overflow-hidden z-1 opacity-70">
    <div class="circle-container absolute" v-for="index in 200" :key="index">
      <div class="circle w-full h-full particles"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@use "sass:math";

.background {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;

  mask-image: radial-gradient(
    white 0%,
    white 30%,
    transparent 80%,
    transparent
  );
}

.circle-container {
  $particleNum: 200;

  transform: translateY(-10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  .circle {
    border-radius: 50%;
    mix-blend-mode: screen;

    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;

    @keyframes fade-frames {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes scale-frames {
      0% {
        transform: scale3d(0.4, 0.4, 1);
      }

      50% {
        transform: scale3d(2.2, 2.2, 1);
      }

      100% {
        transform: scale3d(0.4, 0.4, 1);
      }
    }
  }

  $particleBaseSize: 8;

  @for $i from 1 through $particleNum {
    &:nth-child(#{$i}) {
      $circleSize: math.random($particleBaseSize);
      width: $circleSize + px;
      height: $circleSize + px;

      $startPositionY: math.random(10) + 75;
      $framesName: "move-frames-" + $i;
      $moveDuration: 28000 + math.random(9000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: math.random(37000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate3d(
            #{math.random(100) + vw},
            #{$startPositionY + vh},
            0
          );
        }

        to {
          transform: translate3d(
            #{math.random(100) + vw},
            #{- $startPositionY - math.random(30) + vh},
            0
          );
        }
      }

      .circle {
        animation-delay: math.random(1000) + ms;
      }
    }
  }
}
</style>

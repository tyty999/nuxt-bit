<template>
  <div id="audio-spinner" class="audio__spinner">
    <div ref="spinner" :spinner-id="id" :style="{ '--color': color }" class="lds-spinner" :class="colorClass">
      <div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div /><div />
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'Spinner',
  props: {
    colorClass: {
      default: '',
      type: String
    },
    color: {
      default: '#fff',
      type: String
    }
  }
}

/**
 * # Documentation of the spinner component
 * * ---
 * name: Spinner
 * menu: Components
 * route: /src/js/components/spinner/spinner.vue
 * ---
 * # Spinner Component
 *
 * The spinner component shows a spinner for DOM events.
 *
 * ## Example
 * ```html
 *  <template>
 *   <div class="flex justify-center items-center">
 *     <spinner
 *       v-show="showSpinner"
 *       :color="spinnerColor"
 *       @click="showSpinner = !showSpinner"
 *     />
 *   </div>
 *  </template>
 *
 * ```js
 *   import Spinner from '@/path/to/spinner.vue';
 *   export default {
 *      name: 'ParentComponent',
 *      data() {
 *        return {
 *          // Initializes show spinner to true.
 *          showSpinner: true,
 *          spinnerColor: '#0062ff'
 *           }
 *         }
 *       }
 * ```
 * ## Demo
 * ![](https://raw.githubusercontent.com/Akkadu/Akkadu_Docs_Resources/master/documentation/components/spinner/spinner-gif.gif?token=AFCBBQRI7I2LI5MALKNCFHK5FB3SC)
 *
 * ## Props
 *
 * |Name|Description|Type|Required|Default|
 * |---|---|---|---|---|
 * |color|Background color of the spinner|`String` |`false`|`#fff || white`|
 */
</script>

<style lang="scss" scoped>
$default-color: rgb(255, 255, 255);

.lds-spinner {
  --color: $default-color;
  width: 32px;
  height: 32px;
  display: inline-block;
  position: relative;
  color: official;
}

.lds-spinner div {
  --color: inherit;
  transform-origin: 16px 16px;
  animation: lds-spinner 1.2s linear infinite;
}

.lds-spinner div::after {
  --color: inherit;
  content: " ";
  width: 2.5px;
  height: 7px;
  display: block;
  position: absolute;
  top: 1.5px;
  left: 14.5px;
  border-radius: 20%;
  background: var(--color)
}

.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}

.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}

.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}

.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}

.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}

.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}

.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}

.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}

.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}

.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}

.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}

.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}

@keyframes lds-spinner {

  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>

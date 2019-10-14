<template>
  <a
    v-if="isLink"
    :id="idName"
    ref="link"
    :href="hrefTo"
    :class="buttonClass"
    class="base-button"
  >
    <template v-if="hasIcon">
      <img :src="iconSrc" class="base-button__icon" alt="img" srcset="">
    </template>
    <div class="base-button__text"><slot /></div>
  </a>
  <button
    v-else
    :id="idName"
    ref="button"
    :class="{buttonClass, 'rounded':rounded}"
    :disabled="disabled"
    class="base-button"
    @click="$emit('click', $event)"
  >
    <template v-if="hasIcon">
      <spinner v-show="isLoading" />
      <img
        v-show="!isLoading"
        :src="iconSrc"
        class="base-button__icon"
        alt="img"
        srcset=""
      >
    </template>
    <div class="base-button__text">
      <slot />
    </div>
  </button>
</template>

<script>
import Spinner from '../progresses/spinner/index.vue'

export default {
  name: 'Button',
  components: {
    Spinner
  },
  props: {
    idName: {
      default: '',
      type: String
    },
    hasIcon: {
      default: false,
      type: Boolean
    },
    isLink: {
      default: false,
      type: Boolean
    },
    hrefTo: {
      default: null,
      type: String
    },
    iconSrc: {
      default: '',
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    buttonText: {
      default: 'Button',
      type: String,
      required: false
    },
    buttonClass: {
      default: '',
      type: String
    },
    buttonType: {
      default: null,
      validator(value) {
        // The value must match one of these strings
        return value.match(/^(default|success|warning|danger|disabled)$/)
      }
    },
    rounded: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      // Logging style colors.
      log: {
        success: '#28a745',
        warning: '#fd7e14',
        error: '#dc3545',
        default: '#0062ff'
      },
      hasButtonType: false
    }
  },

  created() {
    // Button type validation
    if (
      this.buttonType &&
      !this.buttonType.match(/^(default|success|warning|danger|disabled)$/)
    ) {
      console.warn(`%c BaseButton: Unexpected prop "button-type" of '${this.buttonType}'. Expected prop "button-type" of 'default', 'success', 'warning', 'danger' or 'disabled'.`)
    } else {
      this.hasButtonType = true
    }

    // Button vs Link element validation.
    if (this.isLink && !this.hrefTo) {
      console.warn('BaseButton: Expected button with "is-link=\'true\'" prop to have "href-to" attribute. Make sure your that your <base-button> has an "href-to" attribute')
    }
  },
  mounted() {
    if (this.hasButtonType) {
      this.buttonClass = this.buttonType
    }
  }
}
</script>

<style lang="scss">
.base-button {
  width: fit-content;
  height: fit-content;
  margin: 5px;
  padding: 1.2rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--akkadu-blue);
  border-radius: 5px;
  font-weight: 300;
  color: var(--white);
  font-size: 1em;
  box-shadow: var(--button-shadow-lt);
  text-shadow: none;
  transition: all 0.2s ease-out;
  border: none;

  &:hover {
    cursor: pointer;
    opacity: 0.9
  }

  &:active {
    cursor: pointer;
    opacity: 0.9
  }

  &.rounded {
    border-radius: 9999px;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &.default {
    background: var(--akkadu-blue);
    color: var(--white);
  }

  &.success {
    background: var(--success);

    &:hover {
      background: var(--success);
    }
  }

  &.warning {
    background: var(--orange);

    &:hover {
      background: var(--orange);
    }
  }

  &.danger {
    background: var(--danger);

    &:hover {
      background: var(--danger);
    }
  }

  &.disabled {
    background: var(--gray);

    &:hover {
      background: var(--gray);
    }
  }

  &:hover {
    background: #0070ff;
    color: var(--white);
  }

  .base-button__icon {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }

  .audio__spinner {
    height: 30px;
    transform: scale(0.7);

    .lds-spinner {
      width: 30px;
      height: 20px;
    }
  }
}

.fit-container{
  width: 100%;
  height: 100%;
}

.no-pad{
  margin:0px;
  padding:0px;
}

.default {
  background: var(--akkadu-blue);
}

.success {
  background: var(--success);
}

.warning {
  background: var(--orange);
}

.danger {
  background: var(--danger);
}

.disabled {
  background: var(--gray);
}

.base-button__text {
  color: var(--white);
  font-size: 0.75em;
}
</style>

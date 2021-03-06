/* eslint-disable no-restricted-properties */
/* eslint-disable no-cond-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

/**
 * @name EasingFunctions - inspired from http://gizma.com/easing/
 * it only considers the t value for the range [0, 1] => [0, 1]
 */
const EasingFunctions = {
  // no easing, no acceleration
  linear(t) {
    return t
  },

  // accelerating from zero velocity
  easeInQuad(t) {
    return t * t
  },

  // decelerating to zero velocity
  easeOutQuad(t) {
    return t * (2 - t)
  },

  // acceleration until halfway, then deceleration
  easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  },

  // accelerating from zero velocity
  easeInCubic(t) {
    return t * t * t
  },

  // decelerating to zero velocity
  easeOutCubic(t) {
    return --t * t * t + 1
  },

  // acceleration until halfway, then deceleration
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  },

  // accelerating from zero velocity
  easeInQuart(t) {
    return t * t * t * t
  },

  // decelerating to zero velocity
  easeOutQuart(t) {
    return 1 - --t * t * t * t
  },

  // acceleration until halfway, then deceleration
  easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
  },

  // accelerating from zero velocity
  easeInQuint(t) {
    return t * t * t * t * t
  },

  // decelerating to zero velocity
  easeOutQuint(t) {
    return 1 + --t * t * t * t * t
  },

  // acceleration until halfway, then deceleration
  easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
  },

  easeOutElastic(t) {
    const p = 0.3
    return (
      // eslint-disable-next-line no-restricted-properties
      Math.pow(2, -10 * t) * Math.sin(((t - p / 4) * (2 * Math.PI)) / p) + 1
    )
  },

  // for awesome bounce effects
  inBack(t) {
    const s = 1.70158
    return t * t * ((s + 1) * t - s)
  },
  outBack(t) {
    const s = 1.70158
    return --t * t * ((s + 1) * t + s) + 1
  },
  outBounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t
    }
    if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
    }
    if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
    }
    return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375
  },
  inOutElastic(t) {
    let s
    let a = 0.1
    const p = 0.4
    if (t === 0) return 0
    if (t === 1) return 1
    if (!a || a < 1) {
      a = 1
      s = p / 4
    } else s = (p * Math.asin(1 / a)) / (2 * Math.PI)
    if ((t *= 2) < 1) {
      return (
        -0.5 *
        (a *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t - s) * (2 * Math.PI)) / p))
      )
    }
    return (
      a *
        Math.pow(2, -10 * (t -= 1)) *
        Math.sin(((t - s) * (2 * Math.PI)) / p) *
        0.5 +
      1
    )
  },
}

/**
 * @description A simple function used to call any other easing function from easingFunctions.js
 *
 * @example
 * this.pos.x = Ease(EasingFunctions.easeOutQuad, this.animTimer, this.pos.x, this.goalPos.x - this.pos.x, 1)
 * this.pos.y = Ease(EasingFunctions.easeOutQuad, this.animTimer, this.pos.y, this.goalPos.y - this.pos.y, 1)
 *
 * @param {*} func
 * @param {*} time
 * @param {*} start
 * @param {*} finish
 * @param {*} duration
 */
function Ease(func, time, start, finish, duration) {
  // eslint-disable-next-line no-cond-assign
  if ((time /= duration / 2) < 1) {
    return (finish / 2) * func(time) + start
  }
  return (-finish / 2) * (--time * (time - 2) - 1) + start
}

// New Easing function by @Svarog used for GameMessages
function EaseNew(func, time, start, finish, duration) {
  let t = time
  if (time > 1) {
    t = 1
  }
  return finish * func(t) + start
}

// Bezier Effect
function Bezier(t, p0, p1) {
  return p0 + t * (p1 - p0)
}

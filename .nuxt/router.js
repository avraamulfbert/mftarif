import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _56aee2a4 = () => interopDefault(import('../pages/add-ticket.vue' /* webpackChunkName: "pages/add-ticket" */))
const _4636f432 = () => interopDefault(import('../pages/apply.vue' /* webpackChunkName: "pages/apply" */))
const _5e71a544 = () => interopDefault(import('../pages/bank-page.vue' /* webpackChunkName: "pages/bank-page" */))
const _0a16ffad = () => interopDefault(import('../pages/fiskal-check.vue' /* webpackChunkName: "pages/fiskal-check" */))
const _66d79d07 = () => interopDefault(import('../pages/history-money-transition.vue' /* webpackChunkName: "pages/history-money-transition" */))
const _f0971a18 = () => interopDefault(import('../pages/history-transport.vue' /* webpackChunkName: "pages/history-transport" */))
const _248d7420 = () => interopDefault(import('../pages/information.vue' /* webpackChunkName: "pages/information" */))
const _5b74eaad = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _a0aebc9a = () => interopDefault(import('../pages/notification-standart.vue' /* webpackChunkName: "pages/notification-standart" */))
const _30e9288d = () => interopDefault(import('../pages/notification-success.vue' /* webpackChunkName: "pages/notification-success" */))
const _5fd623a6 = () => interopDefault(import('../pages/notification-warning.vue' /* webpackChunkName: "pages/notification-warning" */))
const _0cdf4f6c = () => interopDefault(import('../pages/pay.vue' /* webpackChunkName: "pages/pay" */))
const _556d0243 = () => interopDefault(import('../pages/pay-bank-cards.vue' /* webpackChunkName: "pages/pay-bank-cards" */))
const _2ee81d84 = () => interopDefault(import('../pages/pay-one-ticket.vue' /* webpackChunkName: "pages/pay-one-ticket" */))
const _4d11c9ed = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _69c58825 = () => interopDefault(import('../pages/registration.vue' /* webpackChunkName: "pages/registration" */))
const _dc6570d4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/add-ticket",
    component: _56aee2a4,
    name: "add-ticket"
  }, {
    path: "/apply",
    component: _4636f432,
    name: "apply"
  }, {
    path: "/bank-page",
    component: _5e71a544,
    name: "bank-page"
  }, {
    path: "/fiskal-check",
    component: _0a16ffad,
    name: "fiskal-check"
  }, {
    path: "/history-money-transition",
    component: _66d79d07,
    name: "history-money-transition"
  }, {
    path: "/history-transport",
    component: _f0971a18,
    name: "history-transport"
  }, {
    path: "/information",
    component: _248d7420,
    name: "information"
  }, {
    path: "/login",
    component: _5b74eaad,
    name: "login"
  }, {
    path: "/notification-standart",
    component: _a0aebc9a,
    name: "notification-standart"
  }, {
    path: "/notification-success",
    component: _30e9288d,
    name: "notification-success"
  }, {
    path: "/notification-warning",
    component: _5fd623a6,
    name: "notification-warning"
  }, {
    path: "/pay",
    component: _0cdf4f6c,
    name: "pay"
  }, {
    path: "/pay-bank-cards",
    component: _556d0243,
    name: "pay-bank-cards"
  }, {
    path: "/pay-one-ticket",
    component: _2ee81d84,
    name: "pay-one-ticket"
  }, {
    path: "/profile",
    component: _4d11c9ed,
    name: "profile"
  }, {
    path: "/registration",
    component: _69c58825,
    name: "registration"
  }, {
    path: "/",
    component: _dc6570d4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

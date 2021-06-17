<template>
  <div>
    <img class="head-img" src="../static/head.png">
    <nav
      class="navbar navbar-custom"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <h1 class="brand-title">Личный кабинет пассажира</h1>
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
<b-icon icon="account-circle-outline"></b-icon>
              <a href="/login" id="custom-navbar-item" class="navbar-item">Войти</a>
<b-icon icon="login-variant"></b-icon>
              <a href="/registration" id="custom-navbar-item" class="navbar-item">Регистрация</a>
          </div>
        </div>
      </div>
    </nav>
    <b-tabs type="is-boxed is-centered">
      <b-tab-item label="Билеты" aria-selected="true"></b-tab-item>
      <b-tab-item label="Операции"></b-tab-item>
      <b-tab-item label="Подать заявление"></b-tab-item>
      <b-tab-item label="Информация"></b-tab-item>
      <b-tab-item label="Профиль пользователя"></b-tab-item>
    </b-tabs>
    <nuxt />
    <footer class="footer mt-5">
    </footer>
  </div>
</template>
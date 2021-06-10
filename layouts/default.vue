<template>
  <div>
    <img class="head-img" src="../static/head.png" />
    <nav
      class="navbar navbar-custom"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
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
              <a href="/" class="navbar-item"> Войти </a>
              <a href="/registration" class="navbar-item"> Регистрация </a>
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
      <p>МФ ТАРИФ</p>
    </footer>
  </div>
</template>
<style lang="css">
@font-face {
  font-family: "Montserrat";
  src: url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic");
}
body {
  background: #edf2f8;
}
.navbar-custom {
  height: 4em;
  border-color: #707070;
  background: #02a8b6;
}
.navbar-item, .navbar-link {
  color: #fafafa;
}
.footer {
  background: #02a8b6;
  color: #fafafa;
  width: 100%;
  height: 4em;
  padding: 0 !important;
}
.brand-title {
  color: #fafafa;
  font-size: 24px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
.head-img {
  width: 100%;
  height: 12em;
}
.navbar-end {
  background: #29B2C2;
}
.b-tabs {
  background: #fafafa;
  margin-bottom: 0;
}
.tab-content {
  background: #edf2f8;
}
</style>

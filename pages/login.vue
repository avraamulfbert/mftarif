<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <form action="" class="box custom-login">
          <h1 class="brand-title">Вход в личный кабинет пассажира</h1>
          <div class="field">
            <label for="" class="label custom-label"
              >Адрес электронной почты</label
            >
            <div class="control has-icons-left">
              <input
                type="email"
                placeholder="Введите адрес электронной почты"
                class="input"
                required
              />
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label for="" class="label custom-label">Пароль</label>
            <div class="control has-icons-left">
              <input
                type="password"
                placeholder="Введите пароль"
                class="input"
                required
              />
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <b-button type="is-primary" expanded>Войти</b-button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

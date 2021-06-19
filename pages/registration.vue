<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-4-widescreen">
        <form action="" class="box mb-6 custom-login">
          <h1 class="brand-title">Регистрация в личном кабинете пассажира</h1>
                    <div class="field">
            <label for="" class="label custom-label"
              >Адрес электронной почты</label
            >
            <div class="control">
              <input
                type="email"
                placeholder="Введите адрес электронной почты"
                class="input"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="" class="label custom-label">Ваше имя</label>
            <div class="control">
              <input
                type="name"
                placeholder="Введите имя"
                class="input"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="" class="label custom-label">Ваша фамилия</label>
            <div class="control">
              <input
                type="surname"
                placeholder="Введите Фамилию"
                class="input"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="" class="label custom-label">Пароль</label>
            <div class="control">
              <input
                type="password"
                placeholder="Введите пароль"
                class="input"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="" class="label custom-label">Повторите пароль</label>
            <div class="control">
              <input
                type="password"
                placeholder="Введите пароль"
                class="input"
                required
              />
            </div>
          </div>
          <div class="field">
          <p>
            Согласие на обработку персональных данных
          </p>
              <b-checkbox class="mt-5"
      >cогласен на обработку персональных данных</b-checkbox
    >
    </div>
          <div class="field">
            <b-button type="is-primary" expanded>Регистрация</b-button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

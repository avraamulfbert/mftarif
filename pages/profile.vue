<template>
  <section class="section">
    <div class="columns mt-5 ml-5 mr-5">
      <div class="column is-6">
        <b-field label="Имя пользователя (логин)">
<div class="control">
  <input class="input" type="text" placeholder="Иван Иванов" readonly>
</div>        </b-field>
        <b-field label="Телефон">
<div class="control">
  <input class="input" type="text" placeholder="+7999 999 99" readonly>
</div>        </b-field>
        <b-field label="Пароль">
<div class="control">
  <input class="input" type="text" placeholder="************" readonly>
</div>        </b-field>
      </div>
      <div class="column is-4 is-offset-2">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="../static/avatar.png" />
                </figure>
                <div class="media-right">
                  <div class="box">
                    <p>Ivan Ivanov</p>
                  </div>
                  <div class="box">
                    <img src="../static/auth.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttons mt-4">
          <b-button type="is-primary" expanded>Редактировать профиль</b-button>
        </div>
        <div class="buttons mt-4">
          <b-button type="is-primary" expanded>История пополнения</b-button>
        </div>
      </div>
    </div>
  </section>
</template>
<template>
  <section>
    <div class="columns mt-5 ml-5 mr-5">
      <div class="column is-6">
        <b-field label="Имя пользователя (логин)">
          <b-input v-model="Логин"></b-input>
        </b-field>
        <b-field label="Телефон">
          <b-input v-model="телефон"></b-input>
        </b-field>
        <b-field label="Пароль">
          <b-input v-model="Пароль"></b-input>
        </b-field>
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
<style lang="css">
@font-face {
  font-family: "Montserrat";
  src: url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic");
}
.label {
  color: gray;
}
</style>
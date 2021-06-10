<template>
  <section>
    <div class="container is-max-desktop mt-5">
      <div class="columns is-multiline">
        <div class="column is-4">
          <div class="box p-5 card-pay e-ticket transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">Электронные билеты</p>
              </div>
            </div> 
            <div class="py-5 has-text-centered">
              <a
                class="button is-outline"
                href="/online-pay-bank"
                data-config-id="primary-action"
                >Открыть</a
              >
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="box p-5 card-pay bank-card transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">Банковские карты</p>
              </div>
            </div>
            <div class="py-5 has-text-centered">
              <a
                class="button is-outline"
                href="/online-pay-bank"
                data-config-id="primary-action"
                >Открыть</a
              >
            </div>
          </div>
        </div>
        <div class="column is-4">
          <div class="box p-5 card-pay oneuse-ticket transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">Разовые билеты</p>
              </div>
            </div>
            <div class="py-5 has-text-centered">
              <a
                class="button is-outline"
                href="/online-pay-tickets"
                data-config-id="primary-action"
                >Открыть</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="box box-buy-ticket">
        <button class="button is-primary">+ Добавить ЭБ</button>
      </div>
      <table class="table card-table-content">
        <thead>
          <tr>
            <th><abbr title="Number-client">Номер носителя</abbr></th>
            <th><abbr title="Ticket-type">Тип билета</abbr></th>
            <th><abbr title="Recource">Ресурс, руб</abbr></th>
            <th><abbr title="Summ">Сумма пополнения</abbr></th>
            <th><abbr title="Description">Описание</abbr></th>
            <th><abbr title="Action-button-summ"></abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Number-client">Номер носителя</abbr></th>
            <th><abbr title="Ticket-type">Тип билета</abbr></th>
            <th><abbr title="Recource">Ресурс, руб</abbr></th>
            <th><abbr title="Summ">Сумма пополнения</abbr></th>
            <th><abbr title="Description">Описание</abbr></th>
            <th><abbr title="Action-button-summ"></abbr></th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ (единый электронный билет)</td>
            <td>92</td>
            <td>198</td>
            <td>ЕЭБ</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/bank-page"
                  data-config-id="primary-action"
                  >+ Пополнить</a
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ (единый электронный билет)</td>
            <td>92</td>
            <td>198</td>
            <td>ЕЭБ</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/bank-page"
                  data-config-id="primary-action"
                  >+ Пополнить</a
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ (единый электронный билет)</td>
            <td>92</td>
            <td>198</td>
            <td>ЕЭБ</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/bank-page"
                  data-config-id="primary-action"
                  >+ Пополнить</a
                >
              </div>
            </td>
          </tr>
          <tr class="is-info">
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ (единый электронный билет)</td>
            <td>92</td>
            <td>198</td>
            <td>ЕЭБ</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/bank-page"
                  data-config-id="primary-action"
                  >+ Пополнить</a
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style lang="css">
body {
  background: #fafafa;
}
@font-face {
  font-family: "Montserrat";
  src: url("https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap&subset=cyrillic");
}
@font-face {
  font-family: "Roboto";
  src: url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
}
.title.is-3 {
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
}

.table {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #6b6969;
}
td {
  width: 59%;
}
.table thead {
  background: #02a8b6;
}
.table thead td,
.table thead th {
  color: #fafafa;
}
.card-table-content {
  margin-top: -6em;
}
.box-buy-ticket {
  height: 9em;
}
.tbody {
  font-size: 18px;
}
.transition {
  transition: 0.4s;
}
.card-pay:hover {
  z-index: 9999;
  margin-top: -1.5em;
}
.card-pay {
  width: 310px;
  height: 159px;
  margin-bottom: 2em;
  border-radius: 5px;
}
.oneuse-ticket {
  background-image: url("../static/oneuse-ticket.png");
}
.bank-card {
  background-image: url("../static/bank-card.png");
}
.e-ticket {
  background-image: url("../static/e-ticket.png");
}
.title {
  color: #fefefe;
}
</style>

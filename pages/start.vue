<template>
  <section>
    <div class="container">
      <img class="cards-img" src="../static/podorozhnik-ill-group.png" />
    </div>
    <div class="container custom-container-width">
      <div class="columns is-multiline">
        <div class="column">
          <a href="/pay">
            <div class="box card-pay add-money-ticket">
              <div class="mb-4 is-flex is-align-items-center">
                <p class="title is-3">Пополнить билет</p>
              </div>
            </div>
          </a>
        </div>
        <div class="column">
          <a href="/pay">
            <div class="box card-pay add-receipt-ticket">
              <div class="mb-4 is-flex is-align-items-center">
                <p class="title is-3">Получить фискальный чек</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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
  font-size: 24px;
}
.mt-7 {
  margin-top: 7em;
}
.columns {
  margin-left:0;
  margin-right:0;
}
.table {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #6b6969;
}
.tbody {
  font-size: 18px;
}
.card-pay {
  width: 310px;
  height: 179px;
}

.title {
  color: #fefefe;
}
.is-outline {
  color: #367bf5;
}
.card-table-content {
  margin-top: -10em;
  background: #fefefe;
}
.add-money-ticket {
  background-image: url("../static/add-money-ticket.png");
}
.add-receipt-ticket {
  background-image: url("../static/receipt.png");
}
.cards-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
@media screen and (min-width: 1216px) {
  .container:not(.is-max-desktop):not(.is-max-widescreen) {
    max-width: 960px;
  }
}
.custom-container-width {
  max-width: 960px;
}
</style>

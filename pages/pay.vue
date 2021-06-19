<template>
  <section class="section">
    <div class="container is-max-desktop mt-5">
      <div class="columns is-multiline">
        <div class="column is-4">
          <a href="/pay">
          <div class="box p-5 card-pay e-ticket transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">Электронные билеты</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column is-4">
          <a href="/pay-bank-cards">
          <div class="box p-5 card-pay bank-card transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">Банковские карты</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column is-4">
          <a href="pay-one-ticket">
          <div class="box p-5 card-pay oneuse-ticket transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">Разовые билеты</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="box box-buy-ticket">
        <button class="button is-primary">Добавить электронной билет</button>
      </div>
      <table class="table card-table-content">
        <thead>
          <tr>
            <th><abbr title="Number-client">Номер носителя</abbr></th>
            <th><abbr title="Ticket-type">Тип билета</abbr></th>
            <th><abbr title="Recource">Ресурс</abbr></th>
            <th><abbr title="Summ">Сумма пополнения</abbr></th>
            <th><abbr title="Description">Описание</abbr></th>
            <th><abbr title="Action-button-summ"></abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Number-client">Номер носителя</abbr></th>
            <th><abbr title="Ticket-type">Тип билета</abbr></th>
            <th><abbr title="Recource">Ресурс</abbr></th>
            <th><abbr title="Summ">Сумма пополнения</abbr></th>
            <th><abbr title="Description">Описание</abbr></th>
            <th><abbr title="Action-button-summ"></abbr></th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ</td>
            <td>92₽</td>
            <td>198₽</td>
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
            <td>ЕЭБ</td>
            <td>92₽</td>
            <td>198₽</td>
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
            <td>ЕЭБ</td>
            <td>92₽</td>
            <td>198₽</td>
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
            <td>ЕЭБ</td>
            <td>92₽</td>
            <td>198₽</td>
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
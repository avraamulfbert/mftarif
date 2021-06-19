<template>
  <section class="section">
    <div class="container is-max-desktop mt-5">
      <div class="columns is-multiline">
        <div class="column is-8">
          <a href="/history-money-transition">
          <div class="box p-5 card-pay history-money-traffic transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">Пополнения</p>
              </div>
            </div>
          </div>
          </a>
        </div>
        <div class="column is-4">
          <a href="/history-transport">
          <div class="box p-5 card-pay history-transport transition">
            <div class="mb-4 is-flex is-align-items-center">
              <div>
                <p class="title is-3">История поездок</p>
              </div>
            </div>
          </div>
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <table class="table card-table-content-history">
        <thead>
          <tr>
            <th><abbr title="Number-client">Номер носителя</abbr></th>
            <th><abbr title="Ticket-type">Тип билета</abbr></th>
            <th><abbr title="Recource">Стоимость</abbr></th>
            <th><abbr title="Summ">Дата</abbr></th>
            <th><abbr title="Description">Описание</abbr></th>
            <th><abbr title="Action-button-summ"></abbr></th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th><abbr title="Number-client">Номер носителя</abbr></th>
            <th><abbr title="Ticket-type">Тип билета</abbr></th>
            <th><abbr title="Recource">Стоимость</abbr></th>
            <th><abbr title="Summ">Дата</abbr></th>
            <th><abbr title="Description">Описание</abbr></th>
            <th><abbr title="Action-button-summ"></abbr></th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ</td>
            <td>92</td>
            <td>02/05/2021</td>
            <td>Проезд</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/fiskal-check"
                  data-config-id="primary-action"
                  >Получить чек</a
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ</td>
            <td>92</td>
            <td>02/05/2021</td>
            <td>Проезд</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/fiskal-check"
                  data-config-id="primary-action"
                  >Получить чек</a
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ</td>
            <td>92</td>
            <td>02/05/2021</td>
            <td>Проезд</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/fiskal-check"
                  data-config-id="primary-action"
                  >Получить чек</a
                >
              </div>
            </td>
          </tr>
          <tr>
            <td>7892 4543 2834 7347 8234 7472 84</td>
            <td>ЕЭБ</td>
            <td>92</td>
            <td>02/05/2021</td>
            <td>Проезд</td>
            <td>
              <div class="py-5 has-text-centered">
                <a
                  class="button is-primary"
                  href="/fiskal-check"
                  data-config-id="primary-action"
                  >Получить чек</a
                >
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
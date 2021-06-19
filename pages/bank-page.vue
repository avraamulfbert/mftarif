<template>
  <section class="section">
    <b-collapse
      class="card field-custom-width mt-5 mb-5"
      animation="slide"
      v-for="(collapse, index) of collapses"
      :key="index"
      :open="isOpen == index"
      @open="isOpen = index"
    >
      <template #trigger="props">
        <div class="card-header mt-5" role="button">
          <p class="card-header-title">
            {{ collapse.title }}
          </p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
      </template>
      <div class="card-content">
        <div class="content">
          {{ collapse.text }}
        </div>
      </div>
    </b-collapse>
    <b-checkbox class="mt-5"
      >с порядком пополнения ресурса , правилами пополнения и возрата
      согласен</b-checkbox
    >
    <b-field class="mt-5 bank-field-custom">
      <b-input placeholder="Введите сумму пополнения ЕЭБ"></b-input
      ><b-button type="is-primary">Оплатить</b-button>
    </b-field>
    <img src="../static/pay-system.png" />
    <div class="mt-5">
      <p>
        Минимальная сумма для пополнения - 1₽<br /><br />
        Максимальная сумма для пополнения - 15. 000₽
      </p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      isOpen: 0,
      collapses: [
        {
          title: "Оплата с помощью банковской карты",
          text: 'После нажатия кнопки «Пополнить» Вы будете перенаправлены на защищенную платежную страницу "Газпромбанк" (Акционерное общество), где будет необходимо ввести данные Вашей пластиковой карты. В случае успешной авторизации Вы получите от сайта уведомление о том, что оплата проведена и/или описание порядка получения товара/услуги. К оплате принимаются следующие типы банковских карт: VISA, имеющие трёхзначный код CVV2 Mastercard, имеющие трёхзначный код CVC2 МИР, имеющие трёхзначный код на обратной стороне',
        },
      ],
    };
  },
};
</script>

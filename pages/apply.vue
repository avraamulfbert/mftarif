<template>
<section class="section">
    <div class="columns">
          <div class="column is-12">
 <b-dropdown v-model="Иное" aria-role="list">
        <template v-if="Иное" #trigger>
            <b-button
                label="Иное"
                type="is-outline"
                icon-right="menu-down" />
        </template>

        <template v-else #trigger>
            <b-button
                label="Получение льготной категории"
                type="is-outline"
                icon-right="menu-down" />
        </template>


        <b-dropdown-item :value="true" aria-role="listitem">
            <div class="media">
                <div class="media-content">
                    <h3>Иное</h3>
                    <small>Оформите заявление</small>
                </div>
            </div>
        </b-dropdown-item>

        <b-dropdown-item :value="false" aria-role="listitem">
            <div class="media">
                <div class="media-content">
                    <h3>Получение льготной категории</h3>
                    <small>Оформите заявление</small>
                </div>
            </div>
        </b-dropdown-item>
    </b-dropdown>
          </div>
          </div>
          <div class="box">
<div class="content">
        <p>
          <strong>Заполните заявление</strong>
          <br><br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
      </div>
    </section>
</template>
<style>
button {
    width: 100%;
}
</style>
<script>
    export default {
        data() {
            return {
                isPublic: true
            }
        }
    }
</script>
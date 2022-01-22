<template>
  <nav class="bg-black p-4 fixed top-0 left-0 right-0 z-10">
    <a class="logoHome">
      <img width="30" class="rounded-full" src="/img/logo_nome_letras.jpg" alt="Minilogo contendo as iniciais da página">
    </a>

    <button class="toggleMenuButton">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
  </nav>

</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'

export default {
  computed: {
    fas() {
      return fas
    }
  }
}
</script>

<style scoped>
.logoHome:visited {
  text-decoration: none;
  decoration: none;
}

.toggleMenuButton {
  color: white;
  padding: 3px 10px;
  font-size: 1.5em;
  border: 1px solid grey;
  border-radius: 10px;
}
</style>
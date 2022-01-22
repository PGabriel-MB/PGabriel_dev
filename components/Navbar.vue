<template>
  <nav class="bg-black p-4 flex justify-between content-center fixed top-0 left-0 right-0 z-10">
    <a class="logoHome">
      <img width="30" class="rounded-full" src="/img/logo_nome_letras.jpg" alt="Minilogo contendo as iniciais da página">
    </a>

    <button class="toggleMenuButton" @click="dropDownMenu">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>

    <div class="collapse navbar-collapse hidden" ref="dropDownMenu">
      <ul class="navbar-nav mr-auto navbar-right text-slate-400">
        <li class="nav-item active">
            <a class="nav-link text-slate-400" onclick="closeDropdowNavbar()" href="#home">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-slate-400" onclick="closeDropdowNavbar()" href="#about-me">Sobre mim</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-slate-400" onclick="closeDropdowNavbar()" href="#servicos">Serviços</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-slate-400" onclick="closeDropdowNavbar()" href="#tech-stack"> Tech-Stack</a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-slate-400" onclick="closeDropdowNavbar()" href="#contact">Contato</a>
        </li>
    </ul>
    </div>
  </nav>

</template>

<script>
export default {
  methods: {
    dropDownMenu() {
      this.$refs['dropDownMenu'].classList.remove('hidden')
    }
  }
}
</script>

<style scoped>
.logoHome:visited {
  text-decoration: none;
  decoration: none;
}

.logoHome:focus {
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
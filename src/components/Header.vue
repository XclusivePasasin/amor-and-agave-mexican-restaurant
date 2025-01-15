<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

const isMenuOpen = ref(false); // Estado para controlar el menú
const isScrolled = ref(false); // Estado para el efecto de scroll

// Detecta si la ventana está scrolleando
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// Observa el estado de `isMenuOpen` para bloquear o desbloquear el scroll
watch(isMenuOpen, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add("menu-open"); // Bloquea el scroll
  } else {
    document.documentElement.classList.remove("menu-open"); // Activa el scroll
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="{ 'bg-black/50 backdrop-blur-md': isScrolled, hidden: isMenuOpen }"
  >
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-20">
        <!-- Logo -->
        <button
          @click="isMenuOpen = true"
          class="text-white text-xl font-bold focus:outline-none flex items-center space-x-2"
        >
          <!-- Ícono del menú -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <!-- Text of menú -->
          <p id="rufina-regular">Menu</p>
        </button>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex lg:items-center lg:space-x-8">
          <!-- Número telefónico -->
          <a
            href="#"
            class="relative text-white hover:text-gray-300 transition-colors inline-block px-6 py-2 text-lg font-semibold bg-opacity-0 hover:bg-opacity-10"
          >
            +86 852 346 000
          </a>
          <!-- Botón de reservas -->
          <a
            href="#"
            class="relative text-white hover:text-gray-300 transition-colors inline-block px-6 py-2 text-lg font-semibold border border-white bg-opacity-0 hover:bg-opacity-10"
          >
            Reservations
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isMenuOpen = true"
          class="lg:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <!-- Botón de reservas -->
          <a
            href="#"
            class="relative text-white hover:text-gray-300 transition-colors inline-block px-2 py-1 text-lg font-semibold border border-white bg-opacity-0 hover:bg-opacity-10"
          >
            Reservations
          </a>
        </button>
      </nav>
    </div>
  </header>

  <transition name="fade">
  <!-- Fullscreen Menu -->
  <div
    v-if="isMenuOpen"
    class="fixed inset-0 z-50 bg-black text-white z-[60] flex"
  >
    <!-- Close Button -->
    <button
      @click="isMenuOpen = false"
      style="padding-left: 9%"
      class="absolute top-4 text-white text-3xl focus:outline-none"
      aria-label="Close menu"
    >
      &times;
    </button>

    <!-- Menu Content -->
    <div class="flex w-full bg-gray-main">
      <!-- Left Side: Menu Items -->
      <div
        class="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6 h-full"
      >
        <a href="#" class="text-2xl hover:text-gray-400 transition-colors"
          >Inicio</a
        >
        <a href="#" class="text-2xl hover:text-gray-400 transition-colors"
          >Menú</a
        >
        <a href="#" class="text-2xl hover:text-gray-400 transition-colors"
          >Nosotros</a
        >
        <a href="#" class="text-2xl hover:text-gray-400 transition-colors"
          >Contacto</a
        >
      </div>

      <!-- Right Side: Image -->
      <div class="hidden lg:flex w-1/2 items-center justify-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Menu Imagen"
          class="w-3/4 rounded-lg shadow-lg"
        />
      </div>
    </div>
  </div>
</transition>
</template>

<style scoped>

/* Transición del menú */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

html.menu-open {
  overflow: hidden;
  overscroll-behavior: none;
}
</style>

<template>
  <header class="relative h-screen min-h-[600px] w-full overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/img/img-main-home.png"
        alt="Restaurant ambiance"
        class="h-full w-full object-cover brightness-50"
      />
    </div>
    <!-- Content Overlay -->
    <div
      class="relative h-full flex flex-col items-center justify-center px-4 text-center"
    >
      <!-- Welcome Text -->
      <img src="/img/icon-agave.svg" class="w-16 h-16" alt="icon agave" />
      <div class="mb-4">
        <h2
          id="rufina-regular"
          class="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-4 pb-4 font-serif tracking-wider"
        >
          Welcome To
        </h2>
      </div>

      <!-- Restaurant Name -->
      <div class="space-y-4">
        <img
          src="/img/icon-love-and-agave.png"
          alt="Imagen con tamaño personalizado"
          class="w-full max-w-[600px] h-auto"
        />

        <!-- Separator Line -->
        <div class="flex items-center justify-center space-x-4">
          <div class="h-[1px] w-16 bg-white/60"></div>
          <div class="h-2 w-2 bg-white/60 rotate-45"></div>
          <div class="h-[1px] w-16 bg-white/60"></div>
        </div>
        <!-- Circular Icon -->
        <div class="absolute inset-x-0 bottom-0 flex justify-center">
          <div
            class="w-20 h-20 bg-gold-main rounded-full flex items-center justify-center shadow-lg"
          >
            <img
              src="/img/icon-agave.svg"
              alt="Icon Agave"
              class="w-12 h-12"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

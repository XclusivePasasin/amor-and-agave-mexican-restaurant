<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Features Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="text-center mb-16">
        <p class="text-amber-500 text-sm uppercase tracking-wider mb-2">
          Features
        </p>
        <h2 class="text-4xl md:text-5xl font-light">WHAT'S ON</h2>
      </div>

      <!-- Feature Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <!-- Restaurant Card -->
        <div class="group cursor-pointer bg-gray-900 p-4 rounded-lg shadow-lg">
          <div class="relative overflow-hidden rounded-lg">
            <img
              src="/img/feacture-restaurant.png"
              alt="Restaurant ambiance"
              class="w-full h-auto mx-auto"
            />
          </div>
          <h3 class="text-xl mt-4 text-center text-white">Restaurant</h3>
        </div>

        <!-- Bar & Lounge Card -->
        <div class="group cursor-pointer bg-gray-900 p-4 rounded-lg shadow-lg">
          <div class="relative overflow-hidden rounded-lg">
            <img
              src="/img/feacture-restaurant.png"
              alt="Bar and lounge"
              class="w-full h-auto mx-auto"
            />
          </div>
          <h3 class="text-xl mt-4 text-center text-white">Bar & Lounge</h3>
        </div>

        <!-- Events Card -->
        <div class="group cursor-pointer bg-gray-900 p-4 rounded-lg shadow-lg">
          <div class="relative overflow-hidden rounded-lg">
            <img
              src="/img/feacture-restaurant.png"
              alt="Events and functions"
              class="w-full h-auto mx-auto"
            />
          </div>
          <h3 class="text-xl mt-4 text-center text-white">
            Events & Functions
          </h3>
        </div>
      </div>

      <!-- About Us Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div class="relative overflow-hidden h-80">
          <img
            src=""
            alt="Signature cocktail"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="text-center md:col-span-1">
          <p class="text-amber-500 text-sm uppercase tracking-wider mb-2">
            About Us
          </p>
          <h2 class="text-2xl md:text-3xl font-light mb-4">
            AMOR & AGAVE<br />STORY
          </h2>
          <p class="text-gray-400 mb-6">
            A time-tested foundation of Mexican cuisine mixed with innovative
            cocktails, the Mexican concept brings together the best of both
            worlds.
          </p>
          <button
            class="bg-amber-500 text-black px-8 py-3 hover:bg-amber-600 transition-colors duration-300"
          >
            Read More
          </button>
        </div>

        <div class="relative overflow-hidden h-80">
          <img
            src=""
            alt="Food preparation"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  </div>
</template>

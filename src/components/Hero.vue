<script setup>
import heroImage from '../assets/hero_v2.png'
</script>

<template>
  <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Bright, realistic wedding background -->
    <div 
      class="absolute inset-0 z-0 bg-fixed"
      :style="{ backgroundImage: `url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <div class="absolute inset-0 bg-black/20"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-6xl animate-fade-in-up">
      <div class="mb-10 flex justify-center">
        <!-- Prominent Brand Identity -->
        <div class="flex flex-col items-center">
          <svg width="300" height="80" viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-2xl">
            <path d="M10 40C60 40 100 20 150 20C200 20 240 40 290 40" stroke="#C5A028" stroke-width="1.5" />
            <path d="M150 10C155 15 160 20 150 30C140 20 145 15 150 10Z" fill="#C5A028" />
            <circle cx="10" cy="40" r="3" fill="#C5A028" />
            <circle cx="290" cy="40" r="3" fill="#C5A028" />
          </svg>
          
          <h1 class="text-7xl md:text-[120px] text-white font-serif -mt-10 tracking-tight text-shadow-lg leading-none">
            Fala-me de Amor
          </h1>
          
          <div class="mt-4 w-24 h-px bg-secondary-light/50"></div>
          
          <p class="mt-8 text-xl md:text-2xl text-cream-light font-sans tracking-[0.4em] uppercase font-bold text-shadow opacity-90">
            Dou voz à vossa história
          </p>
        </div>
      </div>

      <div class="mt-16 flex flex-col md:flex-row gap-8 justify-center items-center">
        <a 
          href="#contact" 
          class="px-12 py-5 bg-primary text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-primary-dark transition-all duration-500 rounded-sm shadow-2xl hover:scale-105 active:scale-95"
        >
          Agendar Cerimónia
        </a>
        <a 
          href="#about" 
          class="px-12 py-5 border-2 border-white/40 text-white text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-white/10 transition-all duration-500 rounded-sm backdrop-blur-sm"
        >
          A Nossa Missão
        </a>
      </div>
    </div>

    <!-- More refined Scroll Indicator -->
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
      <span class="text-[10px] text-white tracking-[0.5em] uppercase font-bold">Scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-white selection:to-transparent"></div>
    </div>
  </section>
</template>

<style scoped>
.text-shadow-lg {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<template>
  <section id="hero" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Parallax effect simulation -->
    <div 
      class="absolute inset-0 z-0 scale-110"
      style="background-image: url('/src/assets/hero.png'); background-size: cover; background-position: center;"
    >
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
      <div class="mb-8 inline-block animate-float">
        <!-- Re-creating the logo floral branch accurately in SVG -->
        <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto drop-shadow-lg">
          <!-- Left Branch -->
          <path d="M120 30C90 30 70 15 30 15C20 15 10 20 5 25" stroke="#C5A028" stroke-width="1" />
          <circle cx="5" cy="25" r="2" fill="#C5A028" />
          <path d="M60 22.5C50 15 40 10 30 10" stroke="#C5A028" stroke-width="0.5" />
          <path d="M90 26.5C80 20 75 15 65 15" stroke="#C5A028" stroke-width="0.5" />
          <!-- Right Branch -->
          <path d="M120 30C150 30 170 15 210 15C220 15 230 20 235 25" stroke="#C5A028" stroke-width="1" />
          <circle cx="235" cy="25" r="2" fill="#C5A028" />
          <path d="M180 22.5C190 15 200 10 210 10" stroke="#C5A028" stroke-width="0.5" />
          <path d="M150 26.5C160 20 165 15 175 15" stroke="#C5A028" stroke-width="0.5" />
          <!-- Center Heart (simplified) -->
          <path d="M120 40C125 35 130 30 120 20C110 30 115 35 120 40Z" stroke="#C5A028" stroke-width="1" />
          <path d="M120 25C122 23 124 23 120 28C116 23 118 23 120 25Z" fill="#C5A028" />
        </svg>
      </div>
      
      <h1 class="text-6xl md:text-9xl text-white font-serif mb-6 text-shadow italic font-extralight tracking-tight">
        Fala-me de Amor
      </h1>
      
      <p class="text-lg md:text-xl text-cream-light font-sans tracking-[0.6em] uppercase mb-16 opacity-80 font-light">
        Dou voz à vossa história
      </p>

      <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
        <a 
          href="#contact" 
          class="group relative px-12 py-5 overflow-hidden rounded-sm transition-all duration-500 shadow-2xl"
        >
          <div class="absolute inset-0 bg-primary group-hover:scale-105 transition-transform duration-500"></div>
          <span class="relative z-10 text-white text-[11px] tracking-[0.4em] uppercase font-bold">Agendar Cerimónia</span>
        </a>
        <a 
          href="#about" 
          class="px-12 py-5 border border-white/20 text-white text-[11px] tracking-[0.4em] uppercase hover:bg-white/5 transition-all duration-500 rounded-sm backdrop-blur-[2px] font-medium"
        >
          A Nossa Alma
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
    </div>
  </section>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

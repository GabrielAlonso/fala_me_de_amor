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
      <div class="mb-6 inline-block">
        <!-- Decoration from logo (simplified) -->
        <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20C40 20 50 10 60 10C70 10 80 20 110 20" stroke="#C5A028" stroke-width="2"/>
          <path d="M60 5L65 10L60 15L55 10L60 5Z" fill="#C5A028"/>
        </svg>
      </div>
      
      <h1 class="text-5xl md:text-8xl text-white font-serif mb-4 text-shadow italic font-light">
        Fala-me de Amor
      </h1>
      
      <p class="text-xl md:text-2xl text-cream-light font-sans tracking-[0.3em] uppercase mb-12 opacity-90">
        Dou voz à vossa história
      </p>

      <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
        <a 
          href="#contact" 
          class="px-10 py-4 bg-primary text-white text-sm tracking-[0.2em] uppercase hover:bg-primary-dark transition-all duration-500 rounded-sm shadow-xl hover:translate-y-[-2px]"
        >
          Agendar Cerimónia
        </a>
        <a 
          href="#about" 
          class="px-10 py-4 border border-white/50 text-white text-sm tracking-[0.2em] uppercase hover:bg-white/10 transition-all duration-500 rounded-sm backdrop-blur-sm"
        >
          Saber mais
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

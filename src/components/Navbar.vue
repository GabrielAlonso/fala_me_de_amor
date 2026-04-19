<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav 
    :class="[
      'fixed w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 flex justify-between items-center',
      isScrolled ? 'bg-cream/70 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent'
    ]"
  >
    <div class="flex items-center gap-2">
      <div class="text-primary font-serif text-3xl font-light italic tracking-tight">
        Fala-me de Amor
      </div>
    </div>
    
    <div class="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.3em] uppercase items-center">
      <a href="#hero" class="text-primary/70 hover:text-secondary transition-colors duration-300">Início</a>
      <a href="#about" class="text-primary/70 hover:text-secondary transition-colors duration-300">A História</a>
      <a href="#services" class="text-primary/70 hover:text-secondary transition-colors duration-300">Cerimónias</a>
      <a 
        href="#contact" 
        class="px-5 py-2.5 border border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-500 rounded-sm"
      >
        Contacto
      </a>
    </div>

    <!-- Mobile Button -->
    <div class="md:hidden text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </div>
  </nav>
</template>

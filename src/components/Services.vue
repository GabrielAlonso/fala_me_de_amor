<script setup>
const services = [
  {
    title: 'Casamentos Simbólicos',
    description: 'Cerimónias personalizadas que celebram a união através de ritos significativos e narrativas emocionantes.',
    icon: 'M12 10l-2 2 2 2 2-2-2-2z M22 12a10 10 0 11-20 0 10 10 0 0120 0z'
  },
  {
    title: 'Renovação de Votos',
    description: 'Reafirmar o compromisso e celebrar o caminho percorrido com a maturidade e beleza do amor que cresceu.',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  },
  {
    title: 'Elopements',
    description: 'Para casais que procuram a intimidade absoluta, criamos um momento mágico e poético apenas a dois.',
    icon: 'M12 21l-8.228-9.954A5.367 5.367 0 014 7.636a5.367 5.367 0 011.636-3.818 5.367 5.367 0 013.818-1.636c1.472 0 2.841.59 3.841 1.636L12 5.136l1.305-1.318C14.305 2.772 15.674 2.182 17.146 2.182c1.47 0 2.843.59 3.841 1.636a5.367 5.367 0 011.636 3.818 5.367 5.367 0 01-1.377 3.41L12 21z'
  },
  {
    title: 'Eventos & Galas',
    description: 'Oratória de excelência para eventos corporativos e galas, onde a vossa marca ou história ganha uma voz única e sofisticada.',
    icon: 'M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2 M12 7a4 4 0 100-8 4 4 0 000 8z'
  }
]
</script>

<template>
  <section id="services" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16 space-y-4">
        <h3 class="text-secondary font-sans uppercase tracking-[0.4em] text-xs font-bold">Oferecemos</h3>
        <h2 class="text-4xl md:text-6xl font-serif italic text-primary">A Arte da Celebração</h2>
        <div class="w-24 h-px bg-secondary/30 mx-auto mt-6"></div>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="p-10 border border-cream-dark bg-cream-light/50 hover:bg-cream hover:border-secondary/20 transition-all duration-500 group rounded-sm text-center"
        >
          <div class="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
            <svg class="w-8 h-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="service.icon" />
            </svg>
          </div>
          <h3 class="text-2xl font-serif mb-4 text-primary italic">{{ service.title }}</h3>
          <p class="text-gray-600 font-light leading-relaxed">
            {{ service.description }}
          </p>
          <div class="mt-8">
            <a href="#contact" class="text-xs uppercase tracking-widest text-secondary font-bold hover:text-primary transition-colors inline-flex items-center gap-2">
              Saber Detalhes
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

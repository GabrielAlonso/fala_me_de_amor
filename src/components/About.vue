<template>
  <section id="about" class="py-24 bg-cream overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-row-2 lg:grid-cols-2 gap-16 items-center">
        
        <div class="relative order-2 lg:order-1">
          <div class="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10">
            <img src="/src/assets/about.png" alt="O Celebrante" class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <!-- Decorative Frame -->
          <div class="absolute -top-6 -left-6 w-full h-full border border-secondary/30 rounded-sm -z-0"></div>
          <div class="absolute -bottom-10 -right-10 opacity-10">
            <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 20C100 20 120 60 180 60C180 60 140 80 140 140C140 140 100 120 60 140C60 140 60 80 20 60C20 60 80 60 100 20Z" fill="#5D7B1B"/>
            </svg>
          </div>
        </div>

        <div class="order-1 lg:order-2 space-y-8">
          <div class="inline-block px-4 py-1 border border-secondary/40 rounded-full text-secondary text-xs tracking-widest uppercase font-sans">
            A Nossa Essência
          </div>
          
          <h2 class="text-4xl md:text-6xl text-primary font-serif italic">
            Celebrar a Vida através das Palavras
          </h2>
          
          <div class="space-y-6 text-gray-700 font-sans leading-relaxed text-lg font-light">
            <p>
              Acreditamos que cada história de amor é uma obra de arte única, tecida com fios de momentos, olhares e promessas. No <span class="font-medium text-primary">Fala-me de Amor</span>, a nossa missão é transformar essas memórias em palavras que ressoam na alma.
            </p>
            <p>
              Não criamos apenas cerimónias; damos voz ao que muitas vezes não se consegue dizer. Mergulhamos no vosso universo para entender os vossos silêncios e os vossos risos, criando um momento que é inteiramente vosso.
            </p>
            <p class="font-serif italic text-2xl text-secondary pt-4">
              "Porque cada amor merece ser ouvido."
            </p>
          </div>

          <div class="pt-8 grid grid-cols-2 gap-8">
            <div>
              <h4 class="text-primary font-serif font-bold text-3xl mb-1">150+</h4>
              <p class="text-xs text-gray-500 uppercase tracking-widest">Histórias Contadas</p>
            </div>
            <div>
              <h4 class="text-primary font-serif font-bold text-3xl mb-1">8 Anos</h4>
              <p class="text-xs text-gray-500 uppercase tracking-widest">De Experiência</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

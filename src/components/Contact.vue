<template>
  <section id="contact" class="py-24 bg-cream">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="mb-16">
        <h2 class="text-4xl md:text-6xl font-serif italic text-primary mb-4">Vamos escrever o vosso capítulo?</h2>
        <p class="text-gray-600 font-light max-w-2xl mx-auto">
          Partilhem a vossa visão e deixem que o Fala-me de Amor ajude a tornar esse momento eterno. Respondemos com carinho a todas as mensagens.
        </p>
      </div>

      <form class="grid md:grid-cols-2 gap-8 text-left bg-white p-12 rounded-sm shadow-sm border border-secondary/10">
        <div class="space-y-2">
          <label class="text-xs uppercase tracking-widest text-primary font-bold">Nomes</label>
          <input type="text" placeholder="Ex: Maria & João" class="w-full bg-cream p-4 border border-cream-dark focus:border-secondary outline-none transition-colors duration-300 font-light" />
        </div>
        <div class="space-y-2">
          <label class="text-xs uppercase tracking-widest text-primary font-bold">E-mail</label>
          <input type="email" placeholder="osvossos@email.com" class="w-full bg-cream p-4 border border-cream-dark focus:border-secondary outline-none transition-colors duration-300 font-light" />
        </div>
        <div class="space-y-2 md:col-span-2">
          <label class="text-xs uppercase tracking-widest text-primary font-bold">Data Prevista</label>
          <input type="text" placeholder="Ex: 24 de Agosto de 2024" class="w-full bg-cream p-4 border border-cream-dark focus:border-secondary outline-none transition-colors duration-300 font-light" />
        </div>
        <div class="space-y-2 md:col-span-2">
          <label class="text-xs uppercase tracking-widest text-primary font-bold">A vossa história em poucas palavras</label>
          <textarea rows="4" placeholder="Contem-nos um pouco sobre vocês..." class="w-full bg-cream p-4 border border-cream-dark focus:border-secondary outline-none transition-colors duration-300 font-light resize-none"></textarea>
        </div>
        <div class="md:col-span-2 pt-4">
          <button type="submit" class="w-full py-5 bg-primary text-white text-sm tracking-[0.4em] uppercase hover:bg-primary-dark transition-all duration-500 rounded-sm shadow-lg">
            Enviar Mensagem
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

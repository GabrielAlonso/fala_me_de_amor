<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import SpeakerHighlight from './components/SpeakerHighlight.vue'
import Services from './components/Services.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-cream selection:bg-secondary/30 selection:text-primary">
    <Navbar />
    <main>
      <Hero />
      <About />
      <SpeakerHighlight />
      <Services />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<template>
  <!-- Página raiz "/" — agrega todos os componentes de seção da landing page -->
  <main>
    <!-- Seção hero: primeira dobra com apresentação da barbearia -->
    <AppHero />

    <!-- Seção sobre nós: apresentação da história e valores da barbearia -->
    <AppSobre />

    <!-- Seção de serviços: grid com os cortes disponíveis e preços -->
    <AppServicos />

    <!-- Seção de contato: informações e mapa de localização -->
    <AppContato />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

// Impede que o browser restaure o scroll da visita anterior e força topo
onMounted(() => {
  if (typeof window !== 'undefined') {
    history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
})
</script>

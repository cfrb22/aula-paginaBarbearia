<template>
  <!-- =========================================================
    CardServico.vue
    Card reutilizável para exibir um serviço/corte da barbearia.
    A imagem preenche o card inteiro, nome e preço flutuam sobre ela.
  ========================================================== -->
  <div class="group relative overflow-hidden rounded-xl cursor-pointer" style="aspect-ratio: 3/4;">

    <!-- Imagem do corte — ocupa todo o card -->
    <img
      :src="imagem"
      :alt="nome"
      class="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
    />

    <!-- Overlay gradiente — sempre visível na base para leitura do texto -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <!-- Linha âmbar que aparece no hover — detalhe de ação -->
    <div class="absolute top-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

    <!-- Informações na base do card -->
    <div class="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">

      <!-- Nome do corte -->
      <span class="font-display text-cream font-semibold text-lg leading-tight">{{ nome }}</span>

      <!-- Preço em destaque -->
      <span class="font-sans text-amber font-bold text-base shrink-0 ml-2">R$ {{ preco }}</span>

    </div>

  </div>
</template>

<script setup>
// ── Props recebidas pelo componente ───────────────────────────
defineProps({
  // Caminho da imagem do corte
  imagem: { type: String, required: true },
  // Nome do corte
  nome:   { type: String, required: true },
  // Preço do corte (ex: "45,00")
  preco:  { type: String, required: true }
})
</script>

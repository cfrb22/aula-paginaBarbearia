<template>
  <!-- =========================================================
    CardServico.vue
    Card reutilizável para exibir um serviço/corte da barbearia.
    Recebe via props: a imagem, o nome do corte e o preço.
  ========================================================== -->
  <div class="bg-graphite rounded-2xl overflow-hidden flex flex-col">

    <!-- Imagem do corte — proporção quadrada (1:1) -->
    <div class="w-full aspect-square overflow-hidden">
      <img
        :src="imagem"
        :alt="nome"
        class="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
      />
    </div>

    <!-- Informações do corte: nome e preço -->
    <div class="flex items-center justify-between px-4 py-4">

      <!-- Nome do corte -->
      <span class="text-cream font-semibold text-base">{{ nome }}</span>

      <!-- Preço do corte — destacado em âmbar -->
      <span class="text-amber font-bold text-lg">R$ {{ preco }}</span>

    </div>

  </div>
</template>

<script setup>
// ── Props recebidas pelo componente ───────────────────────────
defineProps({
  // Caminho da imagem do corte
  imagem: {
    type: String,
    required: true
  },
  // Nome do corte
  nome: {
    type: String,
    required: true
  },
  // Preço do corte (ex: "45,00")
  preco: {
    type: String,
    required: true
  }
})
</script>

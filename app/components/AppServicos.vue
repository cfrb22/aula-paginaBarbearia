<template>
  <!-- =========================================================
    AppServicos.vue
    Seção de serviços da landing page.
    Fundo escuro (moss) para contrastar com a seção "Sobre" clara.
    Exibe os cortes disponíveis em grid usando o CardServico.
  ========================================================== -->
  <section class="bg-moss py-24 px-6 lg:px-12">

    <div class="max-w-7xl mx-auto flex flex-col gap-12">

      <!-- Cabeçalho da seção -->
      <div class="flex flex-col gap-4 text-center">

        <!-- Label de seção -->
        <span class="text-amber text-xs font-semibold uppercase tracking-widest">
          O que oferecemos
        </span>

        <!-- Título -->
        <h2 class="text-cream text-4xl lg:text-5xl font-bold leading-tight">
          Nossos serviços
        </h2>

        <!-- Subtítulo -->
        <p class="text-sage text-lg max-w-xl mx-auto">
          Cortes pensados para valorizar o seu estilo, executados com precisão e técnica.
        </p>

      </div>

      <!-- Grid de cards de serviços — 4 colunas no desktop, 2 no tablet, 1 no mobile -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <!-- Card: Buzz Cut com Fade -->
        <CardServico
          imagem="/imagens/Buzz Cut com Fade.jpg"
          nome="Buzz Cut com Fade"
          preco="45,00"
        />

        <!-- Card: Low Taper Fade -->
        <CardServico
          imagem="/imagens/Low Taper Fade.jpg"
          nome="Low Taper Fade"
          preco="55,00"
        />

        <!-- Card: Modern Mullet -->
        <CardServico
          imagem="/imagens/Modern Mullet.jpg"
          nome="Modern Mullet"
          preco="60,00"
        />

        <!-- Card: Textured Crop -->
        <CardServico
          imagem="/imagens/Textured Crop.jpg"
          nome="Textured Crop"
          preco="50,00"
        />

      </div>

    </div>

  </section>
</template>

<script setup>
// Import explícito do componente de card de serviço
import CardServico from '~/components/CardServico.vue'
</script>

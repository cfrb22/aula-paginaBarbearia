<template>
  <!-- =========================================================
    AppServicos.vue
    Seção de serviços da landing page.
    Fundo escuro (moss) para contrastar com a seção "Sobre" clara.
    Exibe os cortes disponíveis em grid usando o CardServico.
  ========================================================== -->
  <!-- id="servicos" permite que o botão "Ver serviços" do Hero role até aqui -->
  <section id="servicos" class="bg-[#1e2a1f] py-28 px-8 lg:px-16">

    <div class="max-w-7xl mx-auto flex flex-col gap-14">

      <!-- Cabeçalho alinhado à esquerda — mais editorial, menos template -->
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div class="flex flex-col gap-4">
          <!-- Label com linha -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-px bg-amber" />
            <span class="text-amber text-xs font-sans font-medium uppercase tracking-[0.2em]">
              O que oferecemos
            </span>
          </div>

          <!-- Título -->
          <h2 class="font-display text-cream font-bold leading-[1.1]" style="font-size: clamp(2rem, 4vw, 3.25rem);">
            Nossos serviços
          </h2>
        </div>

        <!-- Subtítulo à direita no desktop -->
        <p class="text-sage font-sans text-sm leading-relaxed max-w-xs lg:text-right">
          Cortes pensados para valorizar o seu estilo, executados com precisão e técnica.
        </p>

      </div>

      <!-- Grid de cards — 4 colunas no desktop, 2 no tablet, 1 no mobile -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <!-- Card: Buzz Cut com Fade -->
        <CardServico imagem="/imagens/Buzz Cut com Fade.jpg" nome="Buzz Cut com Fade" preco="45,00" />

        <!-- Card: Low Taper Fade -->
        <CardServico imagem="/imagens/Low Taper Fade.jpg" nome="Low Taper Fade" preco="55,00" />

        <!-- Card: Modern Mullet -->
        <CardServico imagem="/imagens/Modern Mullet.jpg" nome="Modern Mullet" preco="60,00" />

        <!-- Card: Textured Crop -->
        <CardServico imagem="/imagens/Textured Crop.jpg" nome="Textured Crop" preco="50,00" />

      </div>

    </div>

  </section>
</template>

<script setup>
// Import explícito do componente de card de serviço
import CardServico from '~/components/CardServico.vue'
</script>

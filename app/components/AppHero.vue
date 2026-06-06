<template>
  <!-- =========================================================
    AppHero.vue
    Seção hero da landing page — primeira dobra visível ao entrar no site.
    Layout em duas colunas: texto à esquerda, imagem à direita.
  ========================================================== -->
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#111a11] via-moss to-[#1e1e1e]">

    <!-- Textura sutil de ruído no fundo — dá profundidade sem parecer genérico -->
    <div class="absolute inset-0 opacity-[0.03]"
      style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E');
      background-size: 200px;" />

    <!-- Linha vertical decorativa no lado esquerdo -->
    <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber/20 to-transparent hidden lg:block" />

    <!-- Container principal com grid de duas colunas -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      <!-- ── Coluna esquerda: conteúdo de texto ── -->
      <div class="flex flex-col gap-7">

        <!-- Label com linha lateral — estilo editorial -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-px bg-amber" />
          <span class="text-amber text-xs font-sans font-medium uppercase tracking-[0.2em]">
            Barbearia Premium
          </span>
        </div>

        <!-- Título principal com tipografia serifada editorial -->
        <h1 class="font-display text-cream font-bold leading-[1.1]" style="font-size: clamp(2.5rem, 5vw, 4rem);">
          O corte certo <br />
          <em class="text-amber not-italic">transforma</em> <br />
          sua imagem.
        </h1>

        <!-- Divisor sutil -->
        <div class="w-12 h-px bg-amber/40" />

        <!-- Subtexto descritivo -->
        <p class="text-sage font-sans text-base leading-[1.8] max-w-sm">
          Tradição, precisão e estilo em cada atendimento.
          Agende agora e sinta a diferença de um serviço feito com maestria.
        </p>

        <!-- Botões CTA -->
        <div class="flex flex-wrap gap-3 mt-1">
          <!-- Botão primário: abre o WhatsApp da barbearia em nova aba -->
          <AppButton variant="primary" href="https://wa.me/5527999999999" target="_blank">
            Agendar agora
          </AppButton>

          <!-- Botão outline: rola a página até a seção de serviços via âncora #servicos -->
          <AppButton variant="outline" href="#servicos">
            Ver serviços
          </AppButton>
        </div>

        <!-- Credencial discreta — ancora o design no mundo real -->
        <p class="text-sage/50 font-sans text-xs tracking-widest uppercase mt-2">
          Est. 2014 &nbsp;·&nbsp; Espírito Santo
        </p>

      </div>

      <!-- ── Coluna direita: imagem ── -->
      <div class="flex items-center justify-end">

        <div class="relative shrink-0">

          <!-- Bloco âmbar deslocado atrás da imagem — cria profundidade sem parecer genérico -->
          <div class="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-amber/10 border border-amber/20" />

          <!-- Imagem do barbeiro -->
          <img
            src="/imagens/hero.webp"
            alt="Barbeiro realizando corte de cabelo no cliente"
            class="relative block w-[460px] h-[460px] max-w-full object-cover object-center rounded-2xl"
            style="box-shadow: 0 32px 80px rgba(0,0,0,0.5);"
          />

        </div>

      </div>

    </div>

    <!-- Linha âmbar na base — transição suave para próxima seção -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

  </section>
</template>

<script setup>
// Import explícito do componente de botão reutilizável
import AppButton from '~/components/AppButton.vue'
</script>

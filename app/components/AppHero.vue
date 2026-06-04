<template>
  <!-- =========================================================
    AppHero.vue
    Seção hero da landing page — primeira dobra visível ao entrar no site.
    Layout em duas colunas: texto à esquerda, imagem à direita.
    Fundo com degradê escuro (charcoal → moss → graphite) + brilhos âmbar decorativos.
  ========================================================== -->
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-charcoal via-moss to-graphite">

    <!-- Brilho âmbar desfocado no canto superior direito — efeito de luz ambiente -->
    <div class="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl bg-amber" />

    <!-- Brilho âmbar desfocado no canto inferior esquerdo — equilíbrio visual -->
    <div class="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl bg-amber" />

    <!-- Container principal com grid de duas colunas -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- ── Coluna esquerda: conteúdo de texto ── -->
      <div class="flex flex-col gap-6">

        <!-- Label acima do título — identifica a marca/categoria -->
        <span class="text-amber text-xs font-semibold uppercase tracking-widest">
          Barbearia Premium
        </span>

        <!-- Título principal com palavra de destaque em âmbar -->
        <h1 class="text-cream text-5xl lg:text-6xl font-bold leading-tight">
          O corte certo <br />
          <span class="text-amber">transforma</span> <br />
          sua imagem.
        </h1>

        <!-- Subtexto descritivo — reforça a proposta de valor -->
        <p class="text-sage text-lg leading-relaxed max-w-md">
          Tradição, precisão e estilo em cada atendimento.
          Agende agora e sinta a diferença de um serviço feito com maestria.
        </p>

        <!-- Grupo de botões CTA usando o componente AppButton -->
        <div class="flex flex-wrap gap-4 mt-2">
          <!-- Botão primário: abre o WhatsApp da barbearia em nova aba -->
          <AppButton
            variant="primary"
            href="https://wa.me/5527999999999"
            target="_blank"
          >
            Agendar agora
          </AppButton>

          <!-- Botão outline: rola a página até a seção de serviços via âncora #servicos -->
          <AppButton
            variant="outline"
            href="#servicos"
          >
            Ver serviços
          </AppButton>
        </div>

      </div>

      <!-- ── Coluna direita: área da imagem ── -->
      <div class="flex items-center justify-center">

        <!-- Wrapper: dimensão definida pela própria img (480x480), moldura posicionada relativa a ele -->
        <div class="relative shrink-0">

          <!-- Moldura decorativa âmbar — fica exatamente em volta da imagem sem sair dos limites -->
          <div class="absolute inset-0 border-2 border-amber opacity-30 rounded-2xl" />

          <!-- Imagem do barbeiro: dimensões 480x480 aplicadas diretamente no elemento -->
          <img
            src="/imagens/hero.webp"
            alt="Barbeiro realizando corte de cabelo no cliente"
            class="block w-[480px] h-[480px] max-w-full object-cover object-center rounded-2xl border border-white/10"
          />

        </div>

      </div>

    </div>

    <!-- Linha âmbar sutil na base da seção — separador visual para a próxima seção -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber to-transparent opacity-40" />

  </section>
</template>

<script setup>
// Import explícito do componente de botão reutilizável
import AppButton from '~/components/AppButton.vue'
</script>

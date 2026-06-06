<template>
  <!-- =========================================================
    AppServicos.vue
    Seção de serviços da landing page.
    Fundo escuro (moss) para contrastar com a seção "Sobre" clara.
    Exibe os cortes disponíveis em grid usando o CardServico.
    Efeito: digitação progressiva no título ao entrar na viewport.
  ========================================================== -->
  <!-- id="servicos" permite que o botão "Ver serviços" do Hero role até aqui -->
  <section ref="secaoRef" id="servicos" class="bg-[#1e2a1f] py-28 px-8 lg:px-16">

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

          <!-- Título com efeito de digitação — ativado ao entrar na viewport -->
          <h2 class="font-display text-cream font-bold leading-[1.1] min-h-[1.2em]" style="font-size: clamp(2rem, 4vw, 3.25rem);">
            {{ tituloExibido }}<span v-if="digitando" class="cursor-blink-claro">|</span>
          </h2>
        </div>

        <!-- Subtítulo à direita no desktop -->
        <p class="text-sage font-sans text-sm leading-relaxed max-w-xs lg:text-right">
          Cortes pensados para valorizar o seu estilo, executados com precisão e técnica.
        </p>

      </div>

      <!-- Rolagem horizontal no mobile/tablet — grid de 4 colunas apenas no desktop -->
      <!-- -mx-8 px-8 estende a área de scroll até as bordas da tela no mobile -->
      <div class="cards-scroll flex gap-4 overflow-x-auto pb-4 -mx-8 px-8 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0">

        <!-- Cada card tem largura fixa no mobile para a rolagem funcionar bem -->
        <!-- No desktop o lg:w-full deixa o grid controlar a largura -->

        <!-- Card: Buzz Cut com Fade -->
        <div class="shrink-0 w-[72vw] max-w-[280px] snap-start lg:w-full lg:max-w-full">
          <CardServico imagem="/imagens/Buzz Cut com Fade.jpg" nome="Buzz Cut com Fade" preco="45,00" />
        </div>

        <!-- Card: Low Taper Fade -->
        <div class="shrink-0 w-[72vw] max-w-[280px] snap-start lg:w-full lg:max-w-full">
          <CardServico imagem="/imagens/Low Taper Fade.jpg" nome="Low Taper Fade" preco="55,00" />
        </div>

        <!-- Card: Modern Mullet -->
        <div class="shrink-0 w-[72vw] max-w-[280px] snap-start lg:w-full lg:max-w-full">
          <CardServico imagem="/imagens/Modern Mullet.jpg" nome="Modern Mullet" preco="60,00" />
        </div>

        <!-- Card: Textured Crop -->
        <div class="shrink-0 w-[72vw] max-w-[280px] snap-start lg:w-full lg:max-w-full">
          <CardServico imagem="/imagens/Textured Crop.jpg" nome="Textured Crop" preco="50,00" />
        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Import explícito do componente de card de serviço
import CardServico from '~/components/CardServico.vue'

// ── Efeito de digitação ativado por IntersectionObserver ──────────

// Referência ao elemento <section> para observar visibilidade
const secaoRef = ref(null)

// Texto completo do título
const textoCompleto = 'Nossos serviços'

// Texto exibido progressivamente
const tituloExibido = ref('')

// Controla visibilidade do cursor
const digitando = ref(false)

// Garante que a animação dispare apenas uma vez
const animacaoIniciada = ref(false)

let observer = null

const iniciarDigitacao = () => {
  digitando.value = true
  let char = 0

  const digitar = () => {
    if (char <= textoCompleto.length) {
      tituloExibido.value = textoCompleto.slice(0, char)
      char++
      setTimeout(digitar, 65)
    } else {
      digitando.value = false
    }
  }

  setTimeout(digitar, 200)
}

onMounted(() => {
  // IntersectionObserver: inicia digitação quando a seção entra ~25% na tela
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !animacaoIniciada.value) {
        animacaoIniciada.value = true
        iniciarDigitacao()
      }
    },
    { threshold: 0.25 }
  )
  if (secaoRef.value) observer.observe(secaoRef.value)
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* Esconde a scrollbar mas mantém a funcionalidade de rolagem horizontal */
.cards-scroll::-webkit-scrollbar { display: none; }
.cards-scroll { -ms-overflow-style: none; scrollbar-width: none; }

/* Cursor âmbar piscante para fundo escuro (seção de serviços) */
.cursor-blink-claro {
  display: inline-block;
  color: #C9A84C;
  animation: piscar-claro 0.8s step-end infinite;
  font-weight: 300;
}

@keyframes piscar-claro {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>

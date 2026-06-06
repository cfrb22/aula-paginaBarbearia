<template>
  <!-- =========================================================
    AppServicos.vue
    Seção de serviços da landing page.
    Mobile/tablet: carrossel com setas de navegação.
    Desktop (lg): grid de 4 colunas fixo.
    Efeito: digitação progressiva no título ao entrar na viewport.
  ========================================================== -->
  <section ref="secaoRef" id="servicos" class="bg-[#1e2a1f] py-28 px-8 lg:px-16">

    <div class="max-w-7xl mx-auto flex flex-col gap-14">

      <!-- Cabeçalho -->
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div class="flex flex-col gap-4">
          <!-- Label com linha -->
          <div class="flex items-center gap-3">
            <div class="w-8 h-px bg-amber" />
            <span class="text-amber text-xs font-sans font-medium uppercase tracking-[0.2em]">
              O que oferecemos
            </span>
          </div>

          <!-- Título com efeito de digitação -->
          <h2 class="font-display text-cream font-bold leading-[1.1] min-h-[1.2em]" style="font-size: clamp(2rem, 4vw, 3.25rem);">
            {{ tituloExibido }}<span v-if="digitando" class="cursor-blink-claro">|</span>
          </h2>
        </div>

        <!-- Subtítulo à direita no desktop -->
        <p class="text-sage font-sans text-sm leading-relaxed max-w-xs lg:text-right">
          Cortes pensados para valorizar o seu estilo, executados com precisão e técnica.
        </p>

      </div>

      <!-- ── Carrossel (mobile/tablet) + Grid (desktop) ── -->
      <div class="flex flex-col gap-4">

        <!-- Trilho de cards: scroll horizontal no mobile, grid no desktop -->
        <div
          ref="containerRef"
          class="cards-scroll flex gap-4 overflow-x-auto pb-2 -mx-8 px-8 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:mx-0 lg:px-0"
          @scroll="atualizarNavegacao"
        >
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

        <!-- Setas de navegação — visíveis apenas no mobile/tablet -->
        <div class="flex items-center justify-center gap-3 lg:hidden">

          <!-- Seta esquerda -->
          <button
            @click="rolarEsquerda"
            :disabled="!podeRolarEsquerda"
            aria-label="Card anterior"
            class="seta-nav"
            :class="podeRolarEsquerda ? 'seta-ativa' : 'seta-inativa'"
          >
            <!-- Ícone seta esquerda -->
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <!-- Indicador de posição — pontinhos por card -->
          <div class="flex gap-1.5">
            <span
              v-for="(_, i) in 4"
              :key="i"
              class="w-1.5 h-1.5 rounded-full transition-all duration-300"
              :class="cardAtivo === i ? 'bg-amber w-4' : 'bg-sage/40'"
            />
          </div>

          <!-- Seta direita -->
          <button
            @click="rolarDireita"
            :disabled="!podeRolarDireita"
            aria-label="Próximo card"
            class="seta-nav"
            :class="podeRolarDireita ? 'seta-ativa' : 'seta-inativa'"
          >
            <!-- Ícone seta direita -->
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import CardServico from '~/components/CardServico.vue'

// ── Carrossel: navegação por setas ────────────────────────────────

// Referência ao elemento de scroll dos cards
const containerRef = ref(null)

// Controla se cada seta está habilitada
const podeRolarEsquerda = ref(false)
const podeRolarDireita  = ref(true)

// Índice do card visível atual (para os pontinhos indicadores)
const cardAtivo = ref(0)

// Atualiza o estado das setas e dos pontinhos ao rolar
const atualizarNavegacao = () => {
  if (!containerRef.value) return
  const { scrollLeft, scrollWidth, clientWidth } = containerRef.value
  podeRolarEsquerda.value = scrollLeft > 2
  podeRolarDireita.value  = scrollLeft < scrollWidth - clientWidth - 2
  // Calcula qual card está mais visível baseado na posição do scroll
  const larguraCard = clientWidth * 0.72
  cardAtivo.value = Math.round(scrollLeft / larguraCard)
}

// Avança um card para a direita
const rolarDireita = () => {
  if (!containerRef.value) return
  const largura = containerRef.value.clientWidth * 0.76
  containerRef.value.scrollBy({ left: largura, behavior: 'smooth' })
}

// Volta um card para a esquerda
const rolarEsquerda = () => {
  if (!containerRef.value) return
  const largura = containerRef.value.clientWidth * 0.76
  containerRef.value.scrollBy({ left: -largura, behavior: 'smooth' })
}

// ── Digitação no título: IntersectionObserver ─────────────────────

const secaoRef = ref(null)
const textoCompleto  = 'Nossos serviços'
const tituloExibido  = ref('')
const digitando      = ref(false)
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
  // Observa a seção para disparar a digitação
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

  // Verifica o estado inicial das setas após montagem
  if (containerRef.value) atualizarNavegacao()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* Esconde a scrollbar mantendo a rolagem funcionando */
.cards-scroll::-webkit-scrollbar { display: none; }
.cards-scroll { -ms-overflow-style: none; scrollbar-width: none; }

/* Seta base: círculo com borda */
.seta-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  border: 1px solid;
  transition: background-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;
  cursor: pointer;
}

/* Seta habilitada: borda âmbar, ícone âmbar, hover preenche */
.seta-ativa {
  border-color: rgba(201, 168, 76, 0.5);
  color: #C9A84C;
  background-color: transparent;
}
.seta-ativa:hover {
  background-color: #C9A84C;
  border-color: #C9A84C;
  color: #1A1A1A;
}

/* Seta desabilitada: apagada, sem interação */
.seta-inativa {
  border-color: rgba(143, 154, 143, 0.2);
  color: rgba(143, 154, 143, 0.3);
  cursor: not-allowed;
}

/* Cursor âmbar piscante no título */
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

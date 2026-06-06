<template>
  <!-- =========================================================
    AppHero.vue
    Seção hero da landing page.
    Efeitos: texto com digitação progressiva + imagem com animação 3D.
  ========================================================== -->
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#111a11] via-moss to-[#1e1e1e]">

    <!-- Textura sutil no fundo -->
    <div class="absolute inset-0 opacity-[0.03]"
      style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E'); background-size: 200px;" />

    <!-- Linha vertical decorativa -->
    <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber/20 to-transparent hidden lg:block" />

    <!-- Container principal -->
    <div class="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      <!-- ── Coluna esquerda: texto ── -->
      <!-- overflow-hidden garante que a máquina de fundo não vaze para fora da coluna -->
      <div class="relative flex flex-col overflow-hidden">

        <!-- Máquina de corte vintage — fundo decorativo, -28° de ângulo, aparece ao carregar -->
        <!-- mix-blend-mode: screen faz partes escuras desaparecerem no fundo dark do hero -->
        <img
          src="/imagens/maquina_barbearia_comprimida.webp"
          alt=""
          aria-hidden="true"
          class="absolute pointer-events-none select-none maquina-fundo"
          style="
            top: 50%; left: 50%;
            height: 115%; width: auto; max-width: none;
            transform: translate(-50%, -50%) rotate(-28deg);
            mix-blend-mode: screen;
          "
        />

        <!-- Conteúdo textual acima da imagem de fundo -->
        <div class="relative z-10 flex flex-col gap-7">

        <!-- Label editorial -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-px bg-amber" />
          <span class="text-amber text-xs font-sans font-medium uppercase tracking-[0.2em]">
            Barbearia Premium
          </span>
        </div>

        <!-- Título com efeito de digitação — cada linha aparece progressivamente -->
        <h1 class="font-display text-cream font-bold leading-[1.1]" style="font-size: clamp(2.5rem, 5vw, 4rem);">
          <!-- Linha 1: texto normal creme -->
          <span class="block min-h-[1.1em]">
            {{ linhas[0] }}<span v-if="linhaAtual === 0" class="cursor-blink">|</span>
          </span>
          <!-- Linha 2: destaque em âmbar itálico -->
          <em class="text-amber not-italic block min-h-[1.1em]">
            {{ linhas[1] }}<span v-if="linhaAtual === 1" class="cursor-blink">|</span>
          </em>
          <!-- Linha 3: texto normal creme -->
          <span class="block min-h-[1.1em]">
            {{ linhas[2] }}<span v-if="linhaAtual === 2" class="cursor-blink">|</span>
          </span>
        </h1>

        <!-- Divisor — aparece após digitação terminar -->
        <div class="w-12 h-px bg-amber/40 transition-opacity duration-500" :class="digitacaoConcluida ? 'opacity-100' : 'opacity-0'" />

        <!-- Subtexto — aparece após digitação terminar -->
        <p class="text-sage font-sans text-base leading-[1.8] max-w-sm transition-all duration-700"
          :class="digitacaoConcluida ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
          Tradição, precisão e estilo em cada atendimento.
          Agende agora e sinta a diferença de um serviço feito com maestria.
        </p>

        <!-- Botões — aparecem após digitação terminar -->
        <div class="flex flex-wrap gap-3 mt-1 transition-all duration-700 delay-200"
          :class="digitacaoConcluida ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'">
          <AppButton variant="primary" href="https://wa.me/5527999999999" target="_blank">
            Agendar agora
          </AppButton>
          <AppButton variant="outline" href="#servicos">
            Ver serviços
          </AppButton>
        </div>

        <!-- Credencial -->
        <p class="text-sage/50 font-sans text-xs tracking-widest uppercase mt-2 transition-opacity duration-700 delay-300"
          :class="digitacaoConcluida ? 'opacity-100' : 'opacity-0'">
          Est. 2014 &nbsp;·&nbsp; Espírito Santo
        </p>

        </div><!-- fim do wrapper de conteúdo z-10 -->

      </div><!-- fim da coluna esquerda -->

      <!-- ── Coluna direita: imagem 3D ── -->
      <div class="flex items-center justify-end">

        <!-- Wrapper 3D — detecta movimento do mouse para o efeito de tilt -->
        <div
          ref="wrapperRef"
          class="relative shrink-0 hero-3d-wrapper"
          @mousemove="onMouseMove"
          @mouseleave="onMouseLeave"
          :style="wrapperStyle"
        >
          <!-- Bloco de profundidade atrás da imagem -->
          <div class="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-amber/10 border border-amber/20" />

          <!-- Imagem com animação de entrada 3D -->
          <img
            src="/imagens/hero.webp"
            alt="Barbeiro realizando corte de cabelo no cliente"
            class="relative block w-[460px] h-[460px] max-w-full object-cover object-center rounded-2xl hero-img-entrada"
            style="box-shadow: 0 32px 80px rgba(0,0,0,0.5);"
          />

        </div>

      </div>

    </div>

    <!-- Linha âmbar na base -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppButton from '~/components/AppButton.vue'

// ── Efeito de digitação ───────────────────────────────────────────

// Textos completos de cada linha do título
const textos = ['O corte certo', 'transforma', 'sua imagem.']

// Linhas exibidas progressivamente (começam vazias)
const linhas = ref(['', '', ''])

// Índice da linha sendo digitada no momento (-1 = concluído)
const linhaAtual = ref(0)

// Flag que libera a animação dos elementos abaixo do título
const digitacaoConcluida = ref(false)

onMounted(() => {
  let linha = 0
  let char = 0

  // Digita caractere por caractere com delay entre linhas
  const digitar = () => {
    if (linha >= textos.length) {
      // Digitação concluída — mostra o restante do conteúdo
      linhaAtual.value = -1
      digitacaoConcluida.value = true
      return
    }

    if (char <= textos[linha].length) {
      linhas.value[linha] = textos[linha].slice(0, char)
      char++
      setTimeout(digitar, 65) // velocidade de digitação em ms
    } else {
      char = 0
      linha++
      linhaAtual.value = linha
      setTimeout(digitar, 250) // pausa entre linhas
    }
  }

  // Pequeno delay antes de começar para a página carregar
  setTimeout(digitar, 600)
})

// ── Efeito 3D de tilt na imagem ───────────────────────────────────

const wrapperRef = ref(null)

// Estilo dinâmico aplicado ao wrapper — atualizado pelo movimento do mouse
const wrapperStyle = ref({
  transform: 'perspective(900px) rotateY(0deg) rotateX(0deg)',
  transition: 'transform 0.4s ease'
})

// Calcula o ângulo de rotação baseado na posição do mouse dentro do elemento
const onMouseMove = (e) => {
  if (!wrapperRef.value) return
  const rect = wrapperRef.value.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 a +0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5   // -0.5 a +0.5

  wrapperStyle.value = {
    transform: `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 10}deg) scale(1.02)`,
    transition: 'transform 0.08s ease'
  }
}

// Volta para posição neutra ao sair do elemento
const onMouseLeave = () => {
  wrapperStyle.value = {
    transform: 'perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)',
    transition: 'transform 0.6s ease'
  }
}
</script>

<style scoped>
/* Cursor piscante no efeito de digitação */
.cursor-blink {
  display: inline-block;
  color: #C9A84C;
  animation: piscar 0.8s step-end infinite;
  font-weight: 300;
}

@keyframes piscar {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* Animação de entrada 3D da imagem — vem de dentro para fora */
.hero-img-entrada {
  animation: entrada3D 1.2s cubic-bezier(0.23, 1, 0.32, 1) 0.3s both;
}

@keyframes entrada3D {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateZ(-180px) scale(0.75);
  }
  65% {
    opacity: 1;
    transform: perspective(1000px) translateZ(18px) scale(1.03);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateZ(0px) scale(1);
  }
}

/* Garante que o tilt 3D funcione corretamente */
.hero-3d-wrapper {
  transform-style: preserve-3d;
  will-change: transform;
}

/* Máquina de fundo: revela ao carregar a página com fade + drift leve */
/* Delay de 0.4s para aparecer assim que a página abre, antes da digitação terminar */
.maquina-fundo {
  animation: revelar-maquina 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
}

@keyframes revelar-maquina {
  0%   { opacity: 0;    transform: translate(-50%, -50%) rotate(-28deg) scale(0.88); }
  60%  { opacity: 0.11; transform: translate(-50%, -50%) rotate(-28deg) scale(1.01); }
  100% { opacity: 0.09; transform: translate(-50%, -50%) rotate(-28deg) scale(1);    }
}
</style>

<template>
  <!-- =========================================================
    AppButton.vue
    Botão reutilizável com dois estilos controlados pela prop "variant":
      - "primary"  → fundo âmbar sólido (ação principal, ex: Agendar)
      - "outline"  → borda âmbar transparente (ação secundária, ex: Ver serviços)

    Quando a prop "href" é fornecida, renderiza como <a> (link).
    Sem "href", renderiza como <button> comum.
    O conteúdo é passado via slot.
  ========================================================== -->

  <!-- Renderiza como link quando href for fornecido -->
  <a
    v-if="href"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="buttonClasses"
  >
    <slot />
  </a>

  <!-- Renderiza como botão quando não tiver href -->
  <button v-else :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
// ── Props ──────────────────────────────────────────────────────
const props = defineProps({
  // Define o estilo visual: "primary" (padrão) | "outline"
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline'].includes(value)
  },
  // Se fornecido, o componente renderiza como <a> apontando para esse endereço
  href: {
    type: String,
    default: null
  },
  // Controla onde o link abre: "_blank" abre em nova aba
  target: {
    type: String,
    default: '_self'
  }
})

// ── Classes dinâmicas ──────────────────────────────────────────
// Classes base compartilhadas pelos dois estilos
const baseClasses = 'inline-flex items-center justify-center font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded transition-colors duration-200'

// Classes específicas de cada variante
const variantClasses = {
  primary: 'bg-amber hover:bg-amber-shadow text-charcoal',
  outline: 'border border-amber text-amber hover:bg-amber hover:text-charcoal'
}

// Combina as classes base com as da variante selecionada
const buttonClasses = `${baseClasses} ${variantClasses[props.variant]}`
</script>

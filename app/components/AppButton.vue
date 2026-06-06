<template>
  <!-- =========================================================
    AppButton.vue
    Botão reutilizável com dois estilos pela prop "variant":
      - "primary"  → fundo âmbar sólido (ação principal)
      - "outline"  → borda âmbar (ação secundária)
    Com "href" renderiza como <a>, sem href como <button>.
  ========================================================== -->
  <a v-if="href" :href="href" :target="target"
    :rel="target === '_blank' ? 'noopener noreferrer' : undefined"
    :class="classes">
    <slot />
  </a>
  <button v-else :class="classes">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  // Estilo visual: "primary" (padrão) | "outline"
  variant: { type: String, default: 'primary', validator: v => ['primary', 'outline'].includes(v) },
  // Se fornecido, renderiza como <a>
  href:    { type: String, default: null },
  // Controla onde o link abre
  target:  { type: String, default: '_self' }
})

// Classes base — sans-serif, sem bordas arredondadas excessivas
const base = 'inline-flex items-center justify-center font-sans font-semibold text-xs uppercase tracking-[0.15em] px-7 py-3.5 rounded transition-all duration-200'

const variants = {
  primary: 'bg-amber hover:bg-amber-shadow text-charcoal',
  outline: 'border border-amber/60 text-amber hover:bg-amber hover:border-amber hover:text-charcoal'
}

const classes = `${base} ${variants[props.variant]}`
</script>

<template>
  <!-- =========================================================
    AppButton.vue
    Botão reutilizável com dois estilos controlados pela prop "variant":
      - "primary"  → fundo âmbar sólido (ação principal, ex: Agendar)
      - "outline"  → borda âmbar transparente (ação secundária, ex: Ver serviços)
    O conteúdo do botão é passado via slot, permitindo qualquer texto ou ícone.
  ========================================================== -->
  <button :class="buttonClasses">
    <!-- Slot padrão: recebe o texto ou conteúdo do botão -->
    <slot />
  </button>
</template>

<script setup>
// ── Props ──────────────────────────────────────────────────────
const props = defineProps({
  // Define o estilo visual do botão
  // Valores aceitos: "primary" (padrão) | "outline"
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'outline'].includes(value)
  }
})

// ── Classes dinâmicas ──────────────────────────────────────────
// Classes base compartilhadas pelos dois estilos
const baseClasses = 'font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded transition-colors duration-200'

// Classes específicas de cada variante
const variantClasses = {
  primary: 'bg-amber hover:bg-amber-shadow text-charcoal',
  outline: 'border border-amber text-amber hover:bg-amber hover:text-charcoal'
}

// Combina as classes base com as da variante selecionada
const buttonClasses = `${baseClasses} ${variantClasses[props.variant]}`
</script>

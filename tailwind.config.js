/** @type {import('tailwindcss').Config} */

// Configuração do Tailwind CSS
// Define as cores customizadas da identidade visual da barbearia
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // ── Cores Principais ──────────────────────────────────
        moss:    '#2C3B2D',   // Verde musgo escuro — fundos, footer, cards escuros
        amber:   '#C9A84C',   // Dourado âmbar — botões, CTAs, textos sobre fundo escuro
        cream:   '#F5F1EB',   // Off-white creme — fundo geral das seções claras

        // ── Cores Secundárias ─────────────────────────────────
        charcoal:       '#1A1A1A',  // Preto carvão — títulos e corpo de texto
        graphite:       '#3D3D3D',  // Cinza grafite — cards da equipe, overlays de foto
        'amber-shadow': '#A0842D',  // Dourado sombra — hover e bordas douradas
        sage:           '#8F9A8F',  // Cinza sage — textos de suporte, subtítulos
      }
    }
  },
  plugins: []
}

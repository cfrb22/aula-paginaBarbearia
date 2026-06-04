// Configuração principal do Nuxt
// Define módulos, plugins e comportamento global da aplicação
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Ativa o painel de desenvolvimento do Nuxt (desativar em produção)
  devtools: { enabled: false },

  // Arquivo CSS global com reset de scroll e estilos base
  css: ['~/assets/css/main.css'],

  // Módulos instalados:
  // @nuxtjs/tailwindcss — integra o Tailwind CSS ao Nuxt, lendo o tailwind.config.js
  modules: ['@nuxtjs/tailwindcss'],

  vite: {
    vue: {
      template: {
        // Desativa a transformação de URLs de assets no template Vue
        // Necessário para que imagens da pasta public/ sejam tratadas como URLs estáticas
        // e não como módulos a serem resolvidos pelo Rollup no build
        transformAssetUrls: false
      }
    }
  }
})

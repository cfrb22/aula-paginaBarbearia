// Configuração principal do Nuxt
// Define módulos, plugins e comportamento global da aplicação
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  // Ativa o painel de desenvolvimento do Nuxt (desativar em produção)
  devtools: { enabled: false },

  // Arquivo CSS global com reset de scroll e estilos base
  css: ['~/assets/css/main.css'],

  // Carrega as fontes do Google Fonts no <head> de todas as páginas
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap'
        }
      ]
    }
  },

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

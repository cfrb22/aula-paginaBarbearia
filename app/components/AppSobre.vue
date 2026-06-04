<template>
  <!-- =========================================================
    AppSobre.vue
    Seção "Sobre Nós" da landing page.
    Layout em duas colunas: texto à esquerda, imagem à direita.
    Fundo claro (cream) para contrastar com o hero escuro.
  ========================================================== -->
  <section class="bg-cream py-24 px-6 lg:px-12">

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- ── Coluna esquerda: texto de apresentação ── -->
      <div class="flex flex-col gap-6">

        <!-- Label de seção — identifica o bloco de conteúdo -->
        <span class="text-amber text-xs font-semibold uppercase tracking-widest">
          Sobre nós
        </span>

        <!-- Título da seção -->
        <h2 class="text-charcoal text-4xl lg:text-5xl font-bold leading-tight">
          Tradição e maestria <br />
          em cada <span class="text-moss">detalhe.</span>
        </h2>

        <!-- Texto de apresentação da barbearia -->
        <p class="text-graphite text-lg leading-relaxed">
          Fundada com a missão de oferecer mais do que um corte oferecemos uma experiência.
          Nossa equipe é formada por profissionais apaixonados pela arte da barbearia,
          combinando técnicas tradicionais com as tendências mais modernas do mercado.
        </p>

        <p class="text-graphite text-lg leading-relaxed">
          Cada cliente que entra pela nossa porta é tratado com atenção única,
          porque acreditamos que um bom corte começa com uma boa conversa.
        </p>

        <!-- Separador decorativo âmbar -->
        <div class="w-16 h-1 bg-amber rounded-full" />

        <!-- Destaques numéricos da barbearia -->
        <div class="flex gap-10 mt-2">
          <div class="flex flex-col gap-1">
            <span class="text-moss text-3xl font-bold">+10</span>
            <span class="text-sage text-sm">Anos de experiência</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-moss text-3xl font-bold">+5k</span>
            <span class="text-sage text-sm">Clientes atendidos</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-moss text-3xl font-bold">98%</span>
            <span class="text-sage text-sm">Satisfação</span>
          </div>
        </div>

        <!-- Subtítulo da lista de diferenciais -->
        <h3 class="text-charcoal text-lg font-semibold mt-2">Nossos diferenciais:</h3>

        <!-- Diferenciais da barbearia — listados com ícone de check âmbar -->
        <ul class="flex flex-col gap-3 mt-4">
          <li class="flex items-center gap-3 text-graphite">
            <span class="w-5 h-5 rounded-full bg-amber flex items-center justify-center shrink-0">
              <svg class="w-3 h-3 text-charcoal" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Atendimento personalizado para cada cliente
          </li>
          <li class="flex items-center gap-3 text-graphite">
            <span class="w-5 h-5 rounded-full bg-amber flex items-center justify-center shrink-0">
              <svg class="w-3 h-3 text-charcoal" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Profissionais certificados e em constante atualização
          </li>
          <li class="flex items-center gap-3 text-graphite">
            <span class="w-5 h-5 rounded-full bg-amber flex items-center justify-center shrink-0">
              <svg class="w-3 h-3 text-charcoal" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Produtos premium nacionais e importados
          </li>
          <li class="flex items-center gap-3 text-graphite">
            <span class="w-5 h-5 rounded-full bg-amber flex items-center justify-center shrink-0">
              <svg class="w-3 h-3 text-charcoal" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Ambiente exclusivo e agendamento sem filas
          </li>
        </ul>

      </div>

      <!-- ── Coluna direita: imagem da fachada ── -->
      <div class="flex items-center justify-center">

        <!-- Wrapper: tamanho definido pela imagem, moldura posicionada relativa a ele -->
        <div class="relative shrink-0">

          <!-- Moldura decorativa âmbar em volta da imagem -->
          <div class="absolute inset-0 border-2 border-amber opacity-30 rounded-2xl" />

          <!-- Imagem da fachada — proporção retrato (largura menor que altura), ratio 3:4 -->
          <img
            src="/imagens/frente.jpg"
            alt="Fachada da barbearia"
            class="block w-[480px] h-[640px] max-w-full object-cover object-center rounded-2xl"
          />

        </div>

      </div>

    </div>

  </section>
</template>

<template>
  <!-- =========================================================
    AppSobre.vue
    Seção "Sobre Nós" da landing page.
    Layout em duas colunas: texto à esquerda, imagem à direita.
    Fundo claro (cream) para contrastar com o hero escuro.
  ========================================================== -->
  <section class="bg-cream py-28 px-8 lg:px-16">

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      <!-- ── Coluna esquerda: texto de apresentação ── -->
      <div class="flex flex-col gap-8">

        <!-- Label com linha lateral -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-px bg-amber" />
          <span class="text-amber text-xs font-sans font-medium uppercase tracking-[0.2em]">
            Sobre nós
          </span>
        </div>

        <!-- Título serifado -->
        <h2 class="font-display text-charcoal font-bold leading-[1.1]" style="font-size: clamp(2rem, 4vw, 3.25rem);">
          Tradição e maestria <br />em cada detalhe.
        </h2>

        <!-- Texto de apresentação -->
        <div class="flex flex-col gap-4 max-w-lg">
          <p class="text-graphite font-sans text-base leading-[1.8]">
            Fundada com a missão de oferecer mais do que um corte — oferecemos uma experiência.
            Nossa equipe é formada por profissionais apaixonados pela arte da barbearia,
            combinando técnicas tradicionais com as tendências mais modernas do mercado.
          </p>
          <p class="text-graphite font-sans text-base leading-[1.8]">
            Cada cliente é tratado com atenção única, porque acreditamos que um bom corte
            começa com uma boa conversa.
          </p>
        </div>

        <!-- Destaques numéricos — layout horizontal com divisores -->
        <div class="flex gap-0 mt-2 border-t border-charcoal/10">
          <div class="flex flex-col gap-1 pt-6 pr-10 border-r border-charcoal/10">
            <span class="font-display text-moss text-4xl font-bold">+10</span>
            <span class="text-sage font-sans text-xs uppercase tracking-widest">Anos</span>
          </div>
          <div class="flex flex-col gap-1 pt-6 px-10 border-r border-charcoal/10">
            <span class="font-display text-moss text-4xl font-bold">+5k</span>
            <span class="text-sage font-sans text-xs uppercase tracking-widest">Clientes</span>
          </div>
          <div class="flex flex-col gap-1 pt-6 pl-10">
            <span class="font-display text-moss text-4xl font-bold">98%</span>
            <span class="text-sage font-sans text-xs uppercase tracking-widest">Satisfação</span>
          </div>
        </div>

        <!-- Diferenciais — estilo minimalista com traço em vez de ícone circular -->
        <div class="flex flex-col gap-0 mt-2">
          <p class="text-charcoal font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-4">
            Nossos diferenciais
          </p>
          <ul class="flex flex-col">
            <li class="flex items-center gap-4 py-3 border-b border-charcoal/8 text-graphite font-sans text-sm">
              <span class="w-4 h-px bg-amber shrink-0" />
              Atendimento personalizado para cada cliente
            </li>
            <li class="flex items-center gap-4 py-3 border-b border-charcoal/8 text-graphite font-sans text-sm">
              <span class="w-4 h-px bg-amber shrink-0" />
              Profissionais certificados e em constante atualização
            </li>
            <li class="flex items-center gap-4 py-3 border-b border-charcoal/8 text-graphite font-sans text-sm">
              <span class="w-4 h-px bg-amber shrink-0" />
              Produtos premium nacionais e importados
            </li>
            <li class="flex items-center gap-4 py-3 text-graphite font-sans text-sm">
              <span class="w-4 h-px bg-amber shrink-0" />
              Ambiente exclusivo e agendamento sem filas
            </li>
          </ul>
        </div>

      </div>

      <!-- ── Coluna direita: imagem da fachada ── -->
      <div class="flex items-center justify-center">

        <div class="relative shrink-0">

          <!-- Bloco de cor sólida deslocado — cria profundidade sem efeito genérico -->
          <div class="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-moss/15" />

          <!-- Imagem da fachada — proporção retrato 3:4 -->
          <img
            src="/imagens/frente.jpg"
            alt="Fachada da barbearia"
            class="relative block w-[440px] h-[580px] max-w-full object-cover object-center rounded-2xl"
            style="box-shadow: 0 24px 60px rgba(44,59,45,0.2);"
          />

          <!-- Tag flutuante de credencial — detalhe humano -->
          <div class="absolute -bottom-5 -left-5 bg-moss text-cream font-sans text-xs px-5 py-3 rounded-xl flex flex-col gap-0.5"
            style="box-shadow: 0 8px 24px rgba(0,0,0,0.2);">
            <span class="text-amber font-semibold tracking-wider uppercase text-[10px]">Desde</span>
            <span class="font-display text-xl font-bold">2014</span>
          </div>

        </div>

      </div>

    </div>

  </section>
</template>

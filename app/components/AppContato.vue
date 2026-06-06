<template>
  <!-- =========================================================
    AppContato.vue
    Seção de contato da landing page.
    Layout em duas colunas: informações à esquerda, mapa à direita.
    Fundo cream para alternar com a seção de serviços escura.
  ========================================================== -->
  <section class="bg-cream py-28 px-8 lg:px-16">

    <div class="max-w-7xl mx-auto flex flex-col gap-16">

      <!-- Cabeçalho -->
      <div class="flex flex-col gap-4">

        <!-- Label com linha -->
        <div class="flex items-center gap-3">
          <div class="w-8 h-px bg-amber" />
          <span class="text-amber text-xs font-sans font-medium uppercase tracking-[0.2em]">
            Fale conosco
          </span>
        </div>

        <!-- Título -->
        <h2 class="font-display text-charcoal font-bold leading-[1.1]" style="font-size: clamp(2rem, 4vw, 3.25rem);">
          Venha nos visitar
        </h2>

      </div>

      <!-- Grid: informações + mapa -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <!-- ── Coluna esquerda: informações de contato ── -->
        <div class="flex flex-col">

          <!-- Nome da barbearia -->
          <div class="pb-6 border-b border-charcoal/10">
            <p class="font-sans text-sage text-xs uppercase tracking-widest mb-1">Barbearia</p>
            <p class="font-display text-charcoal text-2xl font-semibold">Barbearia Premium</p>
          </div>

          <!-- Lista de informações — cada item separado por linha fina -->
          <div class="flex flex-col">

            <!-- Endereço -->
            <div class="flex gap-5 py-5 border-b border-charcoal/10">
              <span class="w-px self-stretch bg-amber shrink-0 mt-1" />
              <div class="flex flex-col gap-0.5">
                <span class="font-sans text-charcoal text-xs font-semibold uppercase tracking-wider">Endereço</span>
                <span class="font-sans text-graphite text-sm leading-relaxed">CEP 29135-320 <br />Espírito Santo, Brasil</span>
              </div>
            </div>

            <!-- Telefone -->
            <div class="flex gap-5 py-5 border-b border-charcoal/10">
              <span class="w-px self-stretch bg-amber shrink-0 mt-1" />
              <div class="flex flex-col gap-0.5">
                <span class="font-sans text-charcoal text-xs font-semibold uppercase tracking-wider">Telefone</span>
                <span class="font-sans text-graphite text-sm">(27) 99999-9999</span>
              </div>
            </div>

            <!-- E-mail -->
            <div class="flex gap-5 py-5 border-b border-charcoal/10">
              <span class="w-px self-stretch bg-amber shrink-0 mt-1" />
              <div class="flex flex-col gap-0.5">
                <span class="font-sans text-charcoal text-xs font-semibold uppercase tracking-wider">E-mail</span>
                <span class="font-sans text-graphite text-sm">contato@barbeariapremium.com.br</span>
              </div>
            </div>

            <!-- Horário -->
            <div class="flex gap-5 py-5">
              <span class="w-px self-stretch bg-amber shrink-0 mt-1" />
              <div class="flex flex-col gap-1">
                <span class="font-sans text-charcoal text-xs font-semibold uppercase tracking-wider">Horário</span>
                <span class="font-sans text-graphite text-sm">Segunda a Sexta: 09h às 18h</span>
                <span class="font-sans text-graphite text-sm">Sábado: 09h às 17h</span>
                <span class="font-sans text-sage text-xs mt-1">Domingo: Fechado</span>
              </div>
            </div>

          </div>

        </div>

        <!-- ── Coluna direita: mapa embed do Google Maps ── -->
        <!-- Embed via iframe usando o CEP 29135-320 como localização — sem necessidade de API key -->
        <div class="rounded-xl overflow-hidden border border-charcoal/10" style="box-shadow: 0 8px 32px rgba(26,26,26,0.08);">
          <iframe
            src="https://www.google.com/maps?q=29135-320&output=embed"
            width="100%"
            height="360"
            style="border: 0; display: block;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização da Barbearia Premium"
          />
        </div>

      </div>

    </div>

  </section>
</template>

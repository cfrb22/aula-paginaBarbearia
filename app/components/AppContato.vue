<template>
  <!-- =========================================================
    AppContato.vue
    Seção de contato da landing page.
    Layout em duas colunas: informações à esquerda, mapa à direita.
    Fundo cream para alternar com a seção de serviços escura.
  ========================================================== -->
  <section class="bg-cream py-24 px-6 lg:px-12">

    <div class="max-w-7xl mx-auto flex flex-col gap-12">

      <!-- Cabeçalho da seção -->
      <div class="flex flex-col gap-4 text-center">

        <!-- Label de seção -->
        <span class="text-amber text-xs font-semibold uppercase tracking-widest">
          Fale conosco
        </span>

        <!-- Título -->
        <h2 class="text-charcoal text-4xl lg:text-5xl font-bold leading-tight">
          Venha nos visitar
        </h2>

        <!-- Subtítulo -->
        <p class="text-sage text-lg max-w-xl mx-auto">
          Estamos prontos para te atender. Agende ou apareça diretamente.
        </p>

      </div>

      <!-- Grid de duas colunas: informações e mapa -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

        <!-- ── Coluna esquerda: informações de contato ── -->
        <div class="flex flex-col gap-8 justify-center">

          <!-- Nome da barbearia -->
          <div class="flex flex-col gap-1">
            <span class="text-amber text-xs font-semibold uppercase tracking-widest">Barbearia</span>
            <span class="text-charcoal text-2xl font-bold">Barbearia Premium</span>
          </div>

          <!-- Separador -->
          <div class="w-16 h-1 bg-amber rounded-full" />

          <!-- Endereço -->
          <div class="flex items-start gap-4">
            <!-- Ícone de localização -->
            <span class="w-10 h-10 rounded-full bg-moss flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-amber" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <div class="flex flex-col gap-1">
              <span class="text-charcoal font-semibold">Endereço</span>
              <span class="text-graphite leading-relaxed">CEP 29135-320 <br /> Espírito Santo, Brasil</span>
            </div>
          </div>

          <!-- Telefone -->
          <div class="flex items-start gap-4">
            <!-- Ícone de telefone -->
            <span class="w-10 h-10 rounded-full bg-moss flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-amber" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <div class="flex flex-col gap-1">
              <span class="text-charcoal font-semibold">Telefone</span>
              <span class="text-graphite">(27) 99999-9999</span>
            </div>
          </div>

          <!-- E-mail -->
          <div class="flex items-start gap-4">
            <!-- Ícone de e-mail -->
            <span class="w-10 h-10 rounded-full bg-moss flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-amber" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <div class="flex flex-col gap-1">
              <span class="text-charcoal font-semibold">E-mail</span>
              <span class="text-graphite">contato@barbeariapremium.com.br</span>
            </div>
          </div>

          <!-- Horário de funcionamento -->
          <div class="flex items-start gap-4">
            <!-- Ícone de relógio -->
            <span class="w-10 h-10 rounded-full bg-moss flex items-center justify-center shrink-0">
              <svg class="w-5 h-5 text-amber" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div class="flex flex-col gap-1">
              <span class="text-charcoal font-semibold">Horário de funcionamento</span>
              <span class="text-graphite">Segunda a Sexta: 09h às 18h</span>
              <span class="text-graphite">Sábado: 09h às 17h</span>
              <span class="text-sage text-sm">Domingo: Fechado</span>
            </div>
          </div>

        </div>

        <!-- ── Coluna direita: mapa embed do Google Maps ── -->
        <!-- Embed via iframe usando o CEP 29135-320 como localização — sem necessidade de API key -->
        <div class="rounded-2xl overflow-hidden border-2 border-amber/30 min-h-[360px]">
          <iframe
            src="https://www.google.com/maps?q=29135-320&output=embed"
            width="100%"
            height="100%"
            style="border: 0; min-height: 360px; display: block;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localização da BRShop Barbearia"
          />
        </div>

      </div>

    </div>

  </section>
</template>

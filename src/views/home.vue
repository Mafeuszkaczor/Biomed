<template>
    <main>
        <div>
           <section class="code-section relative flex items-center overflow-hidden bg-gradient-to-br from-[var(--light-background-color)] to-white">
              <!-- Background decorative elements -->
              <div class="absolute top-0 right-0 w-1/2 h-full opacity-10">
                 <div class="absolute top-20 right-20 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-3xl"></div>
                 <div class="absolute bottom-32 right-40 w-72 h-72 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
              </div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-25 relative z-10">
                 <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left content -->
                    <div class="text-center lg:text-left space-y-6 lg:space-y-8">
                       <!-- Badge -->
                       <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[var(--light-border-color)]">
                          <i class="fas fa-leaf text-[var(--primary-color)]" aria-hidden="true"></i>
                          <span class="text-sm font-[var(--font-family-body)] text-[var(--dark-text-color)]">Od 2014 roku wspieram zdrowie naturalnie</span>
                       </div>
                       <!-- Headline -->
                       <h1 class="text-4xl sm:text-5xl lg:text-6xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] leading-tight">
                          Odzyskaj równowagę
                          <span class="text-[var(--primary-color)]">w sposób naturalny</span>
                       </h1>
                       <!-- Subheadline -->
                       <p class="text-lg sm:text-xl text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                          Holistyczne terapie naturalne, które wspierają samoregenerację
                          organizmu i pomagają poprawić samopoczucie bez ingerencji w naturalne
                          procesy.
                       </p>
                       <!-- Benefits list -->
                       <ul class="space-y-3 text-left max-w-xl mx-auto lg:mx-0">
                          <li class="flex items-center gap-3 text-[var(--dark-text-color)] font-[var(--font-family-body)]">
                             <div class="flex-shrink-0 w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-check text-white text-xs" aria-hidden="true"></i>
                             </div>
                             <span>Indywidualne podejście do każdego pacjenta</span>
                          </li>
                          <li class="flex items-center gap-3 text-[var(--dark-text-color)] font-[var(--font-family-body)]">
                             <div class="flex-shrink-0 w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-check text-white text-xs" aria-hidden="true"></i>
                             </div>
                             <span>Ponad 10 lat doświadczenia w terapiach naturalnych</span>
                          </li>
                          <li class="flex items-center gap-3 text-[var(--dark-text-color)] font-[var(--font-family-body)]">
                             <div class="flex-shrink-0 w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-check text-white text-xs" aria-hidden="true"></i>
                             </div>
                             <span>Kompleksowa diagnostyka i terapia bioenergetyczna</span>
                          </li>
                       </ul>
                       <!-- CTA Buttons -->
                       <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                          <router-link to="/kontakt" class="group bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 font-[var(--font-family-body)] font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center gap-2">
                          <span>Umów bezpłatną konsultację</span>
                          <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                          </router-link>
                          <router-link to="/oferta" class="bg-white text-[var(--primary-color)] px-8 py-4 rounded-lg hover:bg-[var(--light-background-color)] transition-all duration-300 font-[var(--font-family-body)] font-semibold text-lg shadow-md hover:shadow-lg border-2 border-[var(--primary-color)] inline-flex items-center justify-center gap-2">
                          <span>Zobacz ofertę</span>
                          <i class="fas fa-spa" aria-hidden="true"></i>
                          </router-link>
                       </div>
                       <!-- Trust signal -->
                       <p class="text-sm text-[var(--gray-text-color)] font-[var(--font-family-body)] italic">
                          ✨ Bez zobowiązań • Pierwsza konsultacja bezpłatna
                       </p>
                    </div>
                    <!-- Right image -->
                    <div class="relative lg:order-last">
                       <div class="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                          <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/335ab8b4-bfaf-4bd4-9d39-b4dfcf393000/public" alt="Woman performing reiki energy healing on man at wellness center. Holistic therapist holding hands above body client to restore balance and calm. Peaceful session focused on mindfulness, energy flow, and deep relaxation with reiki therapy." class="w-full h-auto" data-media="{&quot;id&quot;:&quot;2213466029&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                          <!-- Floating card -->
                          <div class="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl backdrop-blur-sm">
                             <div class="flex items-center gap-3">
                                <div class="bg-[var(--light-background-color)] rounded-full p-3">
                                   <i class="fas fa-heart text-[var(--primary-color)] text-xl" aria-hidden="true"></i>
                                </div>
                                <div>
                                   <p class="text-xs text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                      Zadowoleni pacjenci
                                   </p>
                                   <p class="text-lg font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                      1000+
                                   </p>
                                </div>
                             </div>
                          </div>
                       </div>
                       <!-- Decorative floating elements -->
                       <div class="absolute -top-4 -right-4 w-24 h-24 bg-[var(--accent-color)] rounded-full opacity-20 blur-2xl animate-pulse"></div>
                       <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-[var(--primary-color)] rounded-full opacity-20 blur-2xl animate-pulse" style="animation-delay: 1s;"></div>
                    </div>
                 </div>
              </div>
              <!-- Bottom wave -->
              <div class="absolute bottom-0 left-0 w-full">
                 <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"></path>
                 </svg>
              </div>
           </section>
           <section class="code-section py-20 lg:py-32 bg-white">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <!-- Section header -->
                 <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center gap-2 bg-[var(--light-background-color)] px-4 py-2 rounded-full mb-6">
                       <i class="fas fa-spa text-[var(--primary-color)]" aria-hidden="true"></i>
                       <span class="text-sm font-[var(--font-family-body)] text-[var(--dark-text-color)] font-semibold">Nasze terapie</span>
                    </div>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-6">
                       Naturalne metody dla Twojego
                       <span class="text-[var(--primary-color)]">zdrowia</span>
                    </h2>
                    <p class="text-lg text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                       Oferujemy szeroki wachlarz terapii naturalnych, które wspierają
                       naturalne procesy regeneracji organizmu
                    </p>
                 </div>
                 <!-- Therapies grid -->
                 <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    <!-- Therapy 1 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-wave-square text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Biorezonans
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Diagnostyka i terapia częstotliwościami dla przywrócenia równowagi
                          energetycznej organizmu
                       </p>
                    </div>
                    <!-- Therapy 2 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--accent2-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-wind text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Inhalacje wodorem
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Nowoczesna metoda wspierająca detoksykację i regenerację komórek
                       </p>
                    </div>
                    <!-- Therapy 3 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--accent3-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-bolt text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Sonoplazma
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Terapia dźwiękiem i plazmą wspierająca regenerację tkanek
                       </p>
                    </div>
                    <!-- Therapy 4 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-droplet text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Hirudoterapia
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Tradycyjna terapia pijawkami dla poprawy krążenia i detoksykacji
                       </p>
                    </div>
                    <!-- Therapy 5 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--accent2-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-leaf text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Ziołolecznictwo
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Fitoterapia wykorzystująca moc naturalnych roślin leczniczych
                       </p>
                    </div>
                    <!-- Therapy 6 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--accent3-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-hand-dots text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Akupresura
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Masaż punktów energetycznych dla przywrócenia przepływu energii
                       </p>
                    </div>
                    <!-- Therapy 7 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-music text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Terapia dźwiękiem
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Relaksacja i harmonizacja poprzez terapeutyczne dźwięki
                       </p>
                    </div>
                    <!-- Therapy 8 -->
                    <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                       <div class="w-14 h-14 bg-[var(--accent2-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <i class="fas fa-fire text-white text-2xl" aria-hidden="true"></i>
                       </div>
                       <h3 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-3">
                          Świecowanie uszu
                       </h3>
                       <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                          Tradycyjna metoda oczyszczania i relaksacji dla uszu i zatok
                       </p>
                    </div>
                 </div>
                 <!-- CTA -->
                 <div class="text-center mt-12">
                    <router-link to="/oferta" class="inline-flex items-center gap-2 text-[var(--primary-color)] font-[var(--font-family-body)] font-semibold hover:gap-3 transition-all duration-300">
                    <span>Poznaj szczegóły wszystkich terapii</span>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    </router-link>
                 </div>
              </div>
           </section>
           <section class="code-section py-20 lg:py-32 bg-gradient-to-br from-[var(--light-background-color)] to-white relative overflow-hidden">
              <!-- Decorative background -->
              <div class="absolute top-0 left-0 w-full h-full opacity-5">
                 <div class="absolute top-20 left-20 w-64 h-64 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
                 <div class="absolute bottom-20 right-20 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-3xl"></div>
              </div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <!-- Left - Image -->
                    <div class="relative">
                       <div class="rounded-2xl overflow-hidden shadow-2xl">
                          <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/e5aae632-d3da-4e60-d2f2-75d665bfe200/public" alt="Relaxed Young Woman Receiving Acupuncture Treatment In Beauty Spa" class="w-full h-auto" data-media="{&quot;id&quot;:&quot;2171402567&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                       </div>
                       <!-- Floating stats card -->
                       <div class="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-2xl border border-[var(--light-border-color)] hidden sm:block">
                          <div class="flex items-center gap-4">
                             <div class="bg-[var(--primary-color)] rounded-full w-16 h-16 flex items-center justify-center">
                                <i class="fas fa-award text-white text-2xl" aria-hidden="true"></i>
                             </div>
                             <div>
                                <p class="text-3xl font-bold text-[var(--dark-text-color)] font-[var(--font-family-heading)]">
                                   11+
                                </p>
                                <p class="text-sm text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                   lat doświadczenia
                                </p>
                             </div>
                          </div>
                       </div>
                    </div>
                    <!-- Right - Content -->
                    <div class="space-y-6 lg:space-y-8">
                       <div>
                          <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
                             <i class="fas fa-heart text-[var(--primary-color)]" aria-hidden="true"></i>
                             <span class="text-sm font-[var(--font-family-body)] text-[var(--dark-text-color)] font-semibold">O Biomed</span>
                          </div>
                          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-6 leading-tight">
                             Holistyczna droga do
                             <span class="text-[var(--primary-color)]">równowagi</span>
                          </h2>
                          <p class="text-lg text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Od 2014 roku pomagamy naszym pacjentom odnaleźć równowagę i poprawić
                             samopoczucie poprzez naturalne metody terapeutyczne. Wierzymy w moc
                             natury i holistyczne podejście do zdrowia.
                          </p>
                       </div>
                       <!-- Benefits -->
                       <div class="space-y-4">
                          <div class="flex gap-4 items-start group">
                             <div class="flex-shrink-0 w-12 h-12 bg-[var(--primary-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-user-doctor text-white text-xl" aria-hidden="true"></i>
                             </div>
                             <div>
                                <h4 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-2">
                                   Indywidualne podejście
                                </h4>
                                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                   Każdy pacjent jest dla nas wyjątkowy. Tworzymy spersonalizowane
                                   plany terapii dostosowane do Twoich potrzeb.
                                </p>
                             </div>
                          </div>
                          <div class="flex gap-4 items-start group">
                             <div class="flex-shrink-0 w-12 h-12 bg-[var(--accent2-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-seedling text-white text-xl" aria-hidden="true"></i>
                             </div>
                             <div>
                                <h4 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-2">
                                   Naturalne metody
                                </h4>
                                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                   Wykorzystujemy tylko sprawdzone, naturalne metody które
                                   wspierają naturalne procesy regeneracji organizmu.
                                </p>
                             </div>
                          </div>
                          <div class="flex gap-4 items-start group">
                             <div class="flex-shrink-0 w-12 h-12 bg-[var(--accent3-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <i class="fas fa-handshake text-white text-xl" aria-hidden="true"></i>
                             </div>
                             <div>
                                <h4 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-2">
                                   Pełna troska
                                </h4>
                                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                   Dbamy o komfort i bezpieczeństwo każdego pacjenta na każdym
                                   etapie terapii.
                                </p>
                             </div>
                          </div>
                       </div>
                       <!-- CTA -->
                       <div class="pt-4">
                          <router-link to="/" class="inline-flex items-center gap-2 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 font-[var(--font-family-body)] font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                          <span>Poznaj naszą historię</span>
                          <i class="fas fa-arrow-right" aria-hidden="true"></i>
                          </router-link>
                       </div>
                    </div>
                 </div>
              </div>
           </section>
           <section class="code-section py-20 lg:py-32 bg-white">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <!-- Section header -->
                 <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center gap-2 bg-[var(--light-background-color)] px-4 py-2 rounded-full mb-6">
                       <i class="fas fa-star text-[var(--primary-color)]" aria-hidden="true"></i>
                       <span class="text-sm font-[var(--font-family-body)] text-[var(--dark-text-color)] font-semibold">Korzyści</span>
                    </div>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-6">
                       Dlaczego warto wybrać
                       <span class="text-[var(--primary-color)]">terapie naturalne?</span>
                    </h2>
                    <p class="text-lg text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                       Odkryj korzyści płynące z holistycznego podejścia do zdrowia
                    </p>
                 </div>
                 <!-- Benefits Grid -->
                 <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Benefit 1 -->
                    <div class="relative group">
                       <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                       <div class="relative bg-white border-2 border-[var(--light-border-color)] rounded-2xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 h-full">
                          <div class="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent3-color)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                             <i class="fas fa-shield-heart text-white text-2xl" aria-hidden="true"></i>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Bezpieczne i naturalne
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Metody oparte na naturze, bez szkodliwych substancji chemicznych i
                             efektów ubocznych
                          </p>
                       </div>
                    </div>
                    <!-- Benefit 2 -->
                    <div class="relative group">
                       <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                       <div class="relative bg-white border-2 border-[var(--light-border-color)] rounded-2xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 h-full">
                          <div class="w-16 h-16 bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                             <i class="fas fa-refresh text-white text-2xl" aria-hidden="true"></i>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Wsparcie regeneracji
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Aktywujemy naturalne mechanizmy samoregeneracji organizmu dla
                             trwałych efektów
                          </p>
                       </div>
                    </div>
                    <!-- Benefit 3 -->
                    <div class="relative group">
                       <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                       <div class="relative bg-white border-2 border-[var(--light-border-color)] rounded-2xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 h-full">
                          <div class="w-16 h-16 bg-gradient-to-br from-[var(--accent3-color)] to-[var(--primary-color)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                             <i class="fas fa-user-check text-white text-2xl" aria-hidden="true"></i>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Personalizacja
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Każda terapia dostosowana indywidualnie do Twoich potrzeb i stanu
                             zdrowia
                          </p>
                       </div>
                    </div>
                    <!-- Benefit 4 -->
                    <div class="relative group">
                       <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                       <div class="relative bg-white border-2 border-[var(--light-border-color)] rounded-2xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 h-full">
                          <div class="w-16 h-16 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent3-color)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                             <i class="fas fa-battery-full text-white text-2xl" aria-hidden="true"></i>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Więcej energii
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Odzyskaj witalność i energię do codziennych aktywności dzięki
                             holistycznej terapii
                          </p>
                       </div>
                    </div>
                    <!-- Benefit 5 -->
                    <div class="relative group">
                       <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                       <div class="relative bg-white border-2 border-[var(--light-border-color)] rounded-2xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 h-full">
                          <div class="w-16 h-16 bg-gradient-to-br from-[var(--accent2-color)] to-[var(--accent3-color)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                             <i class="fas fa-moon text-white text-2xl" aria-hidden="true"></i>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Lepszy sen
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Poprawa jakości snu i regeneracji nocnej dla lepszego samopoczucia
                          </p>
                       </div>
                    </div>
                    <!-- Benefit 6 -->
                    <div class="relative group">
                       <div class="absolute inset-0 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                       <div class="relative bg-white border-2 border-[var(--light-border-color)] rounded-2xl p-8 hover:border-[var(--primary-color)] transition-all duration-300 h-full">
                          <div class="w-16 h-16 bg-gradient-to-br from-[var(--accent3-color)] to-[var(--primary-color)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                             <i class="fas fa-shield-virus text-white text-2xl" aria-hidden="true"></i>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Wzmocniona odporność
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Wspieranie układu odpornościowego dla lepszej ochrony organizmu
                          </p>
                       </div>
                    </div>
                 </div>
                 <!-- Image section with CTA -->
                 <div class="mt-16 lg:mt-24">
                    <div class="grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-3xl overflow-hidden shadow-xl">
                       <div class="p-8 lg:p-12 order-2 lg:order-1">
                          <h3 class="text-3xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-6">
                             Gotowy na pozytywne zmiany?
                          </h3>
                          <p class="text-lg text-[var(--gray-text-color)] font-[var(--font-family-body)] mb-8 leading-relaxed">
                             Rozpocznij swoją podróż do lepszego zdrowia i samopoczucia już dziś.
                             Umów bezpłatną konsultację i dowiedz się, które terapie będą
                             najlepsze dla Ciebie.
                          </p>
                          <router-link to="/kontakt" class="inline-flex items-center gap-2 bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-8 py-4 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 font-[var(--font-family-body)] font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                          <span>Umów bezpłatną konsultację</span>
                          <i class="fas fa-calendar-check" aria-hidden="true"></i>
                          </router-link>
                       </div>
                       <div class="order-1 lg:order-2 h-64 lg:h-full">
                          <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/cbb0542f-37f9-4d8c-2eb6-9561c7f10500/public" alt="Vegan vitamin capsules for immunity support and healthy lifestyle on light beige background. Natural softgels and pills supplements and various green plant leaves, banner." class="w-full h-full object-cover" data-media="{&quot;id&quot;:&quot;2185930707&quot;,&quot;src&quot;:&quot;iStock&quot;,&quot;type&quot;:&quot;image&quot;}">
                       </div>
                    </div>
                 </div>
              </div>
           </section>
           <section class="code-section py-20 lg:py-32 bg-gradient-to-br from-white to-[var(--light-background-color)] relative overflow-hidden">
              <!-- Decorative elements -->
              <div class="absolute top-0 right-0 w-1/3 h-full opacity-5">
                 <div class="absolute top-32 right-20 w-96 h-96 bg-[var(--primary-color)] rounded-full blur-3xl"></div>
              </div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                 <!-- Section header -->
                 <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm">
                       <i class="fas fa-route text-[var(--primary-color)]" aria-hidden="true"></i>
                       <span class="text-sm font-[var(--font-family-body)] text-[var(--dark-text-color)] font-semibold">Proces terapii</span>
                    </div>
                    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-6">
                       Jak przebiega <span class="text-[var(--primary-color)]">wizyta?</span>
                    </h2>
                    <p class="text-lg text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                       Prosty i przejrzysty proces, który zapewnia najlepsze rezultaty
                    </p>
                 </div>
                 <!-- Process Steps -->
                 <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    <!-- Connecting line for desktop -->
                    <div class="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary-color)] via-[var(--accent3-color)] to-[var(--accent2-color)] mx-24" style="top: 4rem;"></div>
                    <!-- Step 1 -->
                    <div class="relative">
                       <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[var(--light-border-color)] hover:border-[var(--primary-color)] h-full group">
                          <div class="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent3-color)] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                             <span class="text-3xl font-bold text-white font-[var(--font-family-heading)]">1</span>
                             <div class="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent2-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-phone text-white text-xs" aria-hidden="true"></i>
                             </div>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Kontakt
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Skontaktuj się z nami telefonicznie lub przez formularz, aby umówić
                             termin wizyty
                          </p>
                       </div>
                    </div>
                    <!-- Step 2 -->
                    <div class="relative">
                       <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[var(--light-border-color)] hover:border-[var(--primary-color)] h-full group">
                          <div class="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--accent3-color)] to-[var(--accent2-color)] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                             <span class="text-3xl font-bold text-white font-[var(--font-family-heading)]">2</span>
                             <div class="absolute -top-2 -right-2 w-6 h-6 bg-[var(--primary-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-clipboard-list text-white text-xs" aria-hidden="true"></i>
                             </div>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Wywiad
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Przeprowadzamy szczegółowy wywiad zdrowotny, aby poznać Twoje
                             potrzeby i dolegliwości
                          </p>
                       </div>
                    </div>
                    <!-- Step 3 -->
                    <div class="relative">
                       <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[var(--light-border-color)] hover:border-[var(--primary-color)] h-full group">
                          <div class="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--accent2-color)] to-[var(--primary-color)] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                             <span class="text-3xl font-bold text-white font-[var(--font-family-heading)]">3</span>
                             <div class="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent3-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-heartbeat text-white text-xs" aria-hidden="true"></i>
                             </div>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Diagnostyka
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Diagnozujemy przyczynę problemów używając metod bioenergetycznych
                          </p>
                       </div>
                    </div>
                    <!-- Step 4 -->
                    <div class="relative">
                       <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[var(--light-border-color)] hover:border-[var(--primary-color)] h-full group">
                          <div class="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                             <span class="text-3xl font-bold text-white font-[var(--font-family-heading)]">4</span>
                             <div class="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent3-color)] rounded-full flex items-center justify-center">
                                <i class="fas fa-spa text-white text-xs" aria-hidden="true"></i>
                             </div>
                          </div>
                          <h3 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                             Terapia
                          </h3>
                          <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                             Przeprowadzamy indywidualnie dobraną terapię naturalną dostosowaną
                             do Twoich potrzeb
                          </p>
                       </div>
                    </div>
                 </div>
                 <!-- Additional info -->
                 <div class="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-[var(--light-border-color)]">
                    <div class="grid lg:grid-cols-3 gap-8">
                       <div class="flex items-start gap-4">
                          <div class="flex-shrink-0 w-12 h-12 bg-[var(--light-background-color)] rounded-xl flex items-center justify-center">
                             <i class="fas fa-clock text-[var(--primary-color)] text-xl" aria-hidden="true"></i>
                          </div>
                          <div>
                             <h4 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-2">
                                Czas trwania
                             </h4>
                             <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                Pierwsza wizyta trwa ok. 60-90 minut, kolejne 45-60 minut
                             </p>
                          </div>
                       </div>
                       <div class="flex items-start gap-4">
                          <div class="flex-shrink-0 w-12 h-12 bg-[var(--light-background-color)] rounded-xl flex items-center justify-center">
                             <i class="fas fa-calendar-days text-[var(--primary-color)] text-xl" aria-hidden="true"></i>
                          </div>
                          <div>
                             <h4 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-2">
                                Częstotliwość
                             </h4>
                             <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                Zależy od terapii - zwykle 1-2 razy w tygodniu przez kilka tygodni
                             </p>
                          </div>
                       </div>
                       <div class="flex items-start gap-4">
                          <div class="flex-shrink-0 w-12 h-12 bg-[var(--light-background-color)] rounded-xl flex items-center justify-center">
                             <i class="fas fa-comments text-[var(--primary-color)] text-xl" aria-hidden="true"></i>
                          </div>
                          <div>
                             <h4 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-2">
                                Wsparcie
                             </h4>
                             <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)]">
                                Pozostajemy w kontakcie między wizytami i odpowiadamy na pytania
                             </p>
                          </div>
                       </div>
                    </div>
                 </div>
                 <!-- CTA -->
                 <!-- <div class="text-center mt-12">
                    <router-link to="https://app.landingsite.ai/jak-przebiega-wizyta" class="inline-flex items-center gap-2 text-[var(--primary-color)] font-[var(--font-family-body)] font-semibold hover:gap-3 transition-all duration-300">
                    <span>Dowiedz się więcej o przebiegu wizyty</span>
                    <i class="fas fa-arrow-right" aria-hidden="true"></i>
                    </router-link>
                 </div> -->
              </div>
           </section>
           <section class="code-section py-20 lg:py-32 bg-gradient-to-br from-[var(--primary-color)] to-[var(--accent2-color)] relative overflow-hidden">
              <!-- Decorative elements -->
              <div class="absolute top-0 left-0 w-full h-full opacity-10">
                 <div class="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                 <div class="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                 <!-- Icon -->
                 <div class="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-xl">
                    <i class="fas fa-calendar-check text-[var(--primary-color)] text-3xl" aria-hidden="true"></i>
                 </div>
                 <!-- Heading -->
                 <h2 class="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-white mb-6 leading-tight">
                    Zacznij swoją podróż do lepszego zdrowia już dziś
                 </h2>
                 <!-- Subheading -->
                 <p class="text-xl text-white opacity-90 font-[var(--font-family-body)] mb-8 max-w-3xl mx-auto leading-relaxed">
                    Umów bezpłatną konsultację i dowiedz się, które terapie naturalne będą
                    najlepsze dla Ciebie. Bez zobowiązań.
                 </p>
                 <!-- Features -->
                 <div class="flex flex-wrap justify-center gap-6 mb-10">
                    <div class="flex items-center gap-2 text-white font-[var(--font-family-body)]">
                       <i class="fas fa-check-circle text-[var(--accent4-color)]" aria-hidden="true"></i>
                       <span>Bezpłatna konsultacja</span>
                    </div>
                    <div class="flex items-center gap-2 text-white font-[var(--font-family-body)]">
                       <i class="fas fa-check-circle text-[var(--accent4-color)]" aria-hidden="true"></i>
                       <span>Bez zobowiązań</span>
                    </div>
                    <div class="flex items-center gap-2 text-white font-[var(--font-family-body)]">
                       <i class="fas fa-check-circle text-[var(--accent4-color)]" aria-hidden="true"></i>
                       <span>Indywidualne podejście</span>
                    </div>
                 </div>
                 <!-- CTA Buttons -->
                 <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <router-link to="/kontakt" class="group bg-white text-[var(--primary-color)] px-10 py-5 rounded-xl hover:bg-[var(--light-background-color)] transition-all duration-300 font-[var(--font-family-body)] font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center gap-3">
                    <span>Umów wizytę teraz</span>
                    <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                    </router-link>
                    <a href="tel:+48123456789" class="bg-transparent text-white px-10 py-5 rounded-xl hover:bg-white hover:bg-opacity-10 transition-all duration-300 font-[var(--font-family-body)] font-semibold text-lg border-2 border-white inline-flex items-center gap-3">
                    <i class="fas fa-phone" aria-hidden="true"></i>
                    <span>Zadzwoń do nas</span>
                    </a>
                 </div>
                 <!-- Trust message -->
                 <p class="text-white opacity-80 font-[var(--font-family-body)] mt-8 text-sm">
                    <i class="fas fa-lock mr-2" aria-hidden="true"></i>
                    Twoje dane są bezpieczne i chronione
                 </p>
              </div>
              <!-- Wave decoration -->
              <div class="absolute bottom-0 left-0 w-full">
                 <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"></path>
                 </svg>
              </div>
           </section>
        </div>
    </main>
</template> 

<script>
export default {
    name: 'Home'
}
</script>
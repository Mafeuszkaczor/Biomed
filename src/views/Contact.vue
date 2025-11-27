<template>
    <div class="py-20">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 bg-[var(--light-background-color)] px-4 py-2 rounded-full mb-6">
                <i class="fas fa-phone text-[var(--primary-color)]" aria-hidden="true"></i>
                <span class="text-sm font-[var(--font-family-body)] text-[var(--dark-text-color)] font-semibold">Skontaktuj się</span>
            </div>
            <h2 class="text-3xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-6">
                Masz pytanie? Chcesz umówić wizytę?
                <span class="text-[var(--primary-color)]">Zadzwoń do nas</span>
            </h2>
        </div>

        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-2 lg:px-20">
            <div class="group bg-gradient-to-br rounded-2xl p-6 border border-[var(--light-border-color)]">
                <div class="flex items-center mb-4 gap-5">
                    <div class="h-12 w-12 lg:w-14 lg:h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-phone text-white text-2xl" aria-hidden="true"></i>
                    </div>
                    <h2 class="text-3xl lg:text-4xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mt-1">
                        Kontakt
                    </h2>
                </div>
                <div class="justify-items-center my-8 lg:my-16 justify-self-center flex flex-col gap-2 lg:gap-6">
                    <div class="mb-4">
                        <h3 class="text-2xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-1">Telefon</h3>
                        <p class="text-[var(--gray-text-color)] text-xl font-[var(--font-family-body)] leading-relaxed">
                            +48 667 785 735
                        </p>
                    </div>
                    <div class="mb-4">
                        <h3 class="text-2xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-1">E-mail</h3>
                        <p class="text-[var(--gray-text-color)] text-xl font-[var(--font-family-body)] leading-relaxed">
                            kontakt@przyklad.pl
                        </p>
                    </div>
                    <div>
                        <h3 class="text-2xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-1">Godziny kontaktu</h3>
                        <p class="text-[var(--gray-text-color)] text-xl font-[var(--font-family-body)] leading-relaxed">
                            Pon - Pt: 9:00 - 18:00<br>
                            Sob: 10:00 - 14:00
                        </p>
                    </div>
                </div>
            </div>
            <div class="group bg-gradient-to-br rounded-2xl p-6 border border-[var(--light-border-color)]">
                <div class="flex items-center gap-5 mb-3">
                    <div class="h-12 w-12 lg:w-14 lg:h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <i class="fas fa-location-arrow text-white text-2xl" aria-hidden="true"></i>
                    </div>
                    <h2 class="text-3xl lg:text-4xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mt-1">
                        Lokalizacja
                    </h2>
                </div>
                <div>
                    <h2 class="text-xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                        Wieluń, Łódzkie
                    </h2>
                    <div class="rounded-2xl overflow-hidden shadow-md">
                        <iframe 
                            src="https://maps.google.com/maps?q=Wielu%C5%84&t=m&z=10&ie=UTF8&iwloc=B&output=embed" 
                            width="100%" 
                            height="400" 
                            style="border:0;"
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
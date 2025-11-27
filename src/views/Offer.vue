<template>
    <div class="py-10 lg:py-20">
        <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 bg-[var(--light-background-color)] px-4 py-2 rounded-full mb-6">
                <i class="fas fa-spa text-[var(--primary-color)]" aria-hidden="true"></i>
                <span class="text-sm font-[var(--font-family-body)] text-[var(--dark-text-color)] font-semibold">Nasze terapie</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-6">
                Poznaj nasze metody dla polepszenia
                <span class="text-[var(--primary-color)]">Twojego zdrowia</span>
            </h2>
        </div>
        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4 md:px-10 lg:px-20">
            <!-- Therapy 1 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-wave-square text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Biorezonans – diagnostyka i terapia częstotliwościami
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Biorezonans to metoda diagnostyki i terapii oparta na analizie częstotliwości elektromagnetycznych organizmu. 
                    Dzięki niej możliwe jest wykrycie zaburzeń energetycznych oraz przywrócenie równowagi w organizmie.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak działa biorezonans?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Urządzenie biorezonansowe odbiera sygnały z ciała pacjenta, analizuje je i wysyła odpowiednie częstotliwości, które wspierają procesy samoregulacji organizmu.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Zastosowania biorezonansu
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Wspomaganie diagnostyki alergii i nietolerancji pokarmowych</li>
                    <li>Redukcja stresu i poprawa samopoczucia</li>
                    <li>Wsparcie leczenia przewlekłych dolegliwości</li>
                    <li>Przywracanie równowagi energetycznej organizmu</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Biorezonans to bezinwazyjna metoda, która może być stosowana jako uzupełnienie tradycyjnej medycyny, wspierając naturalne procesy samoleczenia organizmu.
                </p>
            </div>
            <!-- Therapy 2 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--accent2-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-wind text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Inhalacje wodorem – detoksykacja i regeneracja komórek
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Inhalacje wodorem to innowacyjna metoda, która wspiera naturalne procesy oczyszczania organizmu oraz regenerację komórek. 
                    Wodór działa jako silny antyoksydant, neutralizując wolne rodniki i wspomagając równowagę organizmu.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak przebiega zabieg?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Podczas inhalacji pacjent oddycha czystym wodorem za pomocą specjalnej maski lub ustnika. Zabieg jest bezpieczny, bezinwazyjny i bezbolesny, a jego czas trwania zależy od indywidualnych potrzeb.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Korzyści zdrowotne
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Wspomaganie detoksykacji organizmu</li>
                    <li>Redukcja stanów zapalnych</li>
                    <li>Poprawa regeneracji komórek i spowolnienie procesów starzenia</li>
                    <li>Wspieranie odporności i ogólnego samopoczucia</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Inhalacje wodorem mogą być stosowane zarówno profilaktycznie, jak i wspomagająco w terapii różnych dolegliwości, oferując naturalny sposób na poprawę zdrowia i witalności.
                </p>
            </div>
            <!-- Therapy 3 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--accent3-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-bolt text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Sonoplazma – terapia dźwiękiem i plazmą
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Sonoplazma to nowoczesna metoda wspierająca regenerację tkanek poprzez połączenie terapii dźwiękiem i plazmą. Zabieg stymuluje naturalne procesy naprawcze organizmu, poprawiając krążenie i odżywienie komórek.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak przebiega terapia?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Zabieg polega na naświetlaniu skóry i tkanek dźwiękiem oraz plazmą, co pobudza komórki do regeneracji i przyspiesza procesy naprawcze. Sesja jest bezpieczna, bezbolesna i może być stosowana u osób w różnym wieku.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Korzyści zdrowotne
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Przyspieszenie regeneracji tkanek i skóry</li>
                    <li>Poprawa mikrokrążenia</li>
                    <li>Redukcja stanów zapalnych i napięć mięśniowych</li>
                    <li>Wspieranie ogólnej witalności organizmu</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Sonoplazma to metoda uzupełniająca tradycyjne terapie, oferująca bezpieczny i naturalny sposób na poprawę zdrowia i regenerację organizmu.
                </p>
            </div>
            <!-- Therapy 4 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-droplet text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Hirudoterapia – tradycyjna terapia pijawkami
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Hirudoterapia to metoda lecznicza wykorzystująca pijawki w celu poprawy krążenia, detoksykacji organizmu oraz wspierania naturalnych procesów regeneracyjnych. Zabieg stosowany jest od wieków jako skuteczna metoda wspomagająca zdrowie.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak przebiega zabieg?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Pijawki przyłożone są w odpowiednie miejsca na ciele pacjenta. Podczas zabiegu uwalniają substancje aktywne, które wspomagają krążenie krwi, działają przeciwzapalnie i stymulują procesy detoksykacyjne. Zabieg jest przeprowadzany w sterylnych warunkach i jest bezpieczny.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Korzyści zdrowotne
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Poprawa krążenia i dotlenienie tkanek</li>
                    <li>Detoksykacja organizmu</li>
                    <li>Redukcja stanów zapalnych</li>
                    <li>Wsparcie procesów regeneracyjnych organizmu</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Hirudoterapia to naturalna metoda wspierająca zdrowie, często stosowana jako uzupełnienie tradycyjnej medycyny w terapii różnych dolegliwości.
                </p>
            </div>
            <!-- Therapy 5 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--accent2-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-leaf text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Ziołolecznictwo – moc naturalnych roślin
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Fitoterapia wykorzystuje lecznicze właściwości roślin, wspierając naturalne procesy zdrowotne organizmu. Zioła mogą działać przeciwzapalnie, uspokajająco, wspomagają trawienie i detoksykację, przyczyniając się do poprawy ogólnej witalności i odporności.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak przebiega terapia?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Terapia polega na indywidualnym doborze odpowiednich ziół w formie naparów, ekstraktów lub kapsułek. Pacjent otrzymuje zalecenia dotyczące dawkowania i czasu stosowania, aby uzyskać maksymalne efekty terapeutyczne. Terapia jest bezpieczna i naturalna.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Korzyści zdrowotne
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Wspieranie odporności i naturalnej ochrony organizmu</li>
                    <li>Redukcja stresu i napięć</li>
                    <li>Poprawa trawienia i detoksykacja</li>
                    <li>Wsparcie w regeneracji i harmonizacji organizmu</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Ziołolecznictwo to metoda, która może być stosowana zarówno profilaktycznie, jak i terapeutycznie, wspierając naturalną równowagę organizmu i zdrowie na co dzień.
                </p>
            </div>
            <!-- Therapy 6 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--accent3-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-hand-dots text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Akupresura – przywracanie przepływu energii
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Akupresura to metoda terapeutyczna polegająca na stymulowaniu punktów energetycznych na ciele. Jej celem jest przywrócenie harmonii przepływu energii, redukcja napięć mięśniowych oraz poprawa samopoczucia fizycznego i psychicznego.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak przebiega zabieg?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Terapeuta delikatnie uciska lub masuje określone punkty na ciele pacjenta, kierując energię do obszarów wymagających harmonizacji. Zabieg jest bezbolesny, relaksujący i dopasowany indywidualnie do potrzeb pacjenta.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Korzyści zdrowotne
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Redukcja napięć i stresu</li>
                    <li>Poprawa krążenia i energii życiowej</li>
                    <li>Wspomaganie równowagi emocjonalnej</li>
                    <li>Lepsza regeneracja organizmu</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Akupresura to naturalna metoda, która wspiera zdrowie zarówno fizyczne, jak i psychiczne, przywracając harmonię organizmu w codziennym funkcjonowaniu.
                </p>
            </div>
            <!-- Therapy 7 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--primary-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-music text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Terapia dźwiękiem – relaksacja i harmonizacja
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Terapia dźwiękiem wykorzystuje specjalne dźwięki terapeutyczne i instrumenty, które wprowadzają organizm w stan relaksu i harmonii. Dźwięki te pomagają wyciszyć umysł, poprawić koncentrację oraz zredukować stres i napięcia.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak przebiega zabieg?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Pacjent znajduje się w komfortowej pozycji, a terapeuta używa dźwięków z instrumentów takich jak misy tybetańskie, gongi czy kamertony. Sesja trwa od kilkunastu do kilkudziesięciu minut i jest całkowicie bezpieczna oraz relaksująca.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Korzyści zdrowotne
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Redukcja stresu i napięć</li>
                    <li>Poprawa jakości snu</li>
                    <li>Wspomaganie koncentracji i regeneracji psychicznej</li>
                    <li>Harmonizacja energii i witalności organizmu</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Terapia dźwiękiem jest naturalnym sposobem na wsparcie zdrowia psychicznego i fizycznego, przynosząc głęboki relaks i regenerację organizmu.
                </p>
            </div>
            <!-- Therapy 8 -->
            <div class="group bg-gradient-to-br from-[var(--light-background-color)] to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:-translate-y-2">
                <div class="w-14 h-14 bg-[var(--accent2-color)] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i class="fas fa-fire text-white text-2xl" aria-hidden="true"></i>
                </div>
                <h2 class="text-2xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mb-4">
                    Świecowanie uszu – oczyszczanie i relaksacja
                </h2>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Świecowanie uszu to tradycyjna metoda oczyszczania przewodów słuchowych i zatok, która jednocześnie działa relaksująco. Zabieg poprawia krążenie powietrza w uszach, łagodzi napięcia oraz wpływa na ogólne samopoczucie.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Jak przebiega zabieg?
                </h3>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    Specjalista umieszcza w uchu pacjenta bezpieczną świecę, która delikatnie rozgrzewa i wytwarza przepływ powietrza. Zabieg jest bezpieczny, bezbolesny i trwa kilkanaście minut, przynosząc ulgę oraz efekt relaksacyjny.
                </p>
                <h3 class="text-xl font-[var(--font-family-heading)] font-semibold text-[var(--dark-text-color)] mb-3">
                    Korzyści zdrowotne
                </h3>
                <ul class="list-disc list-inside text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed mb-4">
                    <li>Oczyszczenie przewodów słuchowych i zatok</li>
                    <li>Redukcja napięcia i bólów głowy</li>
                    <li>Poprawa komfortu oddychania</li>
                    <li>Efekt relaksacyjny i odprężający</li>
                </ul>
                <p class="text-[var(--gray-text-color)] font-[var(--font-family-body)] leading-relaxed">
                    Świecowanie uszu to bezpieczna metoda wspierająca naturalne procesy oczyszczania i relaksacji, która może być stosowana zarówno profilaktycznie, jak i terapeutycznie.
                </p>
            </div>
        </div>
        <div class="text-center max-w-3xl mx-auto mt-16">
            <h4 class="text-3xl sm:text-4xl lg:text-5xl font-[var(--font-family-heading)] font-bold text-[var(--dark-text-color)] mx-10">
                Jeśli masz jakiekolwiek pytania
                <span class="text-[var(--primary-color)]">odezwij sie do nas</span>
            </h4>
        </div>
    </div>
</template> 


<script>
export default {
    name: 'Offer'
}
</script>

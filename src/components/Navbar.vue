<template>
    <header id="global-header" class="code-section bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div class="flex justify-between items-center h-28">
            <!-- Logo -->
            <router-link to="/" class="flex-shrink-0">
            <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/07799bfb-cfff-460b-c815-b6db62afe100/publicContain" alt="Biomed Logo" class="h-28 py-2" data-logo="">
            </router-link>
            <!-- Desktop Navigation -->
            <nav class="hidden lg:flex items-center space-x-8">
               <!-- <router-link to="#o-nas" class="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-[var(--font-family-body)] transition-colors duration-200">O nas</a> -->
               <router-link to="/oferta" class="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-[var(--font-family-body)] transition-colors duration-200">Oferta</router-link>
               <!-- <router-link to="#jak-przebiega-wizyta" class="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-[var(--font-family-body)] transition-colors duration-200">Jak przebiega wizyta</a> -->
               <!-- <router-link to="#opinie" class="text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-[var(--font-family-body)] transition-colors duration-200">Opinie klientów</a> -->
               <router-link to="/kontakt" class="bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-200 font-[var(--font-family-body)] font-semibold">Umów wizytę</router-link>
            </nav>
            <!-- Mobile menu button -->
            <button @click="toggleMobileMenu" class="lg:hidden text-[var(--dark-text-color)] p-2">
            <i class="fas fa-bars text-2xl" aria-hidden="true"></i>
            </button>
         </div>
      </div>
      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="lg:hidden bg-white border-t border-[var(--light-border-color)]">
         <div class="px-4 py-4 space-y-3">
            <!-- <router-link to="#o-nas" @click="toggleMobileMenu" class="block text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-[var(--font-family-body)] py-2 transition-colors duration-200">O nas</a> -->
            <router-link to="/oferta" @click="toggleMobileMenu" class="block text-[var(--dark-text-color)] hover:text-[var(--primary-color)] font-[var(--font-family-body)] py-2 transition-colors duration-200">Oferta</router-link>
            <router-link to="/kontakt" @click="toggleMobileMenu" class="block bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-200 font-[var(--font-family-body)] font-semibold text-center mt-4">Umów wizytę</router-link>
         </div>
      </div>
   </header>
  </template>
  
  <script>
    export default {
        name: 'Navbar'
    }
  </script>
<template>
  <v-btn variant="text" class="custom-hamburger2" icon>
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="hamburger-svg">
      <!-- 1번 줄 (가장 길게) -->
      <rect x="2" y="5" width="20" height="3" rx="1.5" fill="black" />

      <!-- 2번 줄 (중간 길이) -->
      <rect x="2" y="11" width="16" height="3" rx="1.5" fill="black" />

      <!-- 3번 줄 (가장 짧게) -->
      <rect x="2" y="17" width="12" height="3" rx="1.5" fill="black" />
    </svg>
  </v-btn>
</template>

<style scoped>
.custom-hamburger2 {
  padding: 4px;
  min-width: 36px;
  width: 36px;
  height: 36px;
}

/* SVG 크기 보정 */
.hamburger-svg {
  width: 24px;
  height: 24px;
}
</style>

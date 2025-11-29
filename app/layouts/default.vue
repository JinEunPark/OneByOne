<template>
  <v-defaults-provider :defaults="{
    VBtn: {
      style: 'font-family: Protest Riot, sans-serif;',
    }
  }">
    <v-app>
      <AppHeader></AppHeader>
      <slot></slot>
      <AppFooter></AppFooter>
    </v-app>
  </v-defaults-provider>
</template>
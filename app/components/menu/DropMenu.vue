<template>
  <menu>
    <button>
      Exploer
      <v-icon class="chevron" :class="{ rotate: isActive }">mdi-chevron-down</v-icon>
    </button>



    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </menu>
</template>
<script setup lang="ts">
import { type Menu } from '~/types/Menu'

const props = defineProps({
  items: {
    type: Array<Menu>,
    required: true,
    default: []
  }
}
)

const isActive = ref<boolean>(false)
const toggle = () => { isActive.value = !isActive.value }


</script>
<style scoped>
button {
  font-family: 'Space Grotesk', sans-serif !important;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

/* 아이콘 애니메이션 */
.chevron {
  transition: transform 0.25s ease;
}

.rotate {
  transform: rotate(180deg);
}
</style>

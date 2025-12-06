<template>
  <button class="button-category" @click="emit('click')">
    <span class="button-text">
      {{ label }}
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{
  label: string
}>(), {
  label: 'default label',
})

const emit = defineEmits<{
  (event: 'click'): void
}>()

</script>

<style scoped>
/* 버튼 기본 상태 */
.button-category {
  background-color: #fff;
  border-radius: 24px;
  color: #000000;
  padding: 6px 14px;
  border: solid 1.5px #d5d1de;

  display: flex;
  align-items: center;
  gap: 6px;

  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* ACTIVE hover */
.button-category:hover {
  background-color: #a1a0a4;
}

/* ICON: mask + stroke 두께 강제 통일 */
.button-icon {
  width: 18px;
  height: 18px;

  /* mask 공통 */
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;

  /* 기본 아이콘 색 (검정) */
  background-color: #000;

  /* 🔥 모든 SVG stroke 두께 통일시키는 마법의 2줄 */
  outline: 2px solid currentColor;
  outline-offset: -2px;
}

/* ICON ACTIVE → 흰색 */
.button-icon.activeIcon {
  background-color: #ffffff !important;
  outline-color: #ffffff !important;
}

/* TEXT 기본 검정 */
.button-text {
  font-size: 14px;
  letter-spacing: 0.2px;
  color: #000;
}

/* TEXT active → 흰색 */
.button-text.activeText {
  color: #ffffff !important;
}
</style>

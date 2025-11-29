<template>
  <button class="button-category" :class="{ active: props.isActive }" @click="emit('click')">

    <!-- 아이콘 -->
    <span class="button-icon" :class="{ activeIcon: props.isActive }" :style="{
      maskImage: `url(${icon})`,
      WebkitMaskImage: `url(${icon})`
    }"></span>

    <!-- 텍스트 -->
    <span class="button-text" :class="{ activeText: props.isActive }">
      {{ label }}
    </span>

  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{
  label: string
  icon: string
  isActive: boolean
}>(), {
  label: 'default label',
  icon: '/default.svg',
  isActive: false
})

const emit = defineEmits<{
  (event: 'click'): void
}>()

</script>

<style scoped>
/* 버튼 기본 상태 */
.button-category {
  background-color: #ffffff;
  border-radius: 24px;
  color: #000000;
  padding: 6px 14px;

  display: flex;
  align-items: center;
  gap: 6px;

  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* ACTIVE 상태 */
.button-category.active {
  background-color: #3A3546;
  border-color: #3A3546;
}

/* ACTIVE hover */
.button-category.active:hover {
  background-color: #4A4456;
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

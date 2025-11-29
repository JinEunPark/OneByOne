<template>
  <div class="search-container">
    <div :class="isActive ? 'search-input active' : 'search-input '">

      <input class="input" type="text" placeholder="  lets find your own designer's clothes" @change="changedInput">
      </input>
      <button class="search-button">
        <Icon class="search-icon" name="mdi:magnify" style="color: white" />
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isActive = ref<boolean>(false);
const changedInput = (event: Event) =>
{
  const value = (event.target as HTMLInputElement).value;
  isActive.value = value.trim().length > 0;
};
const searchQuery = ref('')
const items = [
  { title: 'dashboard' },
  { title: 'landing page' },
  { title: 'card' },
  { title: 'login' },
  { title: 'notification' },
  { title: 'portfolio' }
]
</script>

<style scoped>
.search-container {
  margin-top: 20px;
  margin-bottom: 20px;
  display: block;
  width: 100%;
  max-width: 40vw;
  height: 50px;
}

.search-input {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  background-color: #F3F3F6;
  color: #3A3546;
  padding-left: 20px;
}

.search-input:focus,
.search-input:hover {
  outline: none;
  background-color: #fff;
  border: solid 1.5px #EA4C89;
}

.active {
  outline: none;
  background-color: #fff;
  border: solid 1.5px #EA4C89;
}

.search-input:focus>input,
.search-input:hover>input {
  outline: none;
}

.input {
  outline: none;
  width: 100%;
  height: 100%;
}

.search-button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  flex-shrink: 0;
  /* 🔥 flex 영역에서 크기 줄어드는 것 방지 */

  border-radius: 50%;
  /* 🔥 완전한 원형 */
  background-color: #EA4C89;

  margin-right: 10px;
  padding: 0;
  /* 🔥 내부 패딩 제거 */
  line-height: 1;
  /* 🔥 텍스트가 버튼 크기 밀지 않도록 */
}

.search-icon {
  font-size: 28px !important;
  color: white;
  line-height: 1;
  /* 🔥 중앙 정렬 정확 */
}
</style>

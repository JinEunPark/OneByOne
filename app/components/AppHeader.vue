<template>
  <v-app-bar flat style="background-color: #fff; color: black; height: 6vh; padding-left: 2vw; padding-top: 0.7vh;">
    <!-- 왼쪽 햄버거 메뉴 -->
    <template #prepend>
      <v-menu location="bottom start" :close-on-content-click="true">
        <template #activator="{ props }">
          <CustomHamburger v-bind="props" />
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>
              <NuxtLink v-to="item.url">{{ item.title }}</NuxtLink>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>

    <!-- 🔥 타이틀 + 오른쪽 드롭다운을 같은 라인에 묶음 -->
    <div class="title-and-menu">
      <v-app-bar-title class="title">One By One</v-app-bar-title>
      <div>
        <v-menu location="bottom end">
          <template #activator="{ props, isActive = true }">
            <button v-bind="props"
              style="font-family: 'Space Grotesk', sans-serif !important; font-size: 0.9rem; margin-top: 0.5rem;">
              Exploer
              <v-icon class="chevron" :class="{ rotate: isActive }">mdi-chevron-down</v-icon>
            </button>
          </template>

          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <div>
      <button class="sign-button">sign up</button>
      <button class="login-button">login</button>
    </div>
  </v-app-bar>
</template>


<script setup lang="ts">
interface Menu
{
  title: string,
  url: string
}
const items: Menu[] = [
  { title: 'Designer', url: '/designer' },
  { title: 'Clothes', url: '/clothes' }
];
</script>

<style scoped>
.title-and-menu {
  position: absolute;
  left: 4rem;
  display: flex;
  align-items: center;
  gap: 8rem;
  /* 타이틀과 Dropdown 사이 간격 */
}

.title-and-menu>div {
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 2rem;
}

/* 아이콘 애니메이션 */
.chevron {
  transition: transform 0.25s ease;
}

.rotate {
  transform: rotate(180deg);
}

.login-button {
  background-color: black;
  color: white;
  font-weight: 500;
  width: 60px;
  height: 30px;
  border-radius: 32px;
  margin-right: 1vw;
}

.sign-button {
  background-color: transparent;
  color: black;
  font-weight: 500;
  width: 60px;
  height: 30px;
  border-radius: 32px;
  margin-right: 1vw;
}

.title {
  font-weight: 600;
}



/* Hover 시 배경색이 연해지고 반응하도록 스타일 추가 */
.v-list-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
  /* 연한 회색 배경 */
  transition: background-color 0.3s ease;
  /* 부드러운 전환 효과 */
}

/* 활성화된 항목에 스타일을 추가하여 클릭 시 반응을 줄 수도 있음 */
.v-list-item--active {
  background-color: rgba(0, 0, 0, 0.2);
  /* 선택된 항목의 배경 색 */
}

/* 텍스트 색상 변화 효과 */
.v-list-item:hover .v-list-item-title {
  color: #000000;
  /* Hover 시 텍스트 색상 변화 */
  transition: color 0.3s ease;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>

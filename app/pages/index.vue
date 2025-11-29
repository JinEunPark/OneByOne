<template>
  <div class="main-container">
    <section class="top-container">
      <div class="right-container">
        <article class="title-area">
          <h1>Discover your best Designers</h1>
          <h5>show your talent and make a profit !!!!<br></br> make your dreams come ture</h5>
        </article>

        <article class="search-area">
          <div class="category-area">
            <category-button label="clothes" icon="/picture.svg" :is-active="actives[0] ?? false"
              @click="selectCategory(0)">
            </category-button>
            <category-button label="diesigners" icon="/people.svg" :is-active="actives[1] ?? false"
              @click="selectCategory(1)">
            </category-button>
          </div>
          <main-search>
          </main-search>
        </article>
      </div>
      <div class="left-container">
        <article class="trand-area">
          <v-carousel height="300" hide-delimiters show-arrows="hover" transition="fade-transition" cycle
            interval="3000">
            <template #prev="{ props }">
              <v-btn icon @click="props.onClick">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
            </template>

            <template #next="{ props }">
              <v-btn icon @click="props.onClick">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </template>

            <v-carousel-item v-for="(img, i) in slides" :key="i">
              <div class="carousel-wrapper">
                <img :src="img" class="carousel-img" />
              </div>
            </v-carousel-item>
          </v-carousel>
        </article>
      </div>
    </section>
    <section class="bottom-container">
      <!-- 하단 영역 -->
    </section>
  </div>
</template>

<script setup lang="ts">

const actives = reactive([
  true,
  false,
])

const selectCategory = (index: number) =>
{
  actives.forEach((_, i) => actives[i] = i == index);
}
const slides = [
  "/example1.png",
  "/example2.png"
]
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-left: 3vw;
  padding-right: 3vw;
}

.top-container {
  width: 100%;
  height: 45vh;

  display: flex;
  flex-direction: row;

  /* 🔥 가운데 정렬 핵심 */
  align-items: center;
  justify-content: center;

  margin-top: 40px;
  margin-right: 5vw;
  margin-left: 5vw;
}

.right-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.left-container {
  flex: 1;
}

.bottom-container {
  width: 100%;
}

.search-area {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.category-area {
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-top: 20px;
  gap: 4px;
}

.carousel-wrapper {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  /* 여백 색상(원하는 색으로 변경 가능) */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* 핵심: 비율 유지 + 여백 처리 */
  display: block;
}
</style>

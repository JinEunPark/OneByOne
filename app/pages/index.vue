<template>
  <div class="main-container">
    <section class="top-container">
      <div class="right-container">
        <article class="title-area">
          <h1>Discover your best Designers</h1>
          <h5>
            show your talent and make a profit !!!!<br>
            make your dreams come ture
          </h5>
        </article>

        <article class="search-area">
          <div class="category-area">
            <category-button label="clothes" icon="/picture.svg" :is-active="actives[0] ?? false"
              @click="selectCategory(0)" />
            <category-button label="diesigners" icon="/people.svg" :is-active="actives[1] ?? false"
              @click="selectCategory(1)" />
          </div>
          <main-search />
          <div class="popular-container">

            <div class="poppular-font"> poppular : </div>
            <outlined-button label="이예빈 컬랙션"></outlined-button>
            <outlined-button label="박진은 걸렉션"></outlined-button>
            <outlined-button label="김나경 컬렉션"></outlined-button>
            <outlined-button label="편성윤 컬렉션"></outlined-button>
          </div>
        </article>
      </div>

      <div class="left-container">
        <article class="trand-area">
          <v-carousel height="300" hide-delimiters transition="fade-transition" cycle interval="3000"
            @mouseenter="isHovered = true" @mouseleave="isHovered = false">
            <template #prev="{ props }">
              <button icon @click="props.onClick" class="arrow-btn" v-if="isHovered">
                <v-icon class="arrow-btn">mdi-chevron-left</v-icon>
              </button>
            </template>

            <template #next="{ props }">
              <button icon @click="props.onClick" class="arrow-btn" v-if="isHovered">
                <v-icon class="arrow-btn">mdi-chevron-right</v-icon>
              </button>
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
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>
      <designer-show-case :avatar="slides[0]" :thumbnail="slides[0]" :name="'박진은'" :likes="87"
        :views="100"></designer-show-case>















    </section>
  </div>
</template>

<script setup lang="ts">
const isHovered = ref(false);

const actives = reactive([true, false]);

const selectCategory = (index: number) =>
{
  actives.forEach((_, i) => (actives[i] = i === index));
};

const slides = ["/example1.png", "/example2.png"];
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 3vw;
  padding-right: 3vw;

  /* 🔥 overflow 방지 */
  overflow-x: hidden;
}

.top-container {
  width: 100%;
  height: 30vh;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 4vh;
  /* 🔥 원인 제거 */
  margin-left: 0;
  margin-right: 0;
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
  /* 🔥 오버플로우 원인 제거 */
  width: 100%;
}

.trand-area {
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
  background: transparent;
  /* 🔥 배경 완전 제거 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

.hover-carousel .arrow-btn {
  transition: opacity 0.25s ease;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 28px;
}

.popular-container {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
}

.poppular-font {
  margin-right: 20px;
  font-weight: 600;
}

/* 🔥 이미지 기본 흑백 */
.carousel-img {
  filter: grayscale(100%);
  transition: filter 0.4s ease, transform 0.5s ease;
}

/* 🔥 호버 시 컬러 + 약간 확대 */
.carousel-wrapper:hover .carousel-img {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.bottom-container {
  width: 100%;
  margin-top: 40px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 한 줄에 3개 */
  gap: 24px;
  /* 카드 간격 */
}
</style>

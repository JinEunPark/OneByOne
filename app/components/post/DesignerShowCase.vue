<template>
  <v-card class="design-card" elevation="0" rounded="xl">
    <div class="thumbnail-wrapper">
      <!-- 썸네일 이미지 -->
      <v-img :src="thumbnail" class="thumbnail" cover height="260">

      </v-img>

      <!-- 🔥 이미지 위 오버레이 정보 -->
      <div class="overlay-info">
        <div class="left">
          <v-avatar size="30">
            <img :src="avatar" />
          </v-avatar>
          <span class="name">{{ name }}</span>
        </div>

        <div class="right">
          <v-icon size="16" color="white">mdi-heart</v-icon>
          <span>{{ likes }}</span>
          <v-icon size="16" color="white" class="ml-2">mdi-eye</v-icon>
          <span>{{ views }}</span>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  thumbnail: String,
  avatar: String,
  name: String,
  likes: Number,
  views: Number
});
</script>

<style scoped>
.design-card {
  cursor: pointer;
  overflow: hidden;
  border-radius: 18px;
  transition: transform 0.25s ease;
  position: relative;
}

.design-card:hover {
  transform: translateY(-4px);
}

.thumbnail-wrapper {
  position: relative;
}

/* 🔥 기본은 흑백 */
.thumbnail {
  filter: grayscale(100%) brightness(0.9);
  transition: transform .4s ease, filter .4s ease;
}

/* 🔥 호버 시 컬러 + zoom */
.design-card:hover .thumbnail {
  filter: grayscale(0%) brightness(1.05);
  transform: scale(1.05);
}

/* 우측 상단 아이콘 */
.overlay-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.4);
}

/* 🔥 이미지 하단 오버레이 */
.overlay-info {
  position: absolute;
  bottom: 10px;
  left: 12px;
  right: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  font-size: 14px;
  font-weight: 500;

  text-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
}

.overlay-info .left,
.overlay-info .right {
  display: flex;
  align-items: center;
  gap: 6px;
}

.pro-chip {
  background: rgba(255, 255, 255, 0.3);
  color: white !important;
}
</style>

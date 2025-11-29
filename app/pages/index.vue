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

          </div>
          <main-search>
          </main-search>
        </article>
      </div>
      <div class="left-container">
        <article class="trand-area">
          <!-- 트렌드 기사 -->
          <h1>Discover your best Designers</h1>
          <h5>show your talent and make a profit !!!!</h5>
        </article>
      </div>
    </section>
    <section class="bottom-container">
      <!-- 하단 영역 -->
    </section>
  </div>
</template>

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
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.right-container {
  display: inline-block;
  flex: 1;
}

.left-container {
  display: inline-block;
  flex: 1;
}

.bottom-container {
  /* 하단 섹션에 스타일 추가 가능 */
  width: 100%;
}
</style>

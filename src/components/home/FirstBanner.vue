<template>
  <section class="home-banner">
    <div class="home-banner__frame">
      <img class="home-banner__image" :src="banner.image" :alt="banner.mediumText" />
      <div class="home-banner__content">
        <p class="home-banner__text">{{ banner.description }}</p>
        <div class="home-banner__meta">
          <p class="home-banner__medium">{{ banner.mediumText }}</p>
          <p class="home-banner__caption">{{ banner.caption }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  banner: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.home-banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px 80px;
  width: 100%;
  max-width: 1920px;
  min-height: 500px;
  margin: 0 auto;
  flex-grow: 1;
  box-sizing: border-box;
}

.home-banner__frame {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  gap: 80px;
  width: 100%;
  max-width: 1800px;
  min-height: 500px;
  background: #837ddf;
  border-radius: 30px;
  box-sizing: border-box;
}

.home-banner__image {
  width: 33.3%;
  max-width: 606.55px;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  flex: none;
}

.home-banner__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0;
  gap: 43px;
  width: 66.7%;
  max-width: 1189.45px;
  min-height: auto;
  flex-grow: 1;
}

.home-banner__text {
  margin: 0;
  width: 100%;
  max-width: 1000px;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;
  color: #ffffff;
  overflow-wrap: anywhere;
}

.home-banner__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  max-width: 491px;
}

.home-banner__medium {
  margin: 0;
  width: 100%;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
}

.home-banner__caption {
  margin: 0;
  width: 93.08%;
  max-width: 457px;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 23.8294px;
  line-height: 28px;
  color: #ffffff;
}

@media (max-width: 1440px) {
  .home-banner {
    padding: 0 20px 56px;
    min-height: auto;
  }

  .home-banner__frame {
    gap: 40px;
    min-height: auto;
  }

  .home-banner__text {
    width: 100%;
    font-size: 30px;
    line-height: 1.35;
  }

  .home-banner__medium {
    font-size: 28px;
    line-height: 1.3;
  }
}

@media (max-width: 1024px) {
  .home-banner {
    padding: 0 16px 40px;
  }

  .home-banner__frame {
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 24px;
  }

  .home-banner__image {
    width: min(100%, 420px);
    max-height: none;
    align-self: center;
  }

  .home-banner__content {
    width: 100%;
    min-height: auto;
    padding: 0;
    gap: 20px;
  }

  .home-banner__text {
    font-size: 22px;
    line-height: 1.35;
  }

  .home-banner__meta {
    width: 100%;
    gap: 8px;
  }

  .home-banner__medium {
    font-size: 24px;
    line-height: 1.3;
  }

  .home-banner__caption {
    width: 100%;
    font-size: 18px;
    line-height: 1.3;
  }
}
</style>

<template>
  <section class="school-questions">
    <div class="school-questions__frame">
      <div class="school-questions__copy">
        <h2 class="school-questions__title">
          {{ banner.title }}
        </h2>
        <p class="school-questions__description">
          {{ banner.description }}
        </p>
        <div class="school-questions__actions">
          <button
            type="button"
            class="school-questions__btn"
            @click="onContactClick"
          >
            {{ banner.buttonLabel }}
          </button>
        </div>
      </div>
      <div class="school-questions__media">
        <img
          class="school-questions__image"
          :src="banner.image"
          :alt="banner.title.replace(/\n/g, ' ')"
          loading="lazy"
        >
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

function onContactClick() {
}
</script>

<style scoped>
.school-questions {
  --sqb-inline: clamp(16px, 3.2vw, 32px);
  --sqb-bottom: clamp(40px, 6vw, 80px);
  --sqb-frame-pad-x: clamp(16px, 2.2vw, 31px);
  --sqb-gap: clamp(32px, 7.5vw, 139px);
  --sqb-copy-pad-y: clamp(24px, 4.5vw, 58px);
  --sqb-copy-gap: clamp(28px, 4vw, 56px);
  --sqb-title-size: clamp(28px, 2.65vw + 0.5rem, 51px);
  --sqb-title-lh: calc(60 / 50.9321 * 1em);
  --sqb-body-size: clamp(18px, 1.25vw + 0.65rem, 32px);
  --sqb-body-lh: calc(38 / 31.8326 * 1em);
  --sqb-btn-pad: clamp(10px, 1.1vw, 13px);
  --sqb-radius: 30px;
  --sqb-violet: #837ddf;
  --sqb-btn-text: #161221;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 var(--sqb-inline) var(--sqb-bottom);
  box-sizing: border-box;
}

.school-questions__frame {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: var(--sqb-gap);
  width: 100%;
  max-width: min(100%, 1800px);
  min-height: clamp(260px, 24.3vw, 466px);
  padding: 0 var(--sqb-frame-pad-x);
  background: var(--sqb-violet);
  border-radius: var(--sqb-radius);
  box-sizing: border-box;
}

.school-questions__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0 1 auto;
  width: min(100%, 60.5%);
  max-width: min(100%, 1124px);
  min-width: 0;
  min-height: 0;
  padding: var(--sqb-copy-pad-y) 0;
  gap: var(--sqb-copy-gap);
  box-sizing: border-box;
}

.school-questions__title {
  margin: 0;
  width: 66%;
  max-width: 66%;
  flex-shrink: 0;
  box-sizing: border-box;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sqb-title-size);
  line-height: var(--sqb-title-lh);
  color: #ffffff;
  white-space: pre-line;
  overflow-wrap: anywhere;
}

.school-questions__description {
  margin: 0;
  width: 100%;
  min-width: 0;
  flex: 0 1 auto;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sqb-body-size);
  line-height: var(--sqb-body-lh);
  color: #ffffff;
  overflow-wrap: anywhere;
}

.school-questions__media {
  display: flex;
  flex: 1 1 0%;
  min-width: 0;
  min-height: 0;
  align-self: stretch;
  align-items: flex-end;
  justify-content: flex-end;
}

.school-questions__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  flex-shrink: 0;
}

.school-questions__btn {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: clamp(4px, 0.42vw, 8px);
  padding: var(--sqb-btn-pad);
  border: 2px solid #ffffff;
  border-radius: var(--sqb-radius);
  min-height: clamp(48px, 3.3vw, 64px);
  background: transparent;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sqb-body-size);
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.school-questions__btn:hover {
  background: #ffffff;
  color: var(--sqb-btn-text);
}

.school-questions__btn:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 3px;
}

.school-questions__image {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: contain;
  object-position: bottom;
}

@media (max-width: 1440px) {
  .school-questions__frame {
    min-height: auto;
  }
}

@media (max-width: 1024px) {
  .school-questions__frame {
    flex-direction: column;
    align-items: stretch;
    padding: clamp(20px, 4vw, 28px);
    gap: clamp(20px, 4vw, 32px);
    min-height: auto;
  }

  .school-questions__copy {
    flex: 1 1 auto;
    width: 100%;
    max-width: 100%;
    padding: 0;
    gap: clamp(20px, 3vw, 40px);
  }

  .school-questions__title {
    width: 100%;
    max-width: 100%;
  }

  .school-questions__description {
    flex: 0 1 auto;
  }

  .school-questions__media {
    display: none;
  }
}
</style>

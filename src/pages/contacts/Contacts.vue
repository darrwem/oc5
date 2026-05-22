<template>
  <main class="contacts-page">
    <div class="contacts-page__container">
      <Breadcrumbs :items="breadcrumbsItems" />

      <header class="contacts-page__header">
        <h1 class="contacts-page__title">
          МАОУ "Образовательный центр № 5 г. Челябинска"
        </h1>
      </header>

      <section class="contacts-page__layout">
        <div class="contacts-page__row">
          <div class="contacts-page__image-wrapper">
            <img
              class="contacts-page__image"
              src="/public/mock_images/Contacts/contacts.png"
              alt="Контакты образовательного центра"
            >
          </div>

          <div class="contacts-page__content">
            <p class="contacts-page__label">
              Почта:
            </p>

            <p class="contacts-page__value">
              {{ contactsData.email }}
            </p>

            <p class="contacts-page__label">
              Телефон:
            </p>

            <p class="contacts-page__value">
              {{ contactsData.phones[0] }}
            </p>

            <p class="contacts-page__value">
              {{ contactsData.phones[1] }}
            </p>

            <p class="contacts-page__label">
              Адрес:
            </p>

            <p class="contacts-page__value">
              {{ contactsData.address }}
            </p>

            <a
              class="contacts-page__map-link"
              :href="contactsData.mapLinkUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Открыть на Яндекс карте
            </a>

            <SocialLinks />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import Breadcrumbs from '../../components/common/Breadcrumbs.vue'
import SocialLinks from '../../components/common/SocialLinks.vue'
import contactsData from '../../mocks/contacts-page.json'

const breadcrumbsItems = computed(() => [
  { label: 'Главная', to: '/' },
  { label: 'Контакты', current: true }
])
</script>

<style scoped>
.contacts-page {
  width: 100%;
}

.contacts-page__container {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 32px;
  box-sizing: border-box;
}

.contacts-page__header {
  margin-bottom: 36px;
}

.contacts-page__title {
  margin: 0;
  width: 100%;
  max-width: 1856px;

  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;

  color: #161221;
}

.contacts-page__layout {
  width: 100%;
  padding: 0 0 80px;
  box-sizing: border-box;
}

.contacts-page__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  width: 100%;
  max-width: 1856px;

  align-items: stretch;
  box-sizing: border-box;
}

.contacts-page__image-wrapper {
  height: 100%;
}

.contacts-page__image {
  width: 100%;
  height: 100%;

  display: block;
  object-fit: cover;
  border-radius: 30px;
}

.contacts-page__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  height: 100%;
}

.contacts-page__org,
.contacts-page__value {
  margin: 0;
  width: 100%;

  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 43px;

  color: #161221;
}

.contacts-page__label {
  margin: 0;
  width: 100%;

  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: rgba(131, 125, 223, 0.5);
}

.contacts-page__map-link {
  width: 100%;

  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;

  color: rgba(131, 125, 223, 0.6);
  text-decoration: none;

  transition: opacity 0.2s ease;
}

.contacts-page__map-link:hover {
  opacity: 0.8;
}

@media (max-width: 1200px) {
  .contacts-page__container {
    padding: 0 16px;
  }

  .contacts-page__layout {
    padding: 0 0 40px;
  }

  .contacts-page__row {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .contacts-page__image {
    height: auto;
    max-height: 604px;
  }

  .contacts-page__content {
    height: auto;
    gap: 20px;
  }

  .contacts-page__title,
  .contacts-page__org,
  .contacts-page__value {
    font-size: clamp(24px, 3vw, 36px);
    line-height: 1.2;
  }

  .contacts-page__label {
    font-size: clamp(18px, 2vw, 24px);
    line-height: 1.2;
  }

  .contacts-page__map-link {
    font-size: clamp(20px, 2.4vw, 32px);
    line-height: 1.2;
  }
}

@media (max-width: 768px) {
  .contacts-page__container {
    padding: 0 12px;
  }

  .contacts-page__layout {
    padding: 0 0 32px;
  }

  .contacts-page__header {
    margin-bottom: 24px;
  }

  .contacts-page__content {
    gap: 16px;
  }

  .contacts-page__title {
    font-size: 28px;
    line-height: 1.2;
  }

  .contacts-page__org,
  .contacts-page__value {
    font-size: 22px;
    line-height: 1.3;
  }

  .contacts-page__label {
    font-size: 16px;
    line-height: 1.3;
  }

  .contacts-page__map-link {
    font-size: 18px;
    line-height: 1.3;
  }

  .contacts-page__image {
    border-radius: 20px;
  }
}
</style>

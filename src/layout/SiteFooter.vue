<template>
  <footer class="site-footer">
    <div class="site-footer__top">
      <nav class="site-footer__nav" aria-label="Навигация футтера">
        <a class="site-footer__link" href="#about">О школе</a>
        <a class="site-footer__link" href="#news">Новости</a>
        <a class="site-footer__link" href="#parents">Родителям</a>
        <a class="site-footer__link" href="#students">Ученикам</a>
        <a class="site-footer__link" href="#contacts">Контакты</a>
      </nav>
    </div>

    <div class="site-footer__content">
      <div class="site-footer__brand-row">
        <img class="site-footer__brand-icon" src="/assets/oc_logo.png" alt="" />
        <div class="site-footer__brand-title">МАОУ «Образовательный центр № 5 г. Челябинска»</div>
      </div>

      <div class="site-footer__frame">
        <div class="site-footer__contacts">
          <div class="site-footer__phones">
            <a class="site-footer__text-link" href="tel:+73512145510">+7 (351) 214-55-10</a>
            <a class="site-footer__text-link" href="tel:+73512144520">+7 (351) 214-55-20</a>
          </div>
          <div class="site-footer__email">
            <a class="site-footer__text-link" href="mailto:oc-5@bk.ru">Почта: oc-5@bk.ru</a>
          </div>
        </div>

        <div class="site-footer__social">
          <a class="site-footer__social-link" href="#" aria-label="VK">
            <img class="site-footer__social-icon" src="/assets/vk_logo.png" alt="" />
          </a>
          <a class="site-footer__social-link" href="#" aria-label="Мессенджер">
            <img class="site-footer__social-icon" src="/assets/max_logo.png" alt="" />
          </a>
        </div>

        <div class="site-footer__address">
          454030, Российская Федерация, Челябинская область, г. Челябинск, ул. Скульптора
          Головницкого, д. 13
        </div>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="site-footer__copyright">© 25.05.2020 — {{ year }} МАОУ «ОЦ № 5 г. Челябинска»</div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const year = computed(() => new Date().getFullYear())
</script>

<style scoped>
.site-footer {
  --sf-pad-x: clamp(16px, 3.2vw, 32px);
  --sf-pad-y: clamp(12px, 3.2vw, 32px);
  --sf-pad-nav-bottom: var(--sf-gap-frame);
  --sf-gap-nav: clamp(16px, 4vw, 60px);
  --sf-font-nav: clamp(8px, 1.1vw + 0.4rem, 24px);
  --sf-lh-nav: calc(28 / 24 * 1em);
  --sf-gap-content: clamp(12px, 3.5vw, 40px);
  --sf-gap-brand: clamp(12px, 3.5vw, 38px);
  --sf-icon-w: clamp(34px, 5.2vw, 84px);
  --sf-font-title: clamp(10px, 1.6vw + 0.45rem, 32px);
  --sf-lh-title: calc(38 / 32 * 1em);
  --sf-gap-frame: clamp(12px, 3.5vw, 40px);
  --sf-gap-contacts: clamp(6px, 1.6vw, 20px);
  --sf-font-body: clamp(8px, 1.1vw + 0.4rem, 24px);
  --sf-lh-body: calc(28 / 24 * 1em);
  --sf-gap-social: clamp(8px, 2.2vw, 25px);
  --sf-social-size: clamp(22px, 4.2vw, 54px);
  --sf-address-max-w: min(100%, clamp(201px, 55vw, 1207px));
  --sf-font-copy: clamp(10px, 1.6vw + 0.45rem, 24px);
  --sf-lh-copy: calc(28 / 24 * 1em);
  --sf-border: 1px solid #ffffff;

  margin-top: auto;
  background: #161221;
  color: #ffffff;
}

.site-footer__top {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: var(--sf-pad-y) var(--sf-pad-x) var(--sf-pad-nav-bottom);
  background: #161221;
}

.site-footer__nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: var(--sf-gap-nav);
  width: 100%;
  max-width: min(100%, 786px);
}

.site-footer__link {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sf-font-nav);
  line-height: var(--sf-lh-nav);
  white-space: nowrap;
}

.site-footer__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: var(--sf-pad-y) var(--sf-pad-x);
  gap: var(--sf-gap-content);
  background: #161221;
  border-top: var(--sf-border);
  box-sizing: border-box;
}

.site-footer__brand-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--sf-gap-brand);
  width: 100%;
  max-width: min(100%, 926px);
}

.site-footer__brand-icon {
  width: var(--sf-icon-w);
  height: auto;
  aspect-ratio: 83.72 / 121;
  object-fit: contain;
  flex: none;
}

.site-footer__brand-title {
  flex: 1 1 auto;
  min-width: 0;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sf-font-title);
  line-height: var(--sf-lh-title);
}

.site-footer__frame {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sf-gap-frame);
  width: 100%;
  max-width: min(100%, 1207px);
}

.site-footer__contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sf-gap-contacts);
  width: 100%;
  max-width: min(100%, 201px);
}

.site-footer__phones,
.site-footer__email {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sf-gap-contacts);
  width: 100%;
}

.site-footer__social {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--sf-gap-social);
}

.site-footer__social-icon {
  width: var(--sf-social-size);
  height: var(--sf-social-size);
  object-fit: contain;
  display: block;
}

.site-footer__text-link {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sf-font-body);
  line-height: var(--sf-lh-body);
}

.site-footer__address {
  width: 100%;
  max-width: var(--sf-address-max-w);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sf-font-body);
  line-height: var(--sf-lh-body);
  color: #ffffff;
}

.site-footer__bottom {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: var(--sf-pad-y) var(--sf-pad-x);
  gap: clamp(3px, 1.1vw, 10px);
  background: #161221;
  border-top: var(--sf-border);
}

.site-footer__copyright {
  width: 100%;
  max-width: min(100%, 606px);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: var(--sf-font-copy);
  line-height: var(--sf-lh-copy);
}

@media (max-width: 1440px) {
  .site-footer {
    --sf-gap-nav: clamp(14px, 3.5vw, 48px);
  }
}

@media (max-width: 1200px) {
  .site-footer {
    --sf-gap-nav: clamp(12px, 3vw, 32px);
    --sf-gap-frame: clamp(12px, 3vw, 32px);
  }

  .site-footer__nav {
    max-width: 100%;
  }
}

@media (max-width: 900px) {
  .site-footer {
    --sf-pad-nav-bottom: var(--sf-gap-frame);
    --sf-gap-content: clamp(12px, 4vw, 24px);
    --sf-gap-brand: clamp(12px, 4vw, 20px);
    --sf-address-max-w: min(100%, clamp(201px, 72vw, 480px));
  }
}

@media (max-width: 768px) {
  .site-footer {
    --sf-pad-x: clamp(12px, 4vw, 16px);
    --sf-pad-y: clamp(12px, 4vw, 15px);
    --sf-gap-nav: clamp(16px, 6.5vw, 25px);
    --sf-font-nav: clamp(8px, 2.13vw, 12px);
    --sf-lh-nav: calc(8 / 7 * 1em);
    --sf-gap-content: clamp(12px, 4.4vw, 16px);
    --sf-gap-brand: clamp(12px, 4.2vw, 16px);
    --sf-icon-w: clamp(34px, 9.2vw, 50px);
    --sf-font-title: clamp(10px, 2.67vw, 14px);
    --sf-lh-title: calc(12 / 10 * 1em);
    --sf-gap-frame: clamp(12px, 4.4vw, 16px);
    --sf-gap-contacts: clamp(6px, 2.2vw, 8px);
    --sf-font-body: clamp(8px, 2.13vw, 12px);
    --sf-lh-body: calc(8 / 7 * 1em);
    --sf-gap-social: clamp(8px, 2.7vw, 10px);
    --sf-social-size: clamp(22px, 5.9vw, 32px);
    --sf-font-copy: clamp(10px, 2.67vw, 14px);
    --sf-lh-copy: calc(12 / 10 * 1em);
  }
}
</style>

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
        <img
          class="site-footer__brand-icon"
            src="/assets/oc_logo.png"
          alt=""
        />
        <div class="site-footer__brand-title">МАОУ «Образовательный центр № 5 г. Челябинска»</div>
      </div>

      <div class="site-footer__frame">
        <div class="site-footer__frame-row">
          <div class="site-footer__phones">
            <a class="site-footer__text-link" href="tel:+73512145510">+7(351)214-55-10</a>
            <a class="site-footer__text-link" href="tel:+73512144520">+7(351)214-55-20</a>
          </div>

          <div class="site-footer__email">
            <a class="site-footer__text-link" href="mailto:oc-5@bk.ru">oc-5@bk.ru</a>
          </div>

          <div class="site-footer__social">
            <a class="site-footer__social-link" href="#" aria-label="VK">
              <img
                class="site-footer__social-icon"
                src="/assets/vk_logo.png"
                alt=""
              />
            </a>
            <a class="site-footer__social-link" href="#" aria-label="Мессенджер">
              <img
                class="site-footer__social-icon"
                src="/assets/max_logo.png"
                alt=""
              />
            </a>
          </div>
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
  margin-top: auto;
  background: #161221;
  color: #ffffff;
}

.site-footer__top {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  gap: 10px;
  height: 104px;
  background: #161221;
}

.site-footer__nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 60px;
  width: 786px;
  height: 40px;
}

.site-footer__link {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  white-space: nowrap;
}

.site-footer__content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 40px;
  background: #161221;
  border-top: 1px solid #ffffff;
}

.site-footer__brand-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 38px;
  width: 925.72px;
  max-width: 100%;
}

.site-footer__brand-icon {
  width: 83.72px;
  height: 121px;
  object-fit: contain;
  flex: none;
}

.site-footer__brand-title {
  width: 804px;
  max-width: 100%;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
}

.site-footer__frame {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 40px;
  width: 1207px;
  max-width: 100%;
}

.site-footer__frame-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  gap: 160px;
  width: 490px;
  max-width: 100%;
}

.site-footer__phones {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 201px;
}

.site-footer__email {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 20px;
  width: 129px;
}

.site-footer__social {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 25px;
  width: 133px;
}

.site-footer__social-icon {
  width: 54px;
  height: 54px;
  object-fit: contain;
  display: block;
}

.site-footer__text-link {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}

.site-footer__address {
  width: 1207px;
  max-width: 100%;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
}

.site-footer__bottom {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 10px;
  background: #161221;
  border-top: 1px solid #ffffff;
}

.site-footer__copyright {
  width: 606px;
  max-width: 100%;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}

@media (max-width: 1200px) {
  .site-footer__nav {
    width: auto;
    gap: 24px;
    flex-wrap: wrap;
  }

  .site-footer__frame-row {
    width: auto;
    gap: 24px;
    flex-wrap: wrap;
  }
}
</style>
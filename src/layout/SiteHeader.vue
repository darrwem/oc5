<template>
  <header class="site-header">
    <div class="site-header__container">
      <a class="site-header__logo" href="/">
        <svg
          class="site-header__logo-svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M15.6629 0C24.3132 0 31.3257 7.03252 31.3257 15.7076C31.3257 24.3826 24.3132 31.4151 15.6629 31.4151C7.01251 31.4151 0 24.3826 0 15.7076C0 7.03252 7.01251 0 15.6629 0ZM15.4962 5.01305C9.51461 5.01305 4.66554 9.87597 4.66554 15.8747C4.66554 21.8734 9.51461 26.7363 15.4962 26.7363C21.4779 26.7363 26.327 21.8734 26.327 15.8747C26.327 9.87597 21.4779 5.01305 15.4962 5.01305Z"
            fill="#161221"
          />
          <path
            d="M34.1584 36.094C37.1952 36.094 39.6571 38.5629 39.6571 41.6084C39.6571 44.6539 37.1952 47.1227 34.1584 47.1227C31.1216 47.1227 28.6597 44.6539 28.6597 41.6084C28.6597 38.5629 31.1216 36.094 34.1584 36.094ZM34.325 38.0992C32.4845 38.0992 30.9925 39.5955 30.9925 41.4413C30.9925 43.287 32.4845 44.7833 34.325 44.7833C36.1655 44.7833 37.6575 43.287 37.6575 41.4413C37.6575 39.5955 36.1655 38.0992 34.325 38.0992Z"
            fill="#161221"
          />
          <path
            d="M63.9845 33.4204H58.9857V28.4073H35.3248V23.3943H38.6573V5.01305H35.3248V0H47.3219V5.01305H43.6561V23.3943H55.3199V5.01305H51.9874V0H63.9845V5.01305H60.3187V23.3943H63.9845V33.4204Z"
            fill="#161221"
          />
          <path
            d="M26.6602 42.8454C26.6602 32.6523 9.4977 34.3233 9.4977 37.6653V35.1588H0V39.8377H3.99903V59.5557H0V63.7332H13.3301V59.5557H9.4977V43.8481C9.4977 39.8377 20.8283 37.6653 20.8283 43.8481V59.5557H17.1625V63.7332H30.326V59.5557H26.6602V42.8454Z"
            fill="#161221"
          />
          <path
            d="M28.6597 48.4595H39.6571V51.1332H34.1584H28.6597V48.4595Z"
            fill="#161221"
          />
          <path
            d="M63.4846 35.7598V42.611H57.6527V40.2715H47.8217V46.2872H59.9855C65.984 46.2872 64.651 64 59.9855 64H42.6563V56.4804H47.8217V59.154H55.4866C58.9857 59.154 58.6525 51.9687 55.4866 51.9687H42.6563V35.7598H63.4846Z"
            fill="#161221"
          />
        </svg>
      </a>

      <nav class="site-header__nav" aria-label="Основная навигация">
        <a class="site-header__link" href="#about">
          <span class="site-header__link-text">О школе</span>
        </a>
        <a class="site-header__link" href="#news">
          <span class="site-header__link-text">Новости</span>
        </a>
        <a class="site-header__link" href="#parents">
          <span class="site-header__link-text">Родителям</span>
        </a>
        <a class="site-header__link" href="#students">
          <span class="site-header__link-text">Ученикам</span>
        </a>
        <a class="site-header__link" href="#contacts">
          <span class="site-header__link-text">Контакты</span>
        </a>
      </nav>

      <div class="site-header__right">
        <span class="site-header__icon" aria-hidden="true">
          <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.5 0C11.3986 0 8.04209 1.90547 5.58107 4.06473C3.12005 6.22399 1.47866 8.66518 0.633916 10.0714C0.44338 10.3884 0.200398 10.7997 0.0897067 11.308C-0.0298311 11.8566 -0.0299733 12.1431 0.0897067 12.692C0.20037 13.2004 0.44338 13.6116 0.633916 13.9286C1.47866 15.3348 3.12005 17.776 5.58107 19.9353C8.04209 22.0945 11.3986 24 15.5 24C19.6014 24 22.9579 22.0945 25.4189 19.9353C27.88 17.776 29.5213 15.3348 30.3661 13.9286C30.5563 13.612 30.7995 13.2009 30.9103 12.692C31.03 12.1431 31.0298 11.8566 30.9103 11.308C30.7995 10.7992 30.5563 10.388 30.3661 10.0714C29.5213 8.66518 27.88 6.22399 25.4189 4.06473C22.9579 1.90547 19.6014 0 15.5 0ZM15.5 3.42857C18.5342 3.42857 21.0885 4.83337 23.1458 6.63839C25.2031 8.44342 26.6861 10.6203 27.4144 11.8326C27.5709 12.0932 27.5342 12.0257 27.5241 12C27.5342 11.9744 27.5709 11.9068 27.4144 12.1674C26.6861 13.3797 25.2031 15.5566 23.1458 17.3616C21.0885 19.1666 18.5342 20.5714 15.5 20.5714C12.4658 20.5714 9.91148 19.1666 7.8542 17.3616C5.79692 15.5566 4.31386 13.3797 3.58563 12.1674H3.58339C3.42618 11.9058 3.46349 11.9743 3.47366 12C3.46345 12.0257 3.42613 12.0942 3.58339 11.8326H3.58563C4.31386 10.6203 5.79692 8.44342 7.8542 6.63839C9.91143 4.83337 12.4658 3.42857 15.5 3.42857ZM15.5 6.28571C14.3661 6.28571 13.2581 6.61977 12.3154 7.24777C11.3725 7.87565 10.6374 8.76838 10.2035 9.8125C9.76959 10.8566 9.65521 12.0054 9.87651 13.1138C10.0977 14.2224 10.6446 15.2411 11.4464 16.0402C12.2482 16.8394 13.2702 17.3845 14.3825 17.6049C15.4946 17.8255 16.6472 17.7115 17.6948 17.279C18.7423 16.8466 19.638 16.1139 20.268 15.1741C20.8981 14.2345 21.2332 13.1302 21.2332 12C21.2332 10.4845 20.6288 9.03136 19.5536 7.95982C18.4785 6.88816 17.0206 6.28571 15.5 6.28571ZM13.9726 10.096C14.0969 10.1117 14.2178 10.1511 14.3287 10.2143C14.5505 10.3406 14.7139 10.549 14.7811 10.7946C14.8483 11.0402 14.8138 11.3035 14.687 11.5246C14.5977 11.6679 14.5483 11.8314 14.5437 12C14.5437 12.2526 14.6446 12.4955 14.8237 12.6741C15.0029 12.8526 15.2466 12.9531 15.5 12.9531C15.7534 12.9531 15.9971 13.0535 16.1763 13.2321C16.3554 13.4108 16.4563 13.6514 16.4563 13.904C16.4563 14.1566 16.3554 14.3995 16.1763 14.5781C15.9971 14.7568 15.7534 14.8571 15.5 14.8571C14.9966 14.8575 14.5028 14.7261 14.0667 14.4754C13.6307 14.2248 13.2682 13.863 13.0163 13.4286C12.7645 12.9942 12.6313 12.5017 12.6311 12C12.631 11.4983 12.7647 11.0059 13.0163 10.5714C13.1431 10.3504 13.3522 10.1875 13.5986 10.1205C13.7218 10.087 13.8483 10.0802 13.9726 10.096Z"
              fill="#161221"
            />
          </svg>
        </span>

        <span class="site-header__icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8406 0C4.87189 0 0 4.87168 0 10.8401C0 16.8085 4.87189 21.6802 10.8406 21.6802C13.2533 21.6802 15.3719 20.7323 17.1769 19.3895L21.3265 23.5409C21.4718 23.6863 21.6444 23.8017 21.8343 23.8805C22.0242 23.9593 22.2278 23.9999 22.4335 24C22.6391 24.0001 22.8427 23.9597 23.0327 23.8811C23.2227 23.8025 23.3954 23.6872 23.5409 23.5419C23.6863 23.3966 23.8018 23.224 23.8805 23.0341C23.9593 22.8442 23.9999 22.6406 24 22.435C24.0001 22.2293 23.9597 22.0257 23.8811 21.8357C23.8025 21.6457 23.6872 21.4731 23.5419 21.3276L19.3903 17.1762C20.7322 15.3717 21.6811 13.2518 21.6811 10.8401C21.6811 4.87168 16.8092 0 10.8406 0ZM10.8406 3.13036C15.1174 3.13036 18.5506 6.56346 18.5506 10.8401C18.5506 12.9152 17.7172 14.7731 16.3964 16.1552C16.3069 16.2269 16.2255 16.3082 16.1538 16.3977C14.7716 17.7184 12.9157 18.5498 10.8406 18.5498C6.56374 18.5498 3.13049 15.1167 3.13049 10.8401C3.13049 6.56346 6.56374 3.13036 10.8406 3.13036Z"
              fill="#161221"
            />
          </svg>
        </span>

        <a class="site-header__offsite-btn" href="#">
          <span class="site-header__offsite-btn-text">Официальный сайт</span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #ffffff;
}

.site-header__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 40px;
  gap: 92px;

  position: relative;
  width: 100%;
  max-width: 1920px;
  height: 136px;
  margin: 0 auto;
  background: #ffffff;
}

.site-header__logo {
  margin: 0 auto;
  width: 64px;
  height: 64px;
  background: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;

  text-decoration: none;
}

.site-header__logo-svg {
  display: block;
  width: 64px;
  height: 64px;
}

.site-header__nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 60px;

  margin: 0 auto;
  width: 786px;
  height: 40px;

  flex: none;
  order: 1;
  flex-grow: 0;
}

.site-header__link {
  text-decoration: none;
  color: #161221;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  white-space: nowrap;
}

.site-header__link:nth-child(1) {
  width: 95px;
}
.site-header__link:nth-child(2) {
  width: 99px;
}
.site-header__link:nth-child(3) {
  width: 128px;
}
.site-header__link:nth-child(4) {
  width: 113px;
}
.site-header__link:nth-child(5) {
  width: 111px;
}

.site-header__right {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 32px;

  margin: 0 auto;
  width: 324px;
  height: 48px;

  flex: none;
  order: 2;
  flex-grow: 0;
}

.site-header__icon {
  display: block;
}

.site-header__offsite-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 16px;
  gap: 10.27px;

  width: 205px;
  height: 48px;
  background: #837ddf;
  border-radius: 30px;

  text-decoration: none;
}

.site-header__offsite-btn-text {
  width: 186px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
}

@media (max-width: 1200px) {
  .site-header__container {
    padding: 24px 16px 28px;
    gap: 32px;
    height: auto;
    align-items: flex-start;
  }

  .site-header__nav {
    gap: 28px;
    width: auto;
    flex-wrap: wrap;
    height: auto;
  }

  .site-header__link {
    font-size: 18px;
    line-height: 22px;
  }

  .site-header__right {
    gap: 16px;
    width: auto;
    height: auto;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .site-header__offsite-btn {
    width: auto;
    padding: 9px 14px;
  }

  .site-header__offsite-btn-text {
    width: auto;
  }
}
</style>


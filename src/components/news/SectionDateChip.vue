<template>
  <div
    class="section-date-chip"
    :class="{ 'section-date-chip--lg': large }"
  >
    <RouterLink
      v-if="sectionTo"
      class="section-date-chip__tag"
      :to="sectionTo"
    >
      {{ sectionLabel }}
    </RouterLink>
    <span
      v-else
      class="section-date-chip__tag"
    >
      {{ sectionLabel }}
    </span>
    <time
      class="section-date-chip__date"
      :datetime="date"
    >{{ date }}</time>
  </div>
</template>

<script setup>
defineProps({
  sectionLabel: {
    type: String,
    required: true
  },
  sectionTo: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    required: true
  },
  large: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.section-date-chip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(10px, 1vw, 20px);
  width: 100%;
}

.section-date-chip__tag {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: clamp(8px, 1vw, 10px) clamp(10px, 1.5vw, 14px);
  border-radius: 30px;
  background: rgba(131, 125, 223, 0.6);
  color: #ffffff;
  text-decoration: none;
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: clamp(13px, 1.1vw, 16px);
  line-height: 1.2;
  max-width: 100%;
}

.section-date-chip__date {
  color: rgba(22, 18, 33, 0.55);
  font-family: 'Rubik', system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-weight: 400;
  font-size: clamp(13px, 1.1vw, 16px);
  line-height: 1.2;
}

.section-date-chip--lg .section-date-chip__tag {
  font-size: clamp(20px, 1.4vw + 0.65rem, 32px);
  line-height: calc(38 / 32 * 1em);
}

.section-date-chip--lg .section-date-chip__date {
  font-size: clamp(20px, 1.4vw + 0.65rem, 32px);
  line-height: calc(38 / 32 * 1em);
  color: rgba(22, 18, 33, 0.5);
}
</style>

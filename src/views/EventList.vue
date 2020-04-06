<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard />
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard // Shorthand for ES6 EventCard: EventCard
  }
}
</script>

<style></style>

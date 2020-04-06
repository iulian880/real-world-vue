<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import EventService from '@/services/EventService.js'
import EventCard from '@/components/EventCard.vue'

export default {
  components: {
    EventCard // Shorthand for ES6 EventCard: EventCard
  },
  data() {
    return {
      events: []
    }
  },

  created() {
    EventService.getEvents() // <-----
      .then(response => {
        this.events = response.data // For now, logs out the response
      })
      .catch(error => {
        console.log('There was an error:', error.response) // Logs out the error
      })
  }
}
</script>

<style></style>

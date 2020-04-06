import Vue from 'vue'
import VueRouter from 'vue-router'
import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
import EventShow from '../views/EventShow.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    }
  ]
})

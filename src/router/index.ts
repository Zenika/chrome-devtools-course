import { createRouter, createWebHistory } from 'vue-router'
import ElementsView from '@/views/ElementsView.vue'
import ConsoleView from '@/views/ConsoleView.vue'
import HomeView from '@/views/HomeView.vue'
import SourcesView from '@/views/SourcesView.vue'
import NetworkView from '@/views/NetworkView.vue'
import PerformanceView from '@/views/PerformanceView.vue'
import LighthouseView from '@/views/LighthouseView.vue'
import MoreToolsView from '@/views/MoreToolsView.vue'
import ResourcesView from "@/views/ResourcesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/elements',
      name: 'elements',
      component: ElementsView
    },
    {
      path: '/console',
      name: 'console',
      component: ConsoleView
    },
    {
      path: '/sources',
      name: 'sources',
      component: SourcesView
    },
    {
      path: '/network',
      name: 'network',
      component: NetworkView
    },
    {
      path: '/performance',
      name: 'performance',
      component: PerformanceView
    },
    {
      path: '/lighthouse',
      name: 'lighthouse',
      component: LighthouseView
    },
    {
      path: '/more',
      name: 'more',
      component: MoreToolsView
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView
    }
  ]
})

export default router

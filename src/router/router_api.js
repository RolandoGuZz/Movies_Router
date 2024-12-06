import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../HomePage.vue';


const routes = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/movie',
            name: 'movie',
            component: () => import('../movies/MoviesApi.vue')
        },
        {
            path: '/movie/:id',
            name: 'movie-details',
            component: () => import('../movies/components/MovieDetails.vue')
        },
        {
            path: '/people',
            name: 'people',
            component: () => import('../people/PeopleApi.vue')
        },
        {
            path: '/actor',
            name: 'actor',
            component: () => import('../actors/ActorApi.vue')
        },
        {
            path: '/actor/:id',
            name: 'actor-actors',
            component: () => import('../actors/components/ActorsDetails.vue')
        },
        {
            path: '/tv',
            name: 'tv',
            component: () => import('../tv/TvApi.vue')
        },
        {
            path: '/tv/:id',
            name: 'tv-details',
            component: () => import('../tv/components/TvDetails.vue')
        }
    ]
})

export default routes;
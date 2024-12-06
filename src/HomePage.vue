<template>
    <Loading v-if="isLoading"/>
    <div v-else class="container text-center">
        <h2 class="text-light text-bg-secondary font-bold mt-4 mb-4 p-3 rounded-4" style="letter-spacing: 10px;">Trending Today</h2>
        <div class="row g-4">
            <div class="col-md-4 text-center rounded-5 mt-4" v-for="m in data" :key="m.id">
                <div class="text-bg-secondary p-4 rounded-5 d-flex flex-column h-100">
                    <CardMovie 
                        :poster="`https://image.tmdb.org/t/p/w500${m.poster_path}`" 
                        :titulo="m.title || m.name"
                        :año="m.release_date || m.first_air_date" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import CardMovie from './components/CardMovie.vue';
import Loading from './components/Loading.vue';

const apiKey = '9e3311ec1f57418cb454df1bde326ff2';
const moviesURL = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;

const isLoading = ref(true);
const data = ref([]);

const getMovies = async () => {
    try {
        const resp = await axios.get(moviesURL);
        data.value = resp.data.results;
    } catch (error) {
        console.error(error);
    } finally{
        setTimeout(()=>{
            isLoading.value=false;
        }, 500)
    }
};

getMovies();
</script>
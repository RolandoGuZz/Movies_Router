<template>
  <Loading v-if="isLoading" />
  <div v-else class="container text-center mt-4">
    <h2 class="text-light text-bg-secondary font-bold mt-4 mb-4 p-3 rounded-4" style="letter-spacing: 10px">Best Ranked
    </h2>
    <div class="row g-4">
      <div class="col-md-4 text-center rounded-5 mt-4" v-for="m in data" :key="m.id">
        <div class="text-bg-secondary p-4 rounded-5 d-flex flex-column h-100">
          <CardTV :poster="`https://image.tmdb.org/t/p/w500${m.poster_path}`" :titulo="m.name" />
          <RouterLink :to="`/tv/${m.id}`" class="btn btn-primary fw-bold mt-4">Details</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { RouterLink } from 'vue-router';
import CardTV from '../tv/components/CardTv.vue';
import Loading from '../components/Loading.vue';

const apiKey = '9e3311ec1f57418cb454df1bde326ff2';
const tvURL = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=es`;

const isLoading = ref(true);
const data = ref([]);

const getTVShows = async () => {
  try {
    const response = await axios.get(tvURL);
    data.value = response.data.results;
  } catch (error) {
    console.error(error);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 500)
  }
};

getTVShows();
</script>
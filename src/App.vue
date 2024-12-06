<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-black">
        <div class="container-fluid">
            <a class="navbar-brand">MOVIES</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#colapso">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="colapso">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/" class="nav-link">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/people" class="nav-link">People</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/movie" class="nav-link">Movie</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/actor" class="nav-link">Actor</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/tv" class="nav-link">Tv</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-4">
        <RouterView />
    </div>

    <footer class="bg-black text-light mt-4 pt-4 pb-3">
        <div class="container text-center">
            <p>© 2024 Movies With Router. Derechos reservados.</p>
        </div>
    </footer>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>
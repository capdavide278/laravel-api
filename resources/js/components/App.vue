<template>
    <div class="container">
        <h1 class="text-center">Boolpress</h1>
        <div class="row g-2">
            <div v-for="post in posts" :key="post.id" class="col-sm-6 col-md-4">
                <div  class="card h-100">
                    <img :src="post.image" class="card-img-top" :alt="post.title">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <p class="card-text mb-auto">{{ post.excerpt }}</p>
                        <a :href="baseUrl + '/posts/' + post.slug" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
import { runInThisContext } from 'vm';

export default {
    name:'App',
    data(){
        return {
            baseUrl: window.location.origin,
            posts:[]
        }
    },

    created(){
        axios.get('http://localhost:8000/api/posts')
            .then(res =>{
                this.posts = res.data.response.data; 
                console.log(res);
            })
            .catch(error => console.log('errore!'));
    }
}

</script>

<style lang="scss" scoped>
    @import 'bootstrap/scss/bootstrap';
</style>
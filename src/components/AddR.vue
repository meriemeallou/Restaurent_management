<template>
    <HeaderFile />
    <form @submit.prevent="addR">
  <div class="mb-3">
    <label for="Radress" class="form-label">Restaurent Name</label>
    <input type="text" class="form-control" id="Rname" aria-describedby="Rname" v-model="name">
  </div>
  <div class="mb-3">
    <label for="Radress" class="form-label" >Restaurent Adress</label>
    <input type="text" class="form-control" id="Radress" aria-describedby="Radress" v-model="adress">
  </div>
  <button type="submit" class="btn btn-primary">Add Restaurent</button>
</form>
</template>
<script>
import axios from 'axios';
import HeaderFile from './HeaderFile.vue';

export default {
    name:'AddR',
    components:{
        HeaderFile,
    },
    data(){
        return {
            name: '',
            adress: ''
        }
    },
    methods:{
        async addR(){
            try {
                const result = await axios.post("http://localhost:3000/restaurents", {
                    name: this.name,
                    adress: this.adress,
                });
                if(result.status === 201){
                    this.$router.push('/');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<template>
<h1>update page</h1>
<form @submit.prevent="updateR">
  <div class="mb-3">
    <label for="Radress" class="form-label">Restaurent Name</label>
    <input type="text" class="form-control" id="Rname" aria-describedby="Rname" v-model="restaurents.name">
  </div>
  <div class="mb-3">
    <label for="Radress" class="form-label" >Restaurent Adress</label>
    <input type="text" class="form-control" id="Radress" aria-describedby="Radress" v-model="restaurents.adress">
  </div>
  <button type="submit" class="btn btn-primary" >Update Restaurent</button>
</form>
</template>
<script>
import axios from 'axios';
export default {
 name:'updateR',
 data(){
        return {
            restaurents :{
                name:'',
                address:''
            }
        }
    },
    methods:{
        async updateR(){
            try {
                const response = await axios.put('http://localhost:3000/restaurents/' + this.$route.params.id, this.restaurents);
                if (response.status === 200) {
                    // Redirection vers la page d'accueil après la mise à jour réussie
                    this.$router.push('/');
                }
            } catch (error) {
                console.error(error);
            }
        }
    },
    async mounted(){
      try {
        const result = await axios.get('http://localhost:3000/restaurents/' + this.$route.params.id);
        this.restaurents = result.data;
      } catch (error) {
        console.error(error);
      }
    }
}
</script>

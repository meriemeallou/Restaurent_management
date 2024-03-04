<template>
    <h1>welcome to update page </h1>
    <form>
  <div class="mb-3">
    <label for="Radress" class="form-label">Restaurent Name</label>
    <input type="text" class="form-control" id="Rname" aria-describedby="Rname" v-model="restaurents.name" >
  </div>
  <div class="mb-3">
    <label for="Radress" class="form-label" >Restaurent Adress</label>
    <input type="text" class="form-control" id="Radress" aria-describedby="Radress" v-model="restaurents.adress" >
  </div>
  <button type="submit" class="btn btn-primary" v-on:click="updateR">Update Restaurent</button>
</form>
</template>
<script>
import axios from 'axios'
export default {
    name:'UpdateR',
    data(){
        return{
            name:'',
            restaurents:
                {
                name:'',
                adress:'',
            },
        }
    },
    methods:{
        async updateR(){
                let result = await axios.put("http://localhost:3000/restaurents/"+this.$route.params.id,{
                    name:this.restaurents.name,
                    adress:this.restaurents.adress
                });
                if(result.status==200){
                    this.$router.push('/')
                }
        }
    },
    async mounted(){
        let result = await axios.get('http://localhost:3000/restaurents/'+this.$route.params.id)
        console.warn(result)
        this.restaurents=result.data

    }
}
</script>
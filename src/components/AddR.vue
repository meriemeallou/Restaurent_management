<template>
    <HeaderFile />
    <form>
  <div class="mb-3">
    <label for="Radress" class="form-label">Restaurent Name</label>
    <input type="text" class="form-control" id="Rname" aria-describedby="Rname" v-model="name">
  </div>
  <div class="mb-3">
    <label for="Radress" class="form-label" >Restaurent Adress</label>
    <input type="text" class="form-control" id="Radress" aria-describedby="Radress" v-model="adress">
  </div>
  <button type="submit" class="btn btn-primary" v-on:click="addR">Add Restaurent</button>
</form>
</template>
<script>
import axios from 'axios'
import HeaderFile from './HeaderFile.vue'


export default {
    name:'AddR',
    components:{
        HeaderFile,
    },
    methods:{
        async addR(){
                if (!this.name || !this.adress ) {
                alert('Please fill in all champs.');
            return;
        }
                let result = await axios.post("http://localhost:3000/restaurents",{
                    name:this.name,
                    adress:this.adress,
                });
                if(result.status==201){
                    localStorage.setItem("resto-info", JSON.stringify(result.data));
                }
            }
    }
}
</script>
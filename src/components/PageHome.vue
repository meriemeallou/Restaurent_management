<template>
    <HeaderFile />
    <h1>hi {{name}},welcome to home page </h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Restaurent Name</th>
      <th scope="col">Restaurent Adress</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in restaurents" :key="item.id">
      <td>{{item.name}}</td>
      <td>{{item.adress}}</td>
      <button type="submit" class="btn btn-primary">
        <router-link :to="'/updater'+item.id" class="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Update</router-link>
      </button>
    </tr>
  </tbody>
</table>
</template>
<script>
import axios from 'axios'
import HeaderFile from './HeaderFile.vue'
export default {
    name:'PageHome',
    data(){
        return{
            name:'',
            restaurents:[],
        }
    },
    components:{
        HeaderFile,
    },
   async mounted(){
      let result= await axios.get('http://localhost:3000/restaurents')
      console.log(result)
      this.restaurents=result.data;
    }
}
</script>
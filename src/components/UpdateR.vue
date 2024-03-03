<template>
    <HeaderFile />
    <h1>welcome to update page </h1>
</template>
<script>
import HeaderFile from './HeaderFile.vue'
export default {
    name:'UpdateR',
    components:{
        HeaderFile,
    },
    mounted(){
            let user=localStorage.getItem('user-info')
            if(!user){
                this.$router.push('/sign-up')
            }
        }
}
</script>
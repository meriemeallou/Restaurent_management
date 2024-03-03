<template>
    <h1>welcome to home page </h1>
</template>
<script>
export default {
    name:'PageHome',
    mounted(){
            let user=localStorage.getItem('user-info')
            if(!user){
                this.$router.push('/sign-up')
            }
        }
}
</script>
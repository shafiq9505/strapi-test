<template>
<div class="about">
    <h1> hye {{their_name}}</h1>
    <br>
    <p> Yaw My name is sam </p>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {

            their_name: this.$route.params.name
        }
    },
    mounted() {
      console.warn(this.myFunction('salman','sea horse'))
    },
    methods: {

        myFunction(name, animal) {
            return 'yaw my name is ${name},i am a ${animal}'
        }

    }

}
</script>

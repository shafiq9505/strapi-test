<template>
<div class="hello">
  <div class="holder">

<form @submit.prevent = "addSkill">

<input type = "text" placeholder="Enter Your Skill.." v-model = "skill" v-validate = "'min:5'" name="skill">

<transition name = "alert-in" enter-active-class="animated flipInx" leave-active-class="animated flipOutx"> 
<p class="alert" v-if ="errors.has('skill')">{{errors.first('skill')}}</p>
</transition>

</form>
<ul>
  <transition-group name ="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
  <li v-for="(data,index) in skills" :key="index">{{data.skill}}
    <i class="fa fa-minus-circle" v-on:click ="remove(index)"></i>
  </li>
  </transition-group>
</ul>

<!--<p v-if="skills.length > 4" >You have more </p>
<p v-else> You have less </p> -->
  
  <!-- <div v-bind:class="alertObject"></div>
  </div>-->


<p>This are the skills that you possesed</p>
</div> 
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
      skill:'',
      skills : [
       {"skill": "vue.js"},
       {"skill": "Memasak"},
       {"skill":"Menari"}
     ],
    
    }
},
methods:
{
  addSkill(){
    this.$validator.validateAll().then(result => {
      if (result)
      {
 this.skills.push({skill:this.skill})
 this.skill = '';
      }else
      console.warn('Not valid')
    })
  },
  remove(id)
    {
      this.skills.splice(id,1);
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped src="./skill.css">

  
</style>



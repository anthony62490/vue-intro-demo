<template>
  <div>
    <h3>{{ test }}</h3>
    <!-- @submit.prevent stops the submit function from refreshing the page -->
    <form @submit.prevent='addName(inputName)'>
      <input type='text' placeholder='Name' v-model='inputName'/>
      <button @click='addName(inputName)'>Submit</button>
    </form>
    <button @click='order = "+"'>+</button>
    <button @click='order = "-"'>-</button>
    <!-- Instead of creating values and event handling, Vue automatically binds the value both ways -->
    <br/>
    <div>{{order}}</div>
    <div :key='i' v-for="(e, i) in sortedAdmin">
      <!-- Renders the content, but set the display to none if false
            There is no else version of v-else for this statement -->
      <!-- <span v-show='e.name[0] === "c"'>{{ e.name }}</span> -->
      <!-- Renders a span if the v-if condition is true -->
      <Child :name='e.name'/>
      <span :title="e.title" v-if='e.name[0] === "c"'>{{ e.name }}</span>
      <!-- if the v-if statement is false, render this instead -->
      <h2 v-bind:class='e.name[0] === "j" ? "red" : "blue"' v-else>{{e.name}}</h2>
    </div>
  </div>
</template>

<script>
  import Child from '@/components/Child';
  export default {
    // No need for defining classes. We can just define object literals
    components:{
      Child: Child
    },
    data(){
      return {
        // data is the Vue version of state
        // Data cannot accept new values at runtime, so all data must be declared
        test: 'This is a test of the emergency podcast system',
        inputName: '',
        order: '',
        admin: [
          {name:'anthony'},
          {name:'cody', title:'Bro!'},
          {name:'joshua'}
        ]
      }
    },
    methods:{
      addName(e) {
        console.log('e', e);
        this.admin.push({name:e});
        this.inputName = '';
      }
    },
    computed:{
      sortedAdmin(){
        let sorted = this.admin.slice().sort((a,b) => a.name.localeCompare(b.name));
        if(this.order === '-'){
          return sorted.reverse();
        }
        else{
          return sorted;
        }
      }
    },
    created(){
      console.log('created');
    },
    mounted(){
      console.log('mounted');
    },
    updated(){
      console.log('updated');
    },
    beforeDestroy(){
      console.log('destroyed');
    }
  }
</script>

<style>
  .red {
    background-color: red;
  }
  .blue {
    background-color: blue;
  }
</style>
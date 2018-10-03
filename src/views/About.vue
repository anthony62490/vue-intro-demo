<template>
  <div>
    <h3>{{ test }}</h3>
    <br/>
    <div :key='i' v-for="(e, i) in admin">
      {{ e.name }}
    </div>
  </div>
</template>

<script>
  export default {
    // No need for defining classes. We can just define object literals
    data(){
      return {
        // data is the Vue version of state
        // Data cannot accept new values at runtime, so all data must be declared
        test: 'This is a test of the emergency podcast system',
        admin: [
          {name:'anthony'},
          {name:'cody'},
          {name:'joshua'}
        ]
      }
    }
  }
</script>

<style>

</style>
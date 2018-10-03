<template>
  <div>
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  // props: ['name'] // Simply declares a prop called name
  props: {
    name: {
      // type: String,
      required: true, 
      // default: 'NOSTRING'
      validator(val){
        let types = ['string', 'number'];
        return types.includes(typeof val);
      }
    }
  }
  
}
</script>

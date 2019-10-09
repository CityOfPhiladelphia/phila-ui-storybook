<template>
  <div class="progress-container">
    <progress class="progress is-success" 
      :value="percentage"
      :id="id"
      :max="max"><label 
      :for="id">{{ percentage  + '%' }}</label></progress>
  </div>
</template>
<script>

export default {
  name: 'StepIndicator',
  inheritAttrs: false,
  props: {
    id: {
      type: String, 
      required: true, 
      default: 'progress',
    },
    percentage: {
      type: Number, 
      required: false, 
      default: 25,
    },
    max:{
      type: Number,
      required: false, 
      default: 100
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../styles/ProgressBar.scss';
</style>

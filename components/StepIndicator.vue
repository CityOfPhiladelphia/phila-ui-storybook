<template>
  <div class="progress-container">
    <progress class="progress is-success" 
      :value="(stepNumber / totalSteps) * 100"
      :id="id"
      :max="max">{{ (stepNumber / totalSteps) * 100 + '%' }}</progress>
    <label 
      :for="id"
      class="step-numbers">Step {{ stepNumber }} of {{ totalSteps }}</label>
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
    stepNumber: {
      type: Number,
      required: false,
      default: 1
    },
    totalSteps: {
      type: Number,
      required: false,
      default: 5
    },
    max: {
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

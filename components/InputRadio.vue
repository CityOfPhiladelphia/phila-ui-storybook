<template>
  <div class="input-wrap input-radio">
    <label 
      :for="id"
      class="radio"
    >
      <input
        :id="id"
        v-bind="$attrs"
        :checked="shouldBeChecked"
        :value="value"
        type="radio"
        @change="updateInput"
      >
      <slot />
    </label>
  </div>
</template>
<script>
export default {
  name: "InputRadio",
  model: {
    prop: "modelValue",
    event: "change",
  },
  props: {
    id: {
      type: String,
      default: () => `rd_${String(Math.random().toString(36).substr(2, 9))}`,
    },
    value: {
      type: [ String, Number, Boolean ],
      default: "",
    },
    modelValue: {
      type: [ String, Number, Boolean, Array ],
      default: "",
    },
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue === this.value;
    },
  },
  methods: {
    updateInput() {
      this.$emit("change", this.value);
    },
    uniqid() {},
  },
};
</script>
<style lang="scss">
  @import '../styles/InputRadio.scss';
</style>

<template>
  <div
    class="input-wrap input-textarea"
    :class="{ required: $attrs.required !== undefined }"
  >
    <label :for="$attrs.id">{{ placeholder }}</label>
    <textarea
      class="textarea"
      v-bind="$attrs"
      :aria-labelledby="$attrs.id"
      :aria-required="$attrs.required !== undefined"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @on="$listeners"
    />
  </div>
</template>
<script>
export default {
  name: "InputTextarea",
  inheritAttrs: false,
  props: {
    value: {
      type: [ String, Number ],
      default: "",
    },
    placeholder: {
      type: String,
      default: 'Insert label placeholder here',
    }
  },
};
</script>
<style lang="scss">
@import '../styles/InputTextarea.scss';
</style>


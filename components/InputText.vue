<template>
  <div
    class="input-wrap input-text"
    :class="{ required: $attrs.required !== undefined }"
  >
    <input
      v-bind="$attrs"
      :aria-labelledby="$attrs.id"
      :aria-required="$attrs.required !== undefined"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @on="$listeners"
    >
    <label :for="$attrs.id">{{ placeholder }}</label>
  </div>
</template>
<script>
export default {
  name: "InputText",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'Field Name',
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Great new label',
    }
  },
};
</script>
<style lang="scss" scoped>
  .input-text {
    label {
      position: absolute;
      top: 0px;
      left: 10px;
      z-index: 5;
      font-size: 10px;
      color: #909090;
      font-weight: 300;
      opacity: 0;
    }
    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="search"],
    input[type="tell"],
    input[type="number"] {
      &:focus {
        padding-bottom: 0;
        + label {
          opacity: 1;
        }
      }
    }
  }
</style>

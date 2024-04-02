<template>
  <input :value="modelValue" :placeholder="placeholder" @input="updateInput" class="menu_input" type="text">
</template>

<script>
export default {
  name: "MenuInput",
  props: {
    modelValue: [String, Number],
    placeholder: String,
    upper: Boolean,
  },
  methods: {
    updateInput(event) {
      if (this.upper) {
        this.$emit('update:modelValue', event.target.value.toUpperCase());
      } else {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
}
</script>

<style scoped>
  .menu_input {
    font-size: 1.5em;
    width: 500px;
    padding: 10px;
    border: rgb(28, 83, 55) solid 4px;
    background-color: rgb(167, 220, 175);
  }
</style>
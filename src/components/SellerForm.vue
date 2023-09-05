<template>
  <v-form :class="{'d-none': isValid}" @submit.prevent>
    <v-text-field
      v-model="sellerAmount"
      placeholder="My minimum sale price"
      :rules="sellerRules"
      required
      single-line
      type="number"
    />
    <v-btn type="submit" block class="mt-2" @click="validateSellerAmount">Send</v-btn>
  </v-form>
</template>

<script>

export default {
  props: [ 'modelValue', 'isValid' ],
  emits: [ 'update:modelValue', 'update:isValid' ],
  computed: {
    sellerAmount: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  data() {
    return {
      sellerRules: [
        value => {
          return value && value > 0 ? true : 'Minimum sale price is mandatory to continue';
        },
      ],
    };
  },
  methods: {
    validateSellerAmount() {
      this.$emit('update:isValid', this.sellerAmount && this.sellerAmount > 0 || false);
    },
  },
};
</script>

<style scoped>
</style>
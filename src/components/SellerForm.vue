<template>
  <v-form :class="{'d-none': isSellerAmountValid}" @submit.prevent>
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
      isSellerAmountValid: false,
      sellerRules: [
        value => {
          return value && value > 0 ? true : 'Minimum sale price is mandatory to continue';
        },
      ],
    };
  },
  methods: {
    validateSellerAmount() {
      this.isSellerAmountValid = this.sellerAmount && this.sellerAmount > 0 || false;
      this.$emit('update:isValid', this.isSellerAmountValid);
    },
  },
};
</script>

<style scoped>
</style>
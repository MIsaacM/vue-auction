<template>
  <v-form :class="{'d-none': isValid}" @submit.prevent>
    <v-text-field
      v-model="buyerAmount"
      placeholder="My maximum purchase price"
      :rules="buyerRules"
      required
      single-line
      type="number"
    />
    <v-btn type="submit" block class="mt-2" @click="validateBuyerAmount">Send</v-btn>
  </v-form>
</template>

<script>

export default {
  props: [ 'modelValue', 'isValid' ],
  emits: [ 'update:modelValue', 'update:isValid' ],
  computed: {
    buyerAmount: {
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
      buyerRules: [
        value => {
          return value && value > 0 ? true : 'Maximum purchase price is mandatory to continue';
        },
      ],
    };
  },
  methods: {
    validateBuyerAmount() {
      this.$emit('update:isValid', this.buyerAmount && this.buyerAmount > 0);
    },
  },
};
</script>

<style scoped>
</style>
<template>
  <v-dialog
    v-model="openDialog"
    width="auto"
  >
    <v-card class="pa-6">
      <v-card-title class="text-h5 mb-3 text-center font-weight-bold">
        <span v-if="isPurchaseSuccessful()">Congratulations!</span>
        <span v-else>There was no deal</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class=" my-3">
        <div>Purchase offer was {{ buyerAmount }}€.</div>
        <div>Minimum accepted was {{ sellerAmount }}€.</div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="card_text-temerature font-weight-light mt-3">
        The temperature in {{ weatherData.name || 'unknown' }} is {{ weatherData.main?.temp || 'unknown'}}ºC
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import AxiosHelper from '../helpers/AxiosHelper';

export default {
  props: [ 'modelValue', 'buyerAmount', 'sellerAmount' ],
  emits: [ 'update:modelValue' ],
  data() {
    return {
      weatherData: {},
    };
  },
  computed: {
    openDialog: {
      get() {
        if (this.modelValue === true) {
          this.getWeatherData(42.13802250347867, -0.4081228217849727);
        }
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
  methods: {
    isPurchaseSuccessful() {
      return this.buyerAmount && this.sellerAmount && this.buyerAmount >= this.sellerAmount;
    },
    async getWeatherData(lat, lon) {
      const axios = new AxiosHelper({ baseURL: 'https://api.openweathermap.org' });
      const weatherDataResponse = await axios.instance.get(`/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2b2c54bd4f822b146e23fc28a5e1c1e6`);
      this.weatherData = weatherDataResponse && weatherDataResponse.data;
    },
  },
};
</script>

<style scoped>
.card_text-temerature {
  font-size: 12px !important;
}
</style>
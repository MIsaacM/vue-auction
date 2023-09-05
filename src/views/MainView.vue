<template>
  <MainLayout>
    <v-tabs
      v-model="tabSelected"
      align-tabs="title"
    >
      <v-tab>Buyer</v-tab>
      <v-tab>Seller</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tabSelected">
        <v-window-item>
          <BuyerForm v-model="buyerAmount" v-model:isValid="buyerIsValid"/>
        </v-window-item>
        <v-window-item>
          <SellerForm v-model="sellerAmount" v-model:isValid="sellerIsValid"/>
        </v-window-item>
      </v-window>
    </v-card-text>
  </MainLayout>

  <v-dialog
      v-model="openDialog"
      width="auto"
    >
      <v-card>
        <v-card-title class="text-h5">
          <span v-if="isPurchaseSuccessful()">Congratulations!</span>
          <span v-else>There was no deal</span>
        </v-card-title>
        <v-card-text>
          <div>Purchase offer was {{ buyerAmount }}€.</div>
          <div>Minimum accepted was {{ sellerAmount }}€.</div>
        </v-card-text>
        <v-card-text>
          The temperature in Huesca is XXºC
        </v-card-text>
      </v-card>
    </v-dialog>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import BuyerForm from '../components/BuyerForm.vue';
import SellerForm from '../components/SellerForm.vue';

export default {
  components: {
    MainLayout,
    BuyerForm,
    SellerForm,
  },
  data() {
    return {
      tabSelected: 0,
      buyerAmount: null,
      buyerIsValid: false,
      sellerAmount: null,
      sellerIsValid: false,
      cardTitle: '',
      cardText: '',
    };
  },
  computed: {
    openDialog: {
      get() {
        return this.buyerIsValid && this.sellerIsValid;
      },
      set() {
        this.buyerIsValid = false;
        this.sellerIsValid = false;
      },
    },
  },
  methods: {
    isPurchaseSuccessful() {
      return this.buyerAmount && this.sellerAmount && this.buyerAmount >= this.sellerAmount;
    },
  },
};
</script>

<style scoped>
</style>
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

  <AuctionResultDialog v-model="openDialog" :buyerAmount="buyerAmount" :sellerAmount="sellerAmount"/>
</template>

<script>
import MainLayout from '../layouts/MainLayout.vue';
import BuyerForm from '../components/BuyerForm.vue';
import SellerForm from '../components/SellerForm.vue';
import AuctionResultDialog from '../components/AuctionResultDialog.vue';

export default {
  components: {
    MainLayout,
    BuyerForm,
    SellerForm,
    AuctionResultDialog,
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
      weatherData: {},
    };
  },
  computed: {
    openDialog: {
      get() {
        return this.buyerIsValid && this.sellerIsValid;
      },
      set() {
        this.buyerAmount = null,
        this.sellerAmount = null,
        this.buyerIsValid = false;
        this.sellerIsValid = false;
      },
    },
  },
};
</script>

<style scoped>
</style>
<template>
<v-card class="pa-5">
  <v-row class="pa-3">
    <h2 class="font-weight-light pb-5">Create Endpoint</h2>
    <v-spacer></v-spacer>
    <v-btn
        color="primary"
        @click="save"
    >
      <v-icon left>
        mdi-content-save-outline
      </v-icon>
      Save
    </v-btn>
  </v-row>
  <v-form
      ref="form"
  >
    <v-row>
      <v-col
          cols="12"
          md="6"
      >
        <v-text-field
            label="API Slug"
            required
            placeholder="/profile/:id"
            v-model="route"
        ></v-text-field>
      </v-col>
      <v-col
          cols="12"
          md="6"
      >
        <v-select
            label="HTTP Method"
            required
            :items="HTTPAction"
            v-model="method"
        ></v-select>
      </v-col>
    </v-row>

  </v-form>
</v-card>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: "CreateEndpoint",
  data: () => ({
    HTTPAction: [
      "get",
      "post",
      "put",
      "delete",
      "patch"
    ],
    route: null,
    method: null
  }),
  methods: {
    save() {
      const endpoint = {
        route: this.route,
        method: this.method
      };
      axios.post('/endpoint', endpoint)
      .then(response => router.push({ name: 'endpointsDesign', params: {id: response.data._id}}))
    }
  }
}
</script>

<style scoped>

</style>
<template>
<v-card class="pa-5">
  <h2 class="font-weight-light pb-5">Create Endpoint</h2>
  <v-form
      ref="form"
  >
    <v-text-field
        label="API Slug"
        required
        outlined
        placeholder="/profile/:id"
    ></v-text-field>

    <v-select
        label="HTTP Method"
        required
        outlined
    ></v-select>

  </v-form>
</v-card>
</template>

<script>
export default {
  name: "CreateEndpoint"
}
</script>

<style scoped>

</style>
<template>
  <v-data-table
      :headers="headers"
      :items="endpoints"
      :hide-default-footer="true"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>Endpoints</v-toolbar-title>
        <v-divider
            class="mx-4"
            inset
            vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
            v-model="dialog"
            max-width="500px"
        >
          <template v-slot:activator="{}">
            <v-btn
                color="primary"
                dark
                class="mb-2"
                to="/endpoints/new"
            >
              New Endpoint
            </v-btn>
          </template>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ }">
      <v-icon
          small
          class="mr-2"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import axios from "axios";

export default {
  name: "EndpointsView",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: 'API Method', value: 'method', sortable: false },
      { text: 'API ID', value: '_id', sortable: false },
      { text: 'API Slug', value: 'route', sortable: false },
      { text: 'Manage', value: 'actions', sortable: false },
    ],
    endpoints: [],
    editedIndex: -1,
  }),

  created () {
    axios({
      method: "get",
      url: "/endpoint"
    })
    .then(response => {
      console.log(response)
      this.endpoints = response.data;
    })
  },

  methods: {

  },
}
</script>

<style scoped>

</style>
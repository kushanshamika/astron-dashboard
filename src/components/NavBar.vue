<template>
  <div>
    <v-app-bar
        app
        clipped-left
        color="blue-grey darken-4"
        dark
    >
      <v-img
          class="mx-2"
          src="@/assets/logo.png"
          max-height="40"
          max-width="100"
          contain
      ></v-img>

    </v-app-bar>
    <v-navigation-drawer
        absolute
        permanent
        width="210"
    >
      <v-list dense>

        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Endpoints', icon: 'mdi-api', to: '/endpoints' },
      { title: 'Logs', icon: 'mdi-post', to: '/logs' },
      { title: 'Settings', icon: 'mdi-cog', to: '/settings' },
    ],
  }),
}
</script>

<style scoped>

</style>
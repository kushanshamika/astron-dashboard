<template>
  <v-app>
    <v-main>
      <v-row>
      <div class="col-2">
        <NavBar />
      </div>
      <div class="col-10 pr-16 pt-10">
        <router-view/>
      </div>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>

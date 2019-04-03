<template>
  <v-card height="200px" flat>
    <div class="headline text-xs-center pa-5">
      Active: {{ bottomNav }}
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="teal"
        flat
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        menu:[
            {to:"/",title:"Home"},
            {to:"/admin",title:"Admin"},

        ]
      };
    },
    methods: {
      handleClick(tab, event) {
        var vm = this;
        var route = tab.$attrs.to;
        // console.log("ROUTE TAB",this.$route);
        vm.$router.push({path:route});
      }
    }
  };
</script>
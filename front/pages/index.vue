<template>
  <v-layout
    row
    justify-center
    align-center
    wrap
  >
  <!-- <input type="text" name="" id="" value="amado"> -->
    <v-flex >
      <!-- <v-card> -->
        <v-list three-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-divider></v-divider>
        </v-list>
      <!-- </v-card> -->

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      items: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Pascua juvenil',
            date: "09/04/2019",
            subtitle: "Invitar a todos los jovenes &mdash; <span class='grey--text text--lighten-1'>Jumer</span> "
          },
          { divider: true, inset: false },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Limpieza',
            date: "09/04/2019",
            subtitle: "Adultos mayores a 25 años &mdash;<span class='grey--text text--lighten-1'>Anspac</span> "
          },
          { divider: true, inset: false },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Hora santa de adultos',
            date: "09/04/2019",
            subtitle: "Hora santa &mdash;<span class='grey--text text--lighten-1'>Convivencistas</span> "
          },
          { header: 'Ayer' },

        ]
    }
  }
}
</script>

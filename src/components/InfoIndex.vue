<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Information Index</v-toolbar-title>
      <v-divider class="mx-2" inset vertical />
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-btn slot="activator" color="primary" dark class="mb-2">New Info</v-btn>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedInfo.name" label="Info name"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedInfo.title" label="Info title"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedInfo.body" label="Info body"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click.native="saveInfo">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="this.infos"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.title }}</td>
        <td>{{ props.item.body}}</td>
        <td><v-btn @click="deleteInfo(props.item)">Delete</v-btn></td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "InfoIndex",
  created() {
    this.$store.dispatch("fetchInfos");
  },
  data() {
    return {
      dialog: false,
      editedIndex: -1,
      headers: [
        {
          text: "ID",
          value: "id"
        },
        {
          text: "Info Name",
          align: "left",
          value: "name"
        },
        { text: "Info Title", value: "title" },
        { text: "Info Body", value: "body" },
        { text: "Actions", value: "actions", align: "left" }
      ],
      editedInfo: {
        name: "",
        title: "",
        body: ""
      },
      defaultInfo: {
        name: "",
        title: "",
        body: ""
      }
    };
  },
  computed: {
    infos() {
      return this.$store.state.infos;
    },
    formTitle() {
      return this.editedIndex === -1 ? "New Info" : "Edit Info";
    }
  },
  methods: {
    deleteInfo(info) {
      const index = this.infos.indexOf(info);
      confirm("Are you sure you want to delete this item?") &&
        this.$store.dispatch("deleteInfo", {
          id: info.id,
          index: index
        });
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedInfo = Object.assign({}, this.defaultInfo);
        this.editedIndex = -1;
      });
    },
    saveInfo() {
      this.$store.dispatch("createInfo", {
        name: this.editedInfo.name,
        title: this.editedInfo.title,
        body: this.editedInfo.body
      });
      this.close();
    }
  }
};
</script>

<style lang="scss">
</style>

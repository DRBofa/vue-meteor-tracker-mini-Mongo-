<template>
<div>

    <h1>ValueX </h1>
   <vs-input v-model="form.id" type="number" class="inputx" />
   <vs-input v-model="form.text"  class="inputx" />
  
     <li>
      {{form.done}}
      <vs-switch v-model="form.done"/>
    </li>
       <vs-button  type="gradient" @click="btnAdd">Add</vs-button>
        <!-- <v-text-field
            append-icon="search"
            label="Search"
            single-line
            hide-details
            v-model="itemsSearch"></v-text-field>
    <v-data-table
        :headers="headers"
        :items="todoDone"
        :search="itemsSearch">
        <template
            slot="items"
            slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.text }}</td>
            <td>{{ props.item.done }}</td>
        </template>
    </v-data-table> -->
 <div>
    <vs-table :data="todoDone">
      <template slot="header">
        <h3>
          Users
        </h3>
      </template>
      <template slot="thead">
        <vs-th>
          Id
        </vs-th>
        <vs-th>
          Text
        </vs-th>
        <vs-th>
          Done
        </vs-th>
       
      </template>

      <template slot-scope="{data}">
        <vs-tr :key="indextr" v-for="(tr, indextr) in data" >
          <vs-td :data="data[indextr].id">
            {{data[indextr].id}}
          </vs-td>

          <vs-td :data="data[indextr].text">
            {{data[indextr].text}}
          </vs-td>

          <vs-td :data="data[indextr].done">
            {{data[indextr].done}}
          </vs-td>

        
        </vs-tr>
      </template>
    </vs-table>
  </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            form: {
                id: 3,
                text: 'Papa',
                done: true
            },
            headers: [{
                text: 'Text',
                value: 'text',
                left: true
            }, ],
            itemsSearch: ''
        }
    },
    computed: {
        todoDone() {
            return this.$store.getters.doneTodos
        },
    },
    methods: {
        btnAdd() {
            let data = {
                id: parseInt(this.form.id),
                text: this.form.text,
                done: this.form.done,
            }
            // console.log(data);
            this.$store.dispatch('addDodo', data)
            this.form.id += 1
        }
    }
}
</script>

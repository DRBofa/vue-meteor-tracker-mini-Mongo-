<template>
<div>

    <h1>ValueX </h1>
    <div>
    <center> 
        <vs-input v-model="data" type="number" class="inputx" />
    <vs-button  type="gradient" @click="btnAdd">Add</vs-button>
        </center>
   </div>
   <vs-alert active="true">
{{count}}
</vs-alert>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    data() {
        return {
            data: 0,
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        },
    },
    methods: {
        btnAdd() {
            this.$store.dispatch('increment', parseFloat(this.data))
        }
    }
}
</script>

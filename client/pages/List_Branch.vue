<template>
<div>

    <center>
        <h1>{{title | getBranch}} </h1>
    </center>

    <v-btn
        color="success"
        @click="btnAdd">Success</v-btn>
    <template>
        <v-data-table
            :headers="headers"
            :items="itemlist"
            class="elevation-1">
            <template
                slot="items"
                slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>{{ props.item.price }}</td>
                <td>{{ props.item.cust }}</td>
                <td>{{ props.item.memo }}</td>
            </template>
        </v-data-table>
    </template>
</div>
</template>

<script>
export default {
    data() {
        return {
            data: 0,
            headers: [{
                    text: 'Name',
                    value: 'name'
                },
                {
                    text: 'Price',
                    value: 'price'
                },
                {
                    text: 'Cust',
                    value: 'cust'
                },
                {
                    text: 'Memo',
                    value: 'memo'
                },
            ],
        }
    },
    filters: {
        getBranch(title) {
            console.log(this.itemlist);
            //    this.title.forEach(doc => {

            //    });
        }
    },
    computed: {
        itemlist() {
            return this.$store.state.itemlist
        },
        title() {
            return this.$store.state.branches
        },
        // count() {
        //     return this.$store.getters.getItemByBranch('vd2ksaLLWCjRyfx7E')
        //     // return this.$store.state.
        // },
    },
    methods: {
        btnAdd() {},

    }
}
</script>

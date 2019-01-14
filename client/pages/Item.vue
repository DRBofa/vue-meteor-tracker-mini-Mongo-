<template>
<div>
    <center>
        <h1>Item</h1>
    </center>
    <v-select
        v-model="form.branchId"
        :items="branches"
        item-text="name"
        item-value="_id"
        label="Select branch"
        @change="btnChange"
        single-line></v-select>
    <v-text-field
        v-model="form.name"
        label="Item name"
        required></v-text-field>
    <v-text-field
        type="number"
        v-model="form.price"
        label="Item price"
        required></v-text-field>
    <v-text-field
        type="number"
        v-model="form.cust"
        label="Item cust"
        required></v-text-field>
    <v-text-field
        v-model="form.memo"
        label="Item memo"
        required></v-text-field>

    <v-btn
        color="success"
        @click="btnAdd">Add Item</v-btn>
    {{branches}}
</div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            form: {
                branchId: null,
                name: null,
                price: null,
                cust: null,
                memo: null,
            }
        }
    },
    computed: {
        branches() {
            return this.$store.state.branches
        },
    },
    methods: {
        setItem() {
            Meteor.call('findItem', (err, re) => {
                if (!err) {
                    this.$store.dispatch('setItem', re)
                }
            })
        },
        btnChange(e) {
            console.log(e);
        },
        btnAdd() {
            let data = {
                branchId: this.form.branchId,
                name: this.form.name,
                price: parseFloat(this.form.price),
                cust: parseFloat(this.form.cust),
                memo: this.form.memo,
            }
            Meteor.call('insertItem', data, (err, re) => {
                if (!err) {
                    this.setItem()
                    this.form = {
                        branchId: null,
                        name: null,
                        price: null,
                        cust: null,
                        memo: null,
                    }
                    alert('Success')
                }
            })
        }
    }
}
</script>

<template>
<v-app>
    <v-card
        color="grey lighten-4"
        flat
        height="200px">
        <v-toolbar
            color="grey darken-1"
            dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-menu :nudge-width="100">
                <v-toolbar-title slot="activator">
                    <span>All</span>
                    <v-icon dark>arrow_drop_down</v-icon>
                </v-toolbar-title>

                <v-list>
                    <v-list-tile
                        v-for="item in items"
                        :key="item"
                        @click="btnClick(item)">
                        <v-list-tile-title v-text="item"></v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>

            <v-spacer></v-spacer>

          

            <v-select
                :items="branches"
                item-text="name"
                item-value="_id"
                label="Select branch"
                @change="btnChange"
                value="jziCEai7wBw6HGiCr"
                single-line></v-select>
        </v-toolbar>
        <router-view></router-view>
    </v-card>
</v-app>
</template>

<script>
export default {
    data: () => ({
        items: [
            'Branch', 'Item', 'List view', 'Coworkers','Register','Login'
        ]
    }),
    mounted() {
        
        Meteor.call('findBranch', (err, re) => {
            if (!err) {
                this.$store.dispatch('setBranch', re)
            }
        })
        Meteor.call('findItem', (err, re) => {
            if (!err) {
              
                this.$store.dispatch('setItem', re)
            }
        })
         
    },
    computed:{
       branches() {
            return this.$store.state.branches
        },
        
    },
    methods: {
       btnChange(_id) {
           this.$store.dispatch('setCurrentBranch',_id)
           this.$store.getters.FillterbyBranch(_id)
        },
        btnClick(name) {
            console.log(name);
            if (name == 'Branch') {
                this.$router.push('/branch')
            } else if (name == 'Item') {
                this.$router.push('/item')
            } else if (name == 'Register') {
                this.$router.push('/register')
            } else if (name == 'Login') {
                this.$router.push('/login')
            } else if (name == 'List view') {
                this.$router.push('/listview')
            } else {
                this.$router.push('/index')
            }
        }
    },
}
</script>

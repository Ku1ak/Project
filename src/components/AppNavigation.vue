<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resixe-watcher>
            <v-list>
                <template v-for=" (item, index) in items">
                    <v-list-title: key="index">
                    <v-list-title-content>
                    {{item.title}}
                    <v-list-title-content>
                    </v-list-title>
                    <v-dividee : key="`divider-${index}`"></v-divider>
                    </template>
                    </v-list>
                    </v-navigation-drawer>
    <v-toolbar app color="brown darken-4" dark>
        <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer=!drawer"></vtoolbar-side-icon>
        <v-spacer class="hidden-md-and-up"</v-spacer>
        <v-toolbar-title>{{appTitle}}</v-toolbar-title>
        <v-btn flat class="hidden-sm-and-down">Menu</v-btn>
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-btn flat class="hidden-sm-and-down">SIGN IN</v-btn>
        <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
        </span>
    </v-toolbar>
</template>

<script>
export default {
    name:'AppNavigation',
    data(){
    return {
    appTitle: 'Meal Prep',
    drawer: false,
    items: [
    {title: 'Menu'},
    {title: 'Profile'},
    {title: 'Sign In'},
    {title: 'Join'}
    ]
    };
    }    
};
</script>
<style scoped>
a {
    color: white;
    text-decoration:none;
}
</style>

<template>
    <div class="md-layout md-gutter" id="headerNow">
      <div class="md-layout-item md-size-5" style="padding:0px;"><img src="@/assets/logo.jpg" alt="People" id="falogo"></div>
      <div class="md-layout-item" style="padding:0px;">
      <md-tabs md-sync-route >
        <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
        <md-tab v-if="userLogged" id="tab-pages" md-label="Hire" to="/hire"></md-tab>
        <md-tab v-if="userLogged" id="tab-posts" md-label="Post Job" to="/postJobPg"></md-tab>
        <md-tab v-if="userLogged" id="tab-userProfile" md-label="Profile" to="/profile"></md-tab>
        <md-tab v-if="userLogged" id="tab-userCalendar" md-label="Calendar" to="/profile"></md-tab>
        <md-tab v-if="!userLogged" id="tab-signInNew" md-label="signInNow" to="/login"></md-tab>
        <md-tab v-if="!userLogged" id="tab-signUp" md-label="SignUp" to="/signUp"></md-tab>
        <md-tab v-if="userLogged" id="tab-logout" md-label="Logout" @click="logout"></md-tab>
        <md-tab v-if="userLogged" id="tab-user" md-label="currentUser" to="/"></md-tab>
     </md-tabs>
     <md-dialog :md-active.sync="active" class="container">
      <SignIn></SignIn>
     </md-dialog>
     </div>
    </div>
</template>

<script>
  import firebase from 'firebase'
  import SignIn from '@/components/signIn'
  export default {
    name: 'TabRouter',
      props:['newpg'],
    components:{SignIn},
    data: () => ({
      showDialog:false,
      userLogged:false,
      active:false,
      currentUser:''
    }),
    created() {
    if (firebase.auth().currentUser) {
      this.userLogged = true;
      this.currentUser = firebase.auth().currentUser.email;
      this.$emit('userLoggedIn',this.userLogged);
    }
  },
    methods:{
      logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.userLogged = false;
          this.$emit('userLoggedIn',this.userLogged);
          this.$router.replace('/');
        });
    }
    }
  }
</script>
<style lang="scss" scoped>
#falogo{
width:45px;
height:45px;
}
#headerNow{
z-index:999;
position:fixed;
width:-webkit-fill-available;
}
</style>

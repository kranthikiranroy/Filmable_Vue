<template>
  <div class="container">
    <Header @userLoggedIn="userLogged = $event"></Header>
    <div class="md-layout md-gutter" id="chooseRole">
    <div class="md-layout-item md-size-23 ">
      <LeftBar v-if="userLogged"></LeftBar>
      <a :href="'/signUp'"> <md-button >Left</md-button> </a>
    </div>
    <div class="md-layout-item md-size-45 dashM">
      <div class="findPostJbs" >
      <a :href="'/signUp'"> <md-button class="md-raised" :disabled="!userLogged" >Find Job</md-button> </a>
      <a :href="'/postJobPg'"> <md-button class="md-raised" :disabled="!userLogged">Post Job Now</md-button> </a>
      <md-button class="md-raised" @click="postJbNow=true" :disabled="!userLogged">Post Job</md-button>
      <!--<md-button class="md-raised" @click="userLogged=true;">Logged</md-button>-->
      <md-dialog :md-active.sync="postJbNow" class="container">
       <PostJob></PostJob>
      </md-dialog>
      </div>
      <div class="md-layout-item feed">
      <div class="md-list" v-for="post in posts">
        <div class="md-list-item md-size-100 postOne md-elevation-5">
          <md-card-header id="postHdr">
          <div class="md-layout">
            <div class="md-layout-item md-size-10">
            <md-avatar>
              <img src="@/assets/Batman.jpg" alt="People" class="md-elevation-10">
            </md-avatar>
            </div>
            <div class="md-layout-item md-size-20">
              <div class="" >Batman</div>
              <div class="" >2hr Back</div>
            </div>
          </div>
          </md-card-header>
          <div class="md-title" >Title goes here</div>
          <md-card-content >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            {{post.name}}
          </md-card-content>
          <div class="md-size-100" v-show="enblJbDetails">
            <div class="md-size-10">{{post.id}} {{post.id}} </div>
            <div class="md-size-50">{{post.name}} {{post.name}}</div>
          </div>

          <md-button :disabled="!userLogged" @click="enblJbDetailsNow()">View Job</md-button>
          <md-button :disabled="!userLogged" to="/viewJob">View Job 1</md-button>
        </div>
      </div>
      </div>
    </div>
    <div class="md-layout-item md-size-23">
      <a :href="'/signUp'"> <md-button >Right</md-button> </a>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .feed{
    width: -webkit-fill-available;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  .postbdy{
  border-bottom: 1px solid black;
  }

  .md-layout-item {
    height: auto;
    text-align: center;
    margin-right: 5px;


    &:after {
      width: 100%;
      height: 100%;
      display: block;
      background: md-get-palette-color(red, 200);
      content: " ";
    }

  }
  .dashM{
  height:auto;
  }
  .postOne{
  margin: 10px;
  border: 1px solid #c3c3c3;
  // background-color: #69a98c;
  padding:5px;
  }
  .findPostJbs{
  padding: 10px;
  }
  #chooseRole{
  padding-top: 50px;
  }

  #postHdr{
  border-bottom:1px solid #c3c3c3;
  //padding-right:330px;
  }
</style>

<script>
import Header from '@/components/Header'
import LeftBar from '@/components/leftBar'
import PostJob from '@/components/postJob'
export default {
  name: 'Media',
  components: { Header, LeftBar, PostJob},
  data: () => ({
    posts: [{id:'1', name:'First Job Post from Home'}, {id:'2',name:'Second Job Post on Posts'}, {id:'3',name:' Third Job Post for Archive'}],
    postJbNow:false,
    userLogged:false,
    enblJbDetails:false,
    testt:'hello!'
  }),
  methods:{
    enblJbDetailsNow: function() {
      if(!this.enblJbDetails){
        this.enblJbDetails=true
      }else{
        this.enblJbDetails=false
      }
    }
  }
}
</script>

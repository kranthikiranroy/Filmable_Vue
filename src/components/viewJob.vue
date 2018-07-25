<template>
  <div class="container">
    <Header></Header>
    <div class="md-layout md-gutter" id="viewJob">
    <div class="md-layout-item md-size-23 ">
      <LeftBar v-if="userLogged"></LeftBar>
      <a :href="'/signUp'"> <md-button >Left</md-button> </a>
    </div>
    <div class="md-layout-item md-size-45 dashM">
      <div class="findPostJbs" >
      <a :href="'/signUp'"> <md-button class="md-raised">Find Job</md-button> </a>
      <a :href="'/postJobPg'"> <md-button class="md-raised">Post Job Now</md-button> </a>
      <md-button class="md-raised" @click="postJbNow=true">Post Job</md-button>
      <md-button class="md-raised" @click="userLogged=true;" disabled>Logged</md-button>
      <md-dialog :md-active.sync="postJbNow" class="container">
       <PostJob></PostJob>
      </md-dialog>
      </div>
      <div class="md-layout-item feed md-elevation-10">
        View Job Details <br>
        {{jobDetails.title}}<br>
        {{jobDetails.description}}<br>
        {{jobDetails.venue}}<br>
        {{jobDetails.AuditionDate}}<br>
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
  border: 2px solid #d4cfcf;
  background-color: #82d8b1;
  }
  .findPostJbs{
  padding: 10px;
  }
  #viewJob{
  padding-top: 50px;
  }
</style>

<script>
import Header from '@/components/Header'
import Footer from '@/components/App00'
import LeftBar from '@/components/leftBar'
import PostJob from '@/components/postJob'
const jobDetails = {
  title:"first job from platform",
  description:"Need a female actor for a police role",
  age: "30-35",
  venue:"adb production house",
  contact:"bharath",
  email: "abc@gmail.com",
  AuditionDate: "15-06-2018"
}
export default {
  name: 'Media',
  components: { Header, Footer, LeftBar,PostJob},
  data: () => ({
    posts: [{id:'1', name:'First Job Post from Home'}, {id:'2',name:'Second Job Post on Posts'}, {id:'3',name:' Third Job Post for Archive'}],
    postJbNow: false,
    userLogged: true,
    jobDetails: {
      title:"first job from platform",
      description:"Need a female actor for a police role",
      age: "30-35",
      venue:"adb production house",
      contact:"bharath",
      email: "abc@gmail.com",
      AuditionDate: "15-06-2018"
    }
  }),
}
</script>

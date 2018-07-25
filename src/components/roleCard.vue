<template>
  <div id="roleCard">
    <md-card id="roleCC">
      <div class="rectangle"></div>
      <md-card-media id="proPic">
        <a :href="'/profile'"><img src="@/assets/Batman.jpg" alt="People" class="profilePic md-elevation-10"></a>
      </md-card-media>

      <md-card-header>
        <div class="md-title">Batman - Dark Knight</div>
        <div class="md-subhead">Actor</div>
      </md-card-header>

      <md-card-actions>
        <md-button>Follow</md-button>
        <md-button>More..</md-button>
      </md-card-actions>
    </md-card>
  </div>
  <!--<div id="">
    <md-card id="">
      <div class="rectangle">test</div>
      <md-card-media id="proPic">
        <img src="@/assets/Batman.jpg" alt="People" class=" md-elevation-10">
      </md-card-media>

      <md-card-header>
        <div class="md-title">Batman - Dark Knight</div>
        <div class="md-subhead">Actor</div>
      </md-card-header>

      <md-card-actions>
        <md-button>Follow</md-button>
        <md-button>More..</md-button>
      </md-card-actions>
    </md-card>-->
  </div>
</template>

<script>
  export default {
    name: 'Layouts',
    methods: {
      sendMessage () {
        window.alert('Send a message...')
      },
      doACall () {
        window.alert('Calling someone...')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .profilePic {
  border-radius: 50%;
  border: 2px solid #ffffff;
  }
  #roleCC{
  width:275px;
  }
  #roleCard {
  height:315px;
  width:200px;
  }

  .rectangle{
    z-index:-1;
    height: 70px;
    width: auto;
    background-color: #555;
  }

  #proPic {
  width:75%;
  padding-top:30px;
  padding-bottom:10px;
  padding-right:30px;
  padding-left:95px;
  z-index: 999;
    margin-top: -65px
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }
</style>

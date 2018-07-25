<template>
  <div class="card-expansion">
    <Header></Header>
    <div id="hireNow">
      <div class="searchBarSub md-card">
      <form id="app" action="#">
        <label :data-state="state" for="search">
          <input type="text" placeholder="Search" @click="state = 'opan'" @blur="state='close'"/>
          <i class="fa fa-search" @click="" aria-hidden="true"></i>
        </label>
      </form>
      </div>
    <div class="md-column">
    <div>
    Recommended
    </div>
      <md-card>
        <md-card-media>
          <img src="@/assets/logo.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </div>

            <md-card-expand-trigger>
              <md-button class="md-icon-button">
                <md-icon>keyboard_arrow_down</md-icon>
              </md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>

      <md-card>
        <md-card-media>
          <img src="@/assets/Batman.jpg" alt="People">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div>
              <md-button>Hire</md-button>
            </div>

            <md-card-expand-trigger>
              <md-button>Learn more</md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
    </div>

    <div class="">
    <div>
    <div>All Registered Actors Data! API Driven</div>
    <md-card v-for="dd in actdata">
      {{dd.description}}
    </md-card>
    </div>
        <md-card v-for="actor in actrDtls">
          <md-card-media>
            <img src="@/assets/Batman.jpg" alt="People">
          </md-card-media>

          <md-card-header>
            <div class="md-title">{{actor.name}}</div>
            <div class="md-subhead">{{actor.profsn}}</div>
          </md-card-header>

          <md-card-expand>
            <md-card-actions md-alignment="space-between">
              <div>
                <a :href="'/profile'"><md-button >Hire</md-button></a>
              </div>

              <md-card-expand-trigger>
                <md-button >Know More</md-button>
              </md-card-expand-trigger>
            </md-card-actions>

            <md-card-expand-content>
              <md-card-content>
                {{actor.place}}
              </md-card-content>
            </md-card-expand-content>
          </md-card-expand>
        </md-card>
    </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
  export default {
    name: 'CardExpansion',
    components:{Header},
    data: () => ({
      actrDtls:[
        {name: "Killo",
        profsn: "Acting|Editing",
        place: "Banglore",
        langKnown: "Telugu|English|Hindi|Tamil"},
        {name: "Killo1",
        profsn: "Acting|Editing",
        place: "Banglore",
        langKnown: "Telugu|English|Hindi|Tamil"},
        {name: "Killo2",
        profsn: "Acting|Editing",
        place: "Banglore",
        langKnown: "Telugu|English|Hindi|Tamil"},
        {name: "Killo3",
        profsn: "Acting|Editing",
        place: "Banglore",
        langKnown: "Telugu|English|Hindi|Tamil"},
        {name: "Killo4",
        profsn: "Acting|Editing",
        place: "Banglore",
        langKnown: "Telugu|English|Hindi|Tamil"},
        {name: "Killo5",
        profsn: "Acting|Editing",
        place: "Banglore",
        langKnown: "Telugu|English|Hindi|Tamil"}
      ],
      state: "close",
      actdata:null
    }),
    methods:{
      loadWhen: function(){
      this.axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.actdata = response.data.bpi))
      }
    },
    beforeMount(){
      this.loadWhen()
    }
  }
</script>

<style lang="scss" scoped>
  .card-expansion {
    height: 480px;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }

  #hireNow{
  padding-top:50px;
  }

  .searchBarSub{
  border: 50px solid;
  padding-bottom: 10px;
  background: aqua;
  width: -webkit-fill-available;
  //width: 1000px;
  }

  @import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");
body{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F0AD4E;
}
label{
  position: relative;
  display: inline-block;
  background-color: #fff;
  padding: 5px 12px;
  transition: all 1s ease;
  border-radius: 0;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  &::after{
    content: '';
    display: block;
    height: 2px;
    width: 80%;
    background-color: #F0AD4E;
    transition: all 1s ease 0.5s;
  }
  input{
    transition: width 1s ease, opacity 0.5s ease 0.5s;
    opacity: 1;
    width: 180px;
    height: 25px;
    border: 0;
    outline: none;
    color: darken(#F0AD4E, 25)
  }
  i{
    position: absolute;
    top: 11px;
    right: 11px;
    color: #333;
    cursor: pointer;
  }
  &[data-state="close"]{
    border-radius: 30px;
    padding: 5px 5px;
     transition: all 1s ease;
    &::after{
      width: 0%;
      transition: all 0.3s ease;
    }
    i{
      pointer-events: none;
    }
    input{
      width: 28px;
      height: 25px;
      opacity:0;
      cursor: pointer;
      transition: opacity 0.5s ease, width 1s ease;
      -webkit-appearance:none
    }
  }
}

</style>

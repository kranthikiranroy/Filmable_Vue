<template>
  <div>
    <Header></Header>
    <div class="md-layout md-gutter" id="profSpc">
        <div class="md-layout-item md-size-75 layoutProfLeft">
        <div class="prfDiv"><md-card>
          <md-card-area>
            <div class="rectangle"></div>
            <md-card-media id="ppicDiv">
              <img src="@/assets/Batman.jpg" alt="People" class="ppic md-elevation-10">
            </md-card-media>

            <md-card-header id="ppHdr">
              <div class="md-title">Dark Knight</div>
              <div class="md-subhead">Any time for Gotham city</div>
            </md-card-header>

            <md-card-content id="ppAbt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
            </md-card-content>
          </md-card-area>

          <!-- <md-card-actions md-alignment="left">
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions> -->
        </md-card>
        </div>
        <div class="prfDiv">
          <md-card>
            <md-card-header>
              <div class="md-title">Skill Set</div>
            </md-card-header>

            <md-card-content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
            </md-card-content>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </div>
        <div class="prfDiv">
            <md-card>
              <md-card-header>
                <div class="md-title">Time Line</div>
              </md-card-header>

              <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
              </md-card-content>

              <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
              </md-card-actions>
            </md-card>
         </div>
         <div class="prfDiv">
             <md-card>
               <md-card-header>
                 <div class="md-title">Associated Projects</div>
               </md-card-header>

               <md-card-content>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
               </md-card-content>

               <md-card-actions>
                 <md-button>Action</md-button>
                 <md-button>Action</md-button>
               </md-card-actions>
             </md-card>
          </div>
        </div>
        <div class="md-layout-item layoutProfRight">
        2</div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'
  export default {
    name: 'TabRouter',
    props:[],
    components:{Header},
    data: () => ({
      showDialog:false,
      userLogged:true,
      active:false,
    })
}
</script>
<style lang="scss" scoped>
#falogo{
width:45px;
height:45px;
}
.layoutProfLeft{
padding-left: 70px;
padding-top: 30px;
padding-bottom: 10px;
padding-right: 10px;
}
.layoutProfRight{
border: 1px solid black;
}

#profSpc{
padding:50px;
}

.ppic{
width:200px;
height:200px;
border-radius: 5px;
border: 2px solid #ffffff;
}
#ppicDiv{
z-index:999;
margin-top:-155px;
padding-top: 50px;
padding-right: 600px;
}

.rectangle {
  z-index:-1;
  height: 150px;
  width: auto;
  background-color: #555;
}

#ppHdr{
padding-right: 600px;
}
#ppAbt{
margin: 10px;
border-top: 1px solid black;
}

.prfDiv{
padding-bottom: 5px;
}
</style>

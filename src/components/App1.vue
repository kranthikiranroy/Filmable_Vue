<template>
  <div id="app1" >
    <Header></Header>
    <div>
      <small>Flat</small>
      <md-button>Default</md-button>
      <md-button :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-primary">Primary</md-button>
      <md-button class="md-accent">Accent</md-button>
      <md-button disabled>Disabled</md-button>
    </div>

    <div>
      <small>Raised</small>
      <md-button class="md-raised">Default</md-button>
      <md-button class="md-raised" :md-ripple="false">Ripple Off</md-button>
      <md-button class="md-raised md-primary">Primary</md-button>
      <md-button class="md-raised md-accent">Accent</md-button>
      <md-button class="md-raised" disabled>Disabled</md-button>
    </div>

    <div>
      <small>Dense</small>
      <md-button class="md-dense md-primary">Flat</md-button>
      <md-button class="md-dense md-raised md-primary" >Raised</md-button>
      <PopUp></PopUp>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
  small {
    display: block;
  }
</style>

<script>
  import Header from '@/components/Header'
  import Footer from '@/components/App00'
  import PopUp from '@/components/popUp'
  export default {
    name: 'app1',
    components: { Header, Footer, PopUp },
  }
</script>

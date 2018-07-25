<template>
  <div id="leftBar">
    <RoleCard></RoleCard>
    <md-list id="leftBarList">
      <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">Inbox</span>
        <md-badge class="md-primary md-square" md-content="9" />
      </md-list-item>

      <md-list-item>
        <md-icon><i class="material-icons">account_circle</i></md-icon>
        <span class="md-list-item-text">Profile</span>
      </md-list-item>

      <md-list-item>
        <md-icon><i class="material-icons">people_outline</i></md-icon>
        <span class="md-list-item-text">Connections</span>
        <md-badge class="md-primary" md-content="6" />
      </md-list-item>

      <md-list-item>
        <md-icon><i class="material-icons">style</i></md-icon>
        <span class="md-list-item-text">Buy Credits</span>
        <md-badge class="md-square" md-content="New" />
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import RoleCard from '@/components/roleCard'
  export default {
    name: 'Lists',
    components: {RoleCard},

  }
</script>

<style lang="scss" scoped>
  .md-list {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    border: 1px solid rgba(#000, .12);
  }
  #leftBar{
  padding: 40px;
  z-index:999;
  position:fixed;
  }
  #leftBarList{
   width:275px;
  }
</style>

<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>
      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
        <SignUp></SignUp>
        </md-tab>
        <md-tab md-label="Details">
        <SignUp></SignUp>
        </md-tab>
        <md-tab md-label="Validation">
        <SignUp></SignUp>
        </md-tab>
      </md-tabs>
    </md-dialog>
  </div>
</template>

<script>
  import SignUp from '@/components/signUp'
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: true
    }),
    components:{SignUp},
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>

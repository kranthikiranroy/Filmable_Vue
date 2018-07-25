<template>
  <div id="signInstyle" class="container">
    <form novalidate class="md-layout" @submit.prevent="validateCode">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">Validation Stage</div>
        </md-card-header>
        <md-card-content >
          <md-field :class="messageClass">
            <label>Verification Code</label>
            <md-input v-model="form.vCode" required></md-input>
            <span class="md-error">There is an error</span>
          </md-field>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary" >Verfiy</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </md-card>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        vCode: null
      },
      messageClass:null
    }),
    validations: {
      form: {
        vCode: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(4)
        }
      }
    },
    methods:{
    validateCode () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.saveUser()
      }
    }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  #signInstyle{
  width: 400px;
  }
</style>

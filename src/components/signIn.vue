<template>
  <div id="signInstyleOut">
    <div id ="signInstyleInner" v-if="!nextValidSignIn">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header id="signInTitle">
          <div class="md-title">Please Sign In</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>
          <md-field>
            <label>Password</label>
            <md-input v-model="form.password" type="password"></md-input>
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary" @click="signIn">Sign In</md-button>
          <md-button class="md-raised" @click="close()">Cancel</md-button>
        </md-card-actions>
      </md-card>
    </form>
    <md-card class="md-layout-item md-size-100 md-small-size-100">
      <md-card-actions id="divdrSI"></md-card-actions>
      <md-card-actions>
        <span> or </span>
        <md-button class="md-primary" @click="activeNow">Sign Up func</md-button>
        <a :href="'/signUp'"><md-button class="md-primary">Sign Up</md-button></a>
      </md-card-actions>
    </md-card>
    </div>
  <md-dialog :md-active.sync="active" class="container">
    <SignUp></SignUp>
   </md-dialog>

  </div>
</template>

<script>
  import firebase from 'firebase'
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
  import SignUp from  '@/components/signUp'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    components: {SignUp},
    data: () => ({
      active:false,
      form: {
        email: '',
        password: ''
      },
      userSaved: false,
      sending: false,
      nextValidSignIn: false,
      usrLgd: false
    }),
    validations: {
      form: {
        password: {
          required,
          minLength: minLength(4)
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.password = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      signIn: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(
          data => {
            console.log("Sign In Success", data.user.email);
            this.usrLgd = true;
            this.$emit('userLoggedIn',this.usrLgd);
            this.$router.replace({ path: '/' });
            
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      },
      activeNow () {
      this.active=true
      this.nextValidSignIn=true
      },
      close() {
        this.close()
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
  #signInstyleOut{
  padding-left:400px;
  padding-right:400px;
  }

  #signInstyleInner{
    padding: 40px;
  }

  #signInTitle{
   border: 7px solid #448aff;
   background: #448aff;
   border-radius: 5px;
   color: white;
   padding: 5px;
   margin: 5px;
  }
  #divdrSI{
  border-bottom:2px solid #448aff;
  }
</style>

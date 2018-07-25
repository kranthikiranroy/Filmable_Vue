<template>
  <div id="signInstyle"  class="container">
    <div class="container" v-if="!nextValid">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header id="signUpTitle">
          <div class="md-title">Sign Up Form</div>
        </md-card-header>

        <md-card-content >
          <!--<md-field :class="messageClass">
            <label>User Name</label>
            <md-input v-model="form.userName" required></md-input>
            <span class="md-error">There is an error</span>
          </md-field>-->


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

          <!--<md-field>
            <label>Confirm Password</label>
            <md-input v-model="form.passwordAgain" type="password"></md-input>
          </md-field>-->

          <!--<md-field :class="messageClass">
            <label>Phone Number</label>
            <md-input v-model="form.phoneNum" required></md-input>
            <span class="md-error">There is an error</span>
          </md-field>-->
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary" @click="signUp">Sign Up</md-button>
          <md-button type="submit" class="md-raised md-primary" @click="nextMov">Continue</md-button>
          <md-button class="md-raised" @click="nextMovCan">Cancel</md-button>
        </md-card-actions>
      </md-card>

      <!-- <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar> -->
    </form>
    </div>
  <md-dialog :md-active.sync="userSaved" class="container">
    <VerifyEmailPh></VerifyEmailPh>
   </md-dialog>
   <md-dialog :md-active.sync="signInBack" class="container">
     <SignIn></SignIn>
    </md-dialog>
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
  import VerifyEmailPh from '@/components/verifyEmailPh'
  import SignIn from '@/components/signIn'
  import firebase from 'firebase'
  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    components: {VerifyEmailPh, SignIn},
    data: () => ({
      //nextValid: false,
      form: {
        //userName: null,
        //passwordAgain: null,
        //phoneNum:null,
        email: '',
        password: ''
      },
      userSaved: false,
      sending: false,
    //lastUser: null,
      messageClass:null,
      nextValid:false,
      signInBack:false
    }),
    validations: {
      form: {
        userName: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(3)
        },
        passwordAgain: {
          required,
          maxLength: maxLength(3)
        },
        phoneNum: {
          required,
          maxLength: maxLength(10)
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
        this.form.userName = null
        this.form.password = null
        this.form.passwordAgain = null
        this.form.phoneNum = null
        this.form.email = null
      },
      signUp: function(e) {
        //console.log('signUp!')
        firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then(user => {
          alert('Account Created for ${user}');
          this.$router.push('/');
        },
        err => {
          alert(err.message);
        });
        e.preventDefault();
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          //this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      },
      nextMov () {
      this.nextValid=true
      this.userSaved=true
      },
      nextMovCan () {
      this.nextValid=true
      this.userSaved=false
      this.signInBack=false
      this.$router.push('/');
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
  #signUpTitle{
  border: 7px solid #448aff;
  background: #448aff;
  border-radius: 5px;
  color: white;
  padding: 5px;
  margin: 5px;
  }
</style>

<template>
  <div>
    <md-field>
      <label>First name</label>
      <md-input v-model="noError"></md-input>
    </md-field>

    <md-field>
      <label>Last name</label>
      <md-input v-model="noError"></md-input>
    </md-field>

    <md-field>
      <label for="gender">Gender</label>
      <md-select name="gender" id="gender" md-dense :disabled="sending">
        <md-option value="M">M</md-option>
        <md-option value="F">F</md-option>
      </md-select>
      <span class="md-error">The gender is required</span>
    </md-field>

    <md-datepicker v-model="selectedDate">
      <label>Birthdate</label>
    </md-datepicker>

    <md-field>
      <label>E-mail</label>
      <md-input v-model="noError"></md-input>
    </md-field>

    <md-field>
      <label>Password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-field>
      <label>Password again</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-checkbox v-model="agree" class="md-primary">I agree to the
      <router-link to="/auth/registration">Teams of Use</router-link>
    </md-checkbox>

    <md-button class="md-raised md-primary w-100-button">Register and Continue</md-button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      agree: false
    }
  }
}
</script>



<style>
</style>
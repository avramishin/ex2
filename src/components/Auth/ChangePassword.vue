<template>
  <div>
    <md-field>
      <label>Current password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-field>
      <label>New password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>

    <md-field>
      <label>Confirm new password</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
    <div class="d-flex justify-content-center">
      <md-button class="md-raised md-primary w-100-button">Update</md-button>
    </div>
  </div>
</template>


<style>
</style>

<script>
</script>
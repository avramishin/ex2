<template>
  <div>
    <div>Enter your e-mail used for site registration and you will recieve e-mail with new password
      <md-field md-clearable>
        <label>E-mail</label>
        <md-input v-model="username"></md-input>
      </md-field>
    </div>

    <div>
      <md-button class="md-raised md-primary w-100-button">Reset password</md-button>
    </div>

    <div class="margin">You could always change the password on your profile</div>
  </div>
</template>

<style scoped>
.margin {
  margin: 15px 0 0 0;
}
</style>

<script>
export default {
  data() {
    return {
      username: '',
      password: 12
    }
  }
}
</script>
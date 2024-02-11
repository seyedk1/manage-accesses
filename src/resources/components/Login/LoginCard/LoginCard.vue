<template>
  <v-card
    class="login-card-parent d-flex flex-grow-1 mx-auto my-8"
    max-width="688"
    elevation="16"
    border="50"
  >
    <div class="login-card-right d-flex flex-column justify-content-between">
      <div class="inputs-container">
        <div class="parent-login-icon mb-3 d-flex">
          <svg-icon type="mdi" :path="path"></svg-icon>
          <span class="mr-2 login-text">ورود</span>
        </div>
        <v-text-field
          density="compact"
          label="نام کاربری"
          :rules="[rules.required, rules.counter]"
          variant="outlined"
          class="text-input-style my-3"
          v-model="username"
        ></v-text-field>
        <v-text-field
          density="compact"
          label="رمز عبور"
          :rules="[rules.required, rules.counter]"
          variant="outlined"
          class="text-input-style"
          v-model="password"
        ></v-text-field>
      </div>

      <v-btn
        color="#3e2356"
        :disabled="username.length > 2 && password.length > 2 ? false : true"
        @click="login(username)"
        >ورود</v-btn
      >
    </div>

    <div class="login-card-left d-flex flex-column align-items-center">
      <img
        src="@/assets/images/badesaba_icon.svg"
        aspect-ratio="1"
        alt="badesaba"
        width="80"
        height="80"
      />

      <v-card-title class="text-color"> پیشخوان مدیریت کاربران </v-card-title>
      <v-card-text class="text-color"> نرم افزار باد صبا </v-card-text>

      <p class="text-rules text-color">
        کلیه حقوق این وبسایت متعلق به
        <strong>شرکت پیشگامان موج تلفن همراه</strong> است
      </p>
    </div>
  </v-card>
</template>

<style src="./LoginCard.scss" lang="scss" scoped></style>
<script src="./LoginCard.js"></script>

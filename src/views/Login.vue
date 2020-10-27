<template>
  <div class="w-full max-w-xs mt-10">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gray-100">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          v-model="password"
        />
        <p class="text-red-500 text-xs italic" v-if="!formOk && !initForm">
          Wrong username or password.
        </p>
      </div>
      <div class="flex items-center justify-end">
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="checkUser"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      formOk: false,
      initForm: true,
    };
  },
  created() {
    localStorage.setItem("logged", "");
  },
  methods: {
    checkUser() {
      this.initForm = false;
      this.formOk = this.username === "admin" && this.password === "1234";
      if (this.formOk) {
        localStorage.setItem("logged", "true");
        this.$router.push("Home");
      }
    },
  },
};
</script>

<style>
</style>
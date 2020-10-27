<template>
  <div class="flex flex-col items-center relative">
    <div class="flex flex-col items-center sticky top-0 bg-white">
      <img src="images/logo.png" />
      <h1 class="mt-5">
        {{ repoInfo.description }}
      </h1>
    </div>
    <table class="table-auto class mt-5">
      <thead>
        <td class="border px-4 py-2">Avatar</td>
        <td class="border px-4 py-2">Login</td>
        <td class="border px-4 py-2">Contributions</td>
      </thead>
      <tr v-for="contri in contributors" :key="contri.id">
        <td class="border px-4 py-2">
          <img :src="contri.avatar_url" width="50" />
        </td>
        <td class="border px-4 py-2">
          <router-link :to="`contributor/${contri.login}`">{{
            contri.login
          }}</router-link>
        </td>
        <td class="border px-4 py-2">
          {{ contri.contributions }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repoInfo: {},
      contributors: [],
    };
  },
  created() {
    this.GetRepoData();
  },
  methods: {
    GetRepoData() {
      fetch("https://api.github.com/orgs/vuejs/repos")
        .then((response) => response.json())
        .then((data) => (this.repoInfo = data[0]))
        .then(() => {
          this.GetContributors();
        });
    },
    GetContributors() {
      fetch(this.repoInfo.contributors_url)
        .then((response) => response.json())
        .then((data) => (this.contributors = data));
    },
  },
};
</script>

<style>
</style>
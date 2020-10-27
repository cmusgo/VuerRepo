<template>
  <div class="flex flex-col items-start items-stretch relative">
    <div class="flex flex-col items-center sticky top-0 bg-white flex-1">
      <img :src="contributorData.avatar_url" width="40%" class="mt-5" />
      <div class="mt-5 flex-1"><strong>Name:</strong> {{ login }}</div>
      <div class="mt-5 flex-1">
        <strong>List of repositories:</strong>
      </div>
    </div>
    <div>
      <div class="flex flex-col items-start flex-1">
        <div v-for="repo in contributorRepos" :key="repo.id">
          {{ repo.url }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contributorData: {},
      contributorRepos: [],
    };
  },
  computed: {
    login() {
      return this.$route.params.id;
    },
  },
  created() {
    this.GetContributorData();
  },
  methods: {
    GetContributorData() {
      fetch("https://api.github.com/users/" + this.login)
        .then((response) => response.json())
        .then((data) => (this.contributorData = data))
        .then(() => this.GetReposFromContributor());
    },
    GetReposFromContributor() {
      fetch(this.contributorData.repos_url)
        .then((response) => response.json())
        .then((data) => (this.contributorRepos = data));
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <header>
      <router-link class="link" to="/">Main page</router-link>
      <router-link class="link" to="/discs">Discs page</router-link>
      <router-link class="link" to="/bands">Bands page</router-link>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.link {
  margin: 13px;
  font-size: 17px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  background-color: blanchedalmond;
  padding: 10px;
  border-radius: 7px;
}
</style>

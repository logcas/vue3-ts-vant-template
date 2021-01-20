<template>
  <div id="nav">
    <van-button>Hello</van-button>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#nav {
  font-size: 16px;
}
</style>

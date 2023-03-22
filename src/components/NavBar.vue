<template>
  <div class="nav">
    <div class="logo">NBlog 
      </div>
    <div class="nav-link">
      <ul>
        <li>
          <RouterLink to="/"><a>Home</a></RouterLink>
        </li>
        <li>
          <RouterLink to="/admin/myblogs"><a>My Blogs</a></RouterLink>
        </li>
        <li><a>About</a></li>
      </ul>
    </div>

    <div class="profile">
      <img :src="`https://i.pravatar.cc/50?u=jhon`" alt="Author" />
      <div class="user-name">Nandar</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  },
};
</script>

<style scoped>
.nav {
  height: 75px;
  background: rgb(142, 219, 142);
  box-shadow: 0 5px 5px rgb(182 182 182 / 75%);
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr;
}

.nav-link {
  margin: auto 0;
}

.nav-link ul {
  list-style-type: none;
  overflow: hidden;
  /* margin: 0;
  padding: 0; */
}

.nav-link li {
  float: left;
}

.nav-link li a {
  margin: auto 0;
  padding: 0px 30px;
  text-decoration: none;
  color: white;
  font-size: 17px;
  text-transform: uppercase;
}

.logo {
  font-size: 34px;
  font-weight: bold;
  margin: auto;
}

.profile {
  margin: auto;
  display: flex;
}

.profile img {
  border-radius: 29px;
  height: 45px;
}
.user-name {
  margin: auto;
  padding-left: 16px;
  font-size: 18px;
  font-weight: bold;
}
</style>

<template>
  <NavBar />
  <router-view></router-view>
  <!-- <button @click="add">Add</button> -->
  <BlogList :blogs="blogs" />

</template>

<script>
import NavBar from "@/components/NavBar.vue";
import appConfig from "@/config/appconfig.js";
import BlogList from "@/components/blog/BlogList.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    BlogList,
    NavBar,
  },
  data() {
    return {
      blogs: [],
    };
  }, 
  mounted() {
    
    axios
      .get(appConfig.UAT_URL + "blogs")
      .then((response) => {
        this.blogs = response.data;
        console.log(this.blogs);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  },

  methods:{
    add(){
       this.$store.commit('increment')
       console.log(this.$store.getters.getCount)
    }
  }
 
};
</script>

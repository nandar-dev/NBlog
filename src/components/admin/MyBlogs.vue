<template>
  <NavBar />
  <div class="whole-content">
    <div class="table-title">
      <h2 class="header-title">My Blog ( {{ totalBlog }} )</h2>

      <div class="add-blog-button">
        <RouterLink to="/createblog"> <button>Create Blog</button></RouterLink>
      </div>
    </div>

    <table>
      <tr>
        <th>Image</th>
        <th>Title</th>
        <th>Category</th>
        <th>Total Read</th>
        <!-- <th style="width: 40px">Status</th> -->
        <th>Status</th>
        <th style="width: 200px">Action</th>
      </tr>

      <tr v-for="blog in blogs" :key="blog._id">
        <td><img :src="imgUrl(blog)" alt="Blog" /></td>
        <td>{{ blog.title }}</td>
        <td>{{ blog.category }}</td>
        <td>{{ blog.totalread }}</td>
        <td class="publish-icon">
          <i v-if="!blog.publiced" class="fa fa-lock" aria-hidden="true"></i>
          <i v-else class="fa fa-globe" aria-hidden="true"></i>
        </td>
        <td>
          <div class="action">
            <button class="edit">Edit</button>
            &nbsp;
            <button class="delete">Delete</button>
          </div>
        </td>
      </tr>
    </table>
    <div v-if="blogs.length === 0" class="loading">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
import appConfig from "@/config/appconfig.js";
import NavBar from "@/components/NavBar.vue";
import axios from "axios";

export default {
  name: "MyBlog",
  components: {
    NavBar,
  },
  data() {
    return {
      blogs: [],
      totalBlog: "-",
    };
  },
  mounted() {
    axios
      .get(appConfig.UAT_URL + "myblogs")
      .then((response) => {
        this.blogs = response.data;
        this.totalBlog = this.blogs.length;
        console.log(this.blogs);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  },
  methods: {
    imgUrl(blog) {
      return blog.image + "/" + blog.index;
    },
  },
};
</script>

<style scoped>
.whole-content {
  padding: 50px 100px;
}
.table-title {
  display: grid;
  grid-template-columns: auto auto;
}
.header-title {
  text-align: left;
}

.add-blog-button {
  margin: auto 0;
  text-align: right;
}

.add-blog-button button {
  background: #6767f5;
  color: white;
  font-size: 15px;
}

.add-blog-button button:hover {
  background: #5050c5;
  cursor: pointer;
}

table {
  border-collapse: collapse;
  width: 100%;
}
table img {
  height: 60px;
  width: 100px;
}

th,
td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

th {
  background-color: #878787;
  color: white;
}
.publish-icon {
  font-size: 23px;
  color: cornflowerblue;
}
.fa-lock:before {
  content: "\f023";
  color: rgb(209 209 81);
}
/* loading */

.loading {
  margin-left: 50%;
  padding: 19px 0px;
}

.loader {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: spin-2162d585 2s linear infinite;
  animation: spin-2162d585 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* buttones */

.add-blog-button button,
.action button {
  height: 35px;
  border: none;
  /* color: white; */
  border-radius: 3px;
  padding: 0px 20px;
}
.action .edit {
  border: solid 1px #6767f5;
  color: #6767f5;
  transition: 300ms;
}

.action .delete {
  border: solid 1px #c94f4f;
  color: #c94f4f;
  transition: 300ms;
}

.action .edit:hover {
  background: #6767f5;
  color: #fff;
}

.action .delete:hover {
  background: #c94f4f;
  color: #fff;
}
</style>

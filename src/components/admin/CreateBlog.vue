<template>
  <NavBar />
  <div class="whole-content">
    <div class="breadcrumbs">
      <RouterLink to="/admin/myblogs">
        <span class="goto-link"> My Blogs </span>
      </RouterLink>
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
      <span class="current-link">Create Blog</span>
    </div>

    <div class="form-content">
      <div class="label">Blog Title</div>
      <input class="custom-input" type="text" placeholder="Blog Title" />

      <div class="label">Select Category</div>
      <select class="custom-select">
        <option value="">Select Category</option>
        <option
          v-for="category in blogs"
          :key="category.category"
          :value="category.category"
        >
          {{ category.category }}
        </option>
      </select>

      <!-- <input
        ref="fileInput"
        type="file"
        @change="onFileChange"
        style="display: none"
      />
      <button id="fileInputButton" @click="$refs.fileInput.click()">
        Open File
      </button> -->

      <div class="choose-image">
        <!-- <input type="file" @change="onFileChange" /> -->

        <input
          ref="fileInput"
          type="file"
          @change="onFileChange"
          style="display: none"
        />
        <button
          class="choose-img-btn"
          id="fileInputButton"
          @click="$refs.fileInput.click()"
        >
          Choose Image
        </button>
      </div>

      <div v-if="url" class="preview-image">
        <div @click="clearImg" class="close">
          <i class="fa fa-times-circle" aria-hidden="true"></i>
        </div>
        <img v-if="url" :src="url" />
      </div>

      <QuillEditor theme="snow" style="height: 300px"/>
    </div>
  </div>
</template>

<script>
import appConfig from "@/config/appconfig.js";
import NavBar from "@/components/NavBar.vue";
import axios from "axios";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  name: "CreateBlog",
  components: {
    NavBar,
    QuillEditor,
  },
  data() {
    return {
      url: null,
      image: {
        file: null,
        url: null,
      },
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
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    clearImg() {
      this.url = null;
    },
  },
};
</script>

<style scoped>
.whole-content {
  padding: 50px 100px;
}

a:link {
  text-decoration: none;
}
/* ---- Form ---- */

.form-content {
  margin: 50px 7%;
}
.custom-input {
  width: 100% !important;
}

.label {
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 5px;
}
.choose-image {
  text-align: left;
  margin-bottom: 21px;
}
.choose-img-btn {
  height: 40px;
  border: none;
  border-radius: 30px;
  padding: 0px 20px;
  background: #8edb8e;
  color: white;
  font-size: 15px;
}
.choose-img-btn:hover {
  background: #7dc27d;
  cursor: pointer;
}
.preview-image {
  text-align: left;
}
.preview-image img {
  height: 200px;
  width: 300px;
  margin-bottom: 21px;
}
.close {
  width: 300px;
  text-align: right;
  position: absolute;
  font-size: 23px;
  margin: -3px 0px 0px -4px;
  color: #e14e4e;
}

</style>

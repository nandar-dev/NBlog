<template>
  <div class="blogs">
    <div v-if="blogs.length === 0">
      <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" class="blogs-content">
        <div class="card-skeleton loading">
          <div class="image"></div>
          <div class="content">
            <h4></h4>
            <div class="description"></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div v-for="blog in blogs" :key="blog._id" class="blogs-content">
        <div class="card">
          <div class="header">
            <div class="profile">
              <img :src="`https://i.pravatar.cc/50?u=${blog.author}`" alt="Author Image" />
              <div class="user-name">{{ blog.author }}</div>
            </div>
            <div class="category-content">
              <div class="category">
                <button>{{ blog.category }}</button>
              </div>
            </div>
          </div>
          <img class="blog-img" :src="imgUrl(blog)" alt="Blog Image" />
          <div class="title">{{ blog.title }}</div>
          <div class="description">
            {{ blog.description }}
          </div>
          <div class="footer">
            <div>{{ formatDate(blog.published) }}</div>

            <div class="read-time">{{ readTime(blog.description) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "BlogList",
  props: {
    blogs: Array,
  },
  methods: {
    imgUrl(blog) {
      return blog.image + "/" + blog.index;
    },
    formatDate(data) {
      if (data) {
        return "Published: " + moment(String(data)).format("YYYY/MM/DD");
      }
    },

    readTime(desc) {
      const wordsPerMinute = 200; // Average case.
      let result;
      let textLength = desc.split(" ").length; // Split by words
      if (textLength > 0) {
        let value = Math.ceil(textLength / wordsPerMinute);
        result = `${value} min read`;
      }
      return result;
    },
  },
};
</script>

<style scoped>
.blogs {
  padding: 50px 100px;
}

.card-skeleton {
  width: 320px;
  margin: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  transition: transform 0.5s ease-in-out, box-shadow 0.1s;
}

.card {
  width: 320px;
  margin: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  /* box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1); */
  transition: transform 0.3s ease-in-out, box-shadow 0.1s;
}

.card:hover {
  cursor: pointer;
  transform: translateY(-0.2rem) scale(1.0025);
  box-shadow: 0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5);
}

.header {
  display: grid;
  grid-template-columns: auto auto;
}

.category button {
  background: #e5e5e5;
  border: none;
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 13px;
  color: #707070;
}

.category-content {
  text-align: right;
  color: rgb(142, 219, 142);
  margin: auto 12px;
}

.blogs-content {
  display: inline-flex;
}
.blog-img {
  width: 300px;
  height: 200px;
  padding: 0 10px;
  object-fit: cover;
}

.profile {
  display: flex;
}

.profile img {
  border-radius: 30px;
  height: 39px;
  margin: 11px 7px 11px 11px;
}
.user-name {
  margin: auto 0;
  font-size: 15.5px;
  color: #626262;
}
.title {
  text-align: left;
  padding-left: 10px;
  font-size: 19px;
  font-weight: bold;
}
.description {
  height: 42px;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 6px 10px;
  color: #8d8d8d;
}

.footer {
  padding: 10px 5px 10px 5px;
  color: grey;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.read-time {
  text-align: right;
  padding-right: 8px;
}

/* ---- Skeleton Loader ---- */

.image {
  height: 200px;
}

.image img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.content {
  padding: 2rem 1.8rem;
}

h4 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.4rem;
}

.loading .image,
.loading h4,
.loading .description {
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

.loading h4 {
  min-height: 1.6rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}

.loading .description {
  min-height: 4rem;
  border-radius: 4px;
  animation-delay: 0.06s;
}
</style>

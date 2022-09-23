<template>
  <div class="signup-content">
    <div class="card-shadow">
      <div class="title">Login</div>

      <div class="form-content">
        <input class="custom-input" type="email" placeholder="Email Address" />
        <input class="custom-input" type="password" placeholder="Password" />
      </div>
      <div class="forgotpass">
        <router-link to="#">
          <a class="link-des">Forgot Password?</a>
        </router-link>
      </div>

      <button class="login-button">Login</button>

      <p class="des">
        Don't have an account?
        <router-link to="/signup">
          <a class="link-des">Register</a>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
};
</script>

<style scoped>
.title {
  font-weight: 600;
  font-size: var(--title-font);
}

.signup-content {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right top,
    #4e707f,
    #577b9a,
    #7084b2,
    #9589c3,
    #c18bc9
  );
  /* background: linear-gradient(-45deg, #f1977c, #b6768e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradient 60s ease infinite;
  -moz-animation: gradient 60s ease infinite;
  animation: gradient 60s ease infinite; */
  height: 100vh;
}
.card-shadow {
  width: 300px;
  box-shadow: 0px 10px 15px 9px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: white;
  padding: 10px;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.form-content {
  margin-top: 20px;
}

a:link {
  text-decoration: none;
  color: #7ebbcd;
}
.forgotpass {
  text-align: right;
  margin: -11px 26px 16px 0px;
  font-size: 14px;
  text-decoration: underline;
}
</style>

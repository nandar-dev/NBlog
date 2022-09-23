<template>
  <div>
    <section class="login">
      <div class="form-content">
        <div class="text-lg mb-3">Demo App</div>
        <div class="font-bold text-2xl">Welcome to Demo App</div>

        <div class="form-container mt-5">
          <form>
            <div class="mb-4">
              <div class="field-label">User Name</div>
              <input
                type="text"
                class="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="username"
                placeholder="User Name"
              />
            </div>
            <div class="mb-4">
              <div class="field-label">Email Address</div>
              <input
                type="text"
                class="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                placeholder="Email Address"
              />
            </div>
            <div class="mb-4">
              <div class="field-label">Password</div>
              <input
                type="password"
                class="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="Password"
              />
            </div>
            <div class="mb-4">
              <div class="field-label">Confirm Password</div>
              <input
                type="password"
                class="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>
            <div class="flex justify-between items-center mb-6">
              <div class="flex items-center">
                <input
                  checked
                  id="checked-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="checked-checkbox"
                  class="ml-2 text-sm font-medium focus:outline-none"
                  >Remember me</label
                >
              </div>
            </div>

            <div class="text-center pt-3 mb-12 pb-1">
              <button
                class="bg-blue-700 inline-block px-6 py-2.5 text-white font-semibold text-sm tracking-wide leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-5"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
               Sign up
              </button>
            </div>
          </form>
          <p class="text-sm font-semibold mt-2 pt-1 mb-0">
            Already have an account?
            <router-link to="/login">
              <a
                class="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                >Sign In</a
              ></router-link
            >
          </p>
        </div>
      </div>
      <div class="image">
        <img :src="loginSVG" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SignUpPage",
  data() {
    return {
      loginSVG: require("/src/assets/svgs/signup.svg"),
    };
  },
};
</script>

<style>
.login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  background: linear-gradient(90deg, #fff 50%, rgb(245, 244, 244) 50%);
}
.form-content {
  margin: auto;
}
.form-container {
  padding: 20px;
}

input,
#email,
#password {
  width: 380px;
}

.field-label {
  text-align: left;
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 15px;
}

.image {
  margin: auto;
}

@media only screen and (max-width: 824px) {
  input,
  #email,
  #password {
    width: 350px;
  }
}

@media only screen and (max-width: 768px) {
  .login {
    grid-template-columns: 1fr;
    background: none;
  }
  .image {
    display: none;
  }
}
</style>

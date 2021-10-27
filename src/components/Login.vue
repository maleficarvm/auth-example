<template>
  <div>
    EMAIL:<input type="email" v-model="email" /> PASSWORD:<input
      type="password"
      v-model="password"
    />
    <button type="submit" @click="login">Login!</button> {{ error }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password,
      };
      axios.post("http://localhost:5002/login", user).then((res) => {
        // if successful
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          this.$router.push("/");
        }
        (err) => {
          console.log(err.response);
          this.error = err.response.data.error;
        };
      });
    },
  },
};
</script>

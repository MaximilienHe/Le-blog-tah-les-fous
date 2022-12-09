<template>
  <div class="loginContainer">
    <div class="login">
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
        rel="stylesheet"
      />
      <h3>Se connecter</h3>

      <label for="username">Nom d'utilisateur</label>
      <input
        v-model="username"
        type="text"
        placeholder="Nom d'utilisateur"
        id="username"
      />

      <label for="password">Mot de passe</label>
      <input
        v-model="password"
        type="password"
        placeholder="Mot de passe"
        id="password"
      />

      <button v-on:click="LogIn">Log In</button>
      <a href="/register">
        <p>Cliquez ici pour créer un compte</p>
      </a>
    </div>
  </div>
</template>

<script>
import axiosInstance from "../axiosImport";

export default {
  name: "login-default",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    LogIn: function () {
      var session = {
        username: this.username,
        password: this.password,
      };

      axiosInstance
        .post(
          "https://r0301-frameworksweb-production.up.railway.app/sessions",
          session
        )
        .then(function (resp) {
          console.log(resp);
          localStorage.setItem("dataUser", JSON.stringify(resp.data.data));
        })
        .then(function () {
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: #080710;
}

.login {
  width: 30%;
}

.loginContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
}

.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}

form {
  height: 520px;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

form * {
  font-family: "Poppins", sans-serif;
  color: #000000;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}

::placeholder {
  color: #000000;
}

button {
  margin-top: 50px;
  width: 100%;
  background-color: #000000;
  color: #ffffff;
  padding: 15px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.social {
  margin-top: 30px;
  display: flex;
}

.social div {
  background: red;
  width: 150px;
  border-radius: 3px;
  padding: 5px 10px 10px 5px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}

.social div:hover {
  background-color: rgba(255, 255, 255, 0.47);
}

.social .fb {
  margin-left: 25px;
}

.social i {
  margin-right: 4px;
}
</style>

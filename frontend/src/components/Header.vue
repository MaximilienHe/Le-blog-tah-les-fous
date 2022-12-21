<template>
  <header>
    <div class="left">
      <a href="/">
        <div class="Logo">
          <!-- <img src="../assets/logo-maximilienherr.png" height="60px" /> -->
          <h3>Le Blog</h3>
          <h2>Tah les fous</h2>
        </div>
      </a>
    </div>

    <div class="center" id="categories"></div>

    <div class="right">
      <Search />
    </div>

    <div class="far-right">
      <a v-if="isConnected" href="/favorites"><img v-if="isConnected" src="../assets/bookmarkEntire.jpg"
          class="icon" /></a>
      <a v-if="!isConnected" href="/login"><img v-if="!isConnected" src="../assets/user-icon.png" class="icon" /></a>
      <a v-if="isConnected" href="" class="PushButton" v-on:click="LogOut">
        <img v-if="isConnected" src="../assets/logout.png" class="icon" />
      </a>
      <a v-if="isAdmin" href="/dashboard" class="PushButton">
        <img v-if="isConnected" src="../assets/dashboard.png" class="icon" />
      </a>
    </div>
  </header>
</template>

<script>
import axiosInstance from "../axiosImport";
import Search from "./Search.vue";
import catJson from '../assets/categories.json'

export default {
  name: "header-website",
  components: {
    Search,
  },
  data() {
    return {
      categories: null,
      isConnected: false,
      isAdmin: false,
    };
  },

  methods: {
    // Creation of JSON Object + POST in DB when button is clicked
    LogOut: function () {
      console.log("LogOut");
      localStorage.removeItem("dataUser");
      let URL =
        "https://r0301-frameworksweb-production.up.railway.app/sessions/current/";
      axiosInstance
        .delete(URL)
        .then(function (response) {
          console.log(response);
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },

  mounted() {
    if (localStorage.getItem("dataUser") !== null) {
      this.isConnected = JSON.parse(
        localStorage.getItem("dataUser")
      ).is_authenticated;
      const role = JSON.parse(localStorage.getItem("dataUser")).role;
      if (role === "admin") {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    } else {
      this.isConnected = false;
      this.isAdmin = false;
    }

    this.categories = catJson.categories;

    document.getElementById("categories").innerHTML = "";
    this.categories.forEach((category) => {
      // Creation of HTML for categories
      const linkCat = document.createElement("a");
      linkCat.href = "/category/" + category.name;
      const h3Category = document.createElement("h3");
      linkCat.appendChild(h3Category);
      h3Category.innerHTML = category.name.toUpperCase();
      document.getElementById("categories").appendChild(linkCat);
    });
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 0;
  border: none;
  background: none;
}

button:focus {
  outline: none;
}

header {
  background-color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px 0px;
  margin-bottom: 4vh;

  .left {
    flex: 1;

    h3 {
      font-size: 20px;
      font-style: italic;
      font-weight: 400;
      margin: 0;

      &.bottom {
        text-align: right;
      }
    }

    h1 {
      color: #171717;
      font-size: 32px;
      margin: 0;
    }
  }

  .center {
    width: 30vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    label {
      position: relative;
      display: block;
      width: 300px;

      input {
        width: 100%;
        height: 35px;
        background-color: #ffffff;
        box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.2);
        margin: 0;
        padding: 5px 0px 0px 35px;
        box-sizing: border-box;
        appearance: none;
        border: none;
        outline: none;
        color: #171717;
        font-family: "Rockwell", serif;
        font-size: 16px;

        &::placeholder {
          color: #888888;
        }
      }

      .icon {
        position: absolute;
        width: 25px;
        margin: 5px;
      }
    }
  }

  .far-right {
    margin-left: 20px;

    .icon {
      width: 25px;
    }
  }
}

a {
  color: transparent;
  text-decoration: none;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
</style>

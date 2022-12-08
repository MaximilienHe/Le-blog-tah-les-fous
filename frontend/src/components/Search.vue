<script>

export default {
    name: "header-website",
    data() {
        return {
            categories: null,
        };
    },

    methods: {
        onEnter: function () {
            console.log(document.getElementById('search-bar').value);
            this.$router.push({
                name: 'Search'
            });

            localStorage.setItem('search', document.getElementById('search-bar').value);
            // this.$router.push({
            //     path: '/search/' + document.getElementById('search-bar').value,
            //     components: {
            //         header: () => import('./Header.vue'),
            //     }
            // });
        },
    },

    mounted() {
    }
};
</script>
  

<template>
    <label for="search-bar">
        <img src="../assets/search-icon.png" class="icon" />
        <input v-on:keyup.enter="onEnter" type="text" id="search-bar" name="search-bar" placeholder="Type to search..." />
    </label>
</template>

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
  
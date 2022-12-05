<template>
    <div class="comment">
        
    </div>


</template>
  
<script>
export default {
    props: ['comment'],
    // Properties returned from data() become reactive state
    // and will be exposed on `this`.
    data() {
        return {};
    },
    // Methods are functions that mutate state and trigger updates.
    // They can be bound as event listeners in templates.
    methods: {
        clicked() {
            this.handleClick(this.post);
        },
    },
    // Lifecycle hooks are called at different stages
    // of a component's lifecycle.
    // This function will be called when the component is mounted.
    mounted() {
    },
};


</script>
  
<style lang="scss" scoped>
.tag {
    --color-text: #fff;
    --color-front: rgba(0, 0, 0, 0.231);
    --color-back: rgba(0, 0, 0, 0.021);
    position: relative;
    display: inline-block;
    border-radius: 6px;
    clip-path: polygon(20px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 20px);
    background: var(--color-front);
    padding: 10px 30px;
    margin: 0 8px;
    font-weight: 600;
    font-size: 18px;
    color: var(--color-text);
    transition: clip-path 500ms;
}

.tag:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: var(--color-back);
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 6px 0;
    transition: transform 500ms;
}

.tag:hover {
    clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 0px);
}

.tag:hover:after {
    transform: translate(-100%, -100%);
}

.article {
    display: block;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;

    .post {
        margin: 0;
        width: 100%;
        display: flex;
        background-color: #ffffff;
        box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
        padding: 20px 20px;

        .left {
            margin: 0;
            display: flex;
            flex-direction: space-between;

            .top-right {
                padding-left: 20px;

                .extrait {
                    line-height: 25px;
                }
            }

            .bottom-right {
                display: flex;
                justify-content: space-between;

                .author {
                    display: flex;
                    justify-content: space-between;

                    #AuthorName {
                        padding-left: 5px;
                    }
                }
            }
        }

        img {
            width: 45%;
            aspect-ratio: 16/9;
            object-fit: contain;
        }

        h4 {
            box-sizing: border-box;
            height: 50px;
            line-height: 50px;
            margin: 0px;
        }

        &.col-2 {
            grid-column: span 2;
        }

        &.row-2 {
            grid-row: span 2;
        }
    }
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
</style>
  
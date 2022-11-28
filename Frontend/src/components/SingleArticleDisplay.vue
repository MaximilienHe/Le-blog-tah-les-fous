<template>
  <div class="article">
    <div class="post">
      <div class="left">
        <img src="../assets/S22ultra.jpg" />
        <div class="top-right">
          <h2>TEST – Samsung Galaxy S22 Ultra, la masterclass de l’année ?</h2>
          <p class="extrait">
            En tout début d’année, Samsung a lancé le Samsung Galaxy S22 Ultra,
            le fleuron de la marque. Grand changement cette année, cette version
            Ultra vient remplacer les Galaxy Note. Plusieurs mois après la
            sortie, est-il toujours pertinent d’acheter ce smartphone ultra haut
            de gamme ?
          </p>
          <div class="tag">Test</div>
          <div class="tag">Samsung</div>
          <div class="tag">S22</div>
          <div class="bottom-right">
            <div class="author">
              <h4>Par</h4>
              <h4 id="AuthorName">Maximilien</h4>
            </div>
            <h4>25 Novembre 2022</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single-article",
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
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.2);
    padding: 20px 20px;

    .left {
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
      width: 450px;
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
</style>

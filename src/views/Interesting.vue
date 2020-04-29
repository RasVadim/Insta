<template>
  <div class="main_interesting">
    <div class="main_grid_interesting">
      <div class="int_people">
        <header class="head_int_people">
          <div class="head_int_people">Interesting persons</div>
          <a class="head_int_people">All</a>
        </header>
        <article class="list_int_people">
          <accBlockInt
            v-for="account in this.accountsForInteresting"
            :key="account.id"
            :account_data="account"
          />
        </article>
      </div>
      <div class="interesting">
        <header class="head_interesting">Interesting</header>
        <article class="list_interesting">
          <div class="grid_photo_int">
            <div v-for="image in this.$store.state.images" :key="image.id" :class="image.id">
              <img :src="image.link" alt="img" />
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import accBlockInt from "@/components/accBlockInt.vue";
import { mapActions } from "vuex";

export default {
  name: "Main",
  components: { accBlockInt },
  props: {},
  data() {
    return {};
  },
  computed: {
    accountsForInteresting: function() {
      let arrayAccounts = this.$store.state.accounts;
      let accForInteresting = arrayAccounts.filter(
        arrayAccounts => arrayAccounts.place === "interesting"
      );
      return accForInteresting;
    }
  },
  methods: {
    ...mapActions(["GET_ACCOUNTS_FROM_API", "GET_IMAGES_FROM_API"])
  },
  mounted() {
    this.GET_ACCOUNTS_FROM_API();
    this.GET_IMAGES_FROM_API();
  }
};
</script>

<style scoped lang="scss">
.main_interesting {
  padding-top: 40px;
}

.main_grid_interesting {
  background-color: #fafafa;
  display: grid;
  grid-gap: 28px;
  grid-template-columns: 1fr minmax(100px, 928px) 1fr;
  grid-template-rows: 260px auto;
  grid-template-areas:
    ". int_people ."
    ". interesting .";
}

.int_people {
  grid-area: int_people;
}

.head_int_people {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 5px;
  a {
    font-weight: 600;
    color: #0095f6;
  }
}

.head_interesting {
  display: flex;
  font-weight: 600;
  font-size: 16px;
  padding: 16px 16px 16px 0;
}

.list_int_people {
  display: flex;
  overflow: auto;
}

article.list_int_people::-webkit-scrollbar {
  height: 3px;
  background-color: white;
}

article.list_int_people::-webkit-scrollbar-thumb {
  background-color: #bbbbbb;
  border-radius: 20%;
}

.interesting {
  grid-area: interesting;
}
.grid_photo_int {
  display: grid;
  grid-gap: 28px;
  grid-template-columns: repeat(3, minmax(auto, 1fr));
  grid-template-rows: repeat(9, auto);
}

img {
  width: 100%;
  height: auto;
  background-color: coral;
}

@media screen and (max-width: 735px) {
  .main_interesting {
    padding: 0px;
  }

  .main_grid_interesting {
    background-color: #fafafa;
    display: grid;
    grid-row-gap: 14px;
    grid-column-gap: 0px;
    overflow: hidden;
    grid-template-columns: minmax(100px, 755px);
    grid-template-rows: auto;
    grid-auto-columns: 0px;
    grid-auto-rows: 0px;
    grid-template-areas: "interesting";
  }

  .head_interesting {
    padding: 20px;
  }

  .grid_photo_int {
    display: grid;
    grid-column-gap: 4px;
    grid-row-gap: 0px;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    grid-template-rows: repeat(9, auto);
  }
}
</style>

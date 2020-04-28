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
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
            <div class="one_photo"></div>
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
    ...mapActions(["GET_ACCOUNTS_FROM_API"])
  },
  mounted() {
    this.GET_ACCOUNTS_FROM_API();
  }
};
</script>


<style scoped lang="scss">
.main_interesting {
  padding: 40px 20px 0px 20px;
}

.main_grid_interesting {
  background-color: #fafafa;
  display: grid;
  grid-row-gap: 14px;
  grid-column-gap: 28px;
  grid-template-columns: 1fr minmax(810px, 975px) 1fr;
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
  a {
    font-weight: 600;
    color: #0095f6;
  }
}

.head_interesting {
  display: flex;
  font-weight: 600;
  font-size: 16px;
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
.grid_photo_int{
  display: grid;
  grid-gap: 28px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 290px);

}

.one_photo{
  background-color: coral;
}

</style>

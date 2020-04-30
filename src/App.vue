<template>
  <div id="app">
    <div class="head_grid">
      <header class="header">
        <header class="logo">
          <div class="logo_head">
            <router-link to="/">
              <img class="logo_head" src="images/logo.png" />
            </router-link>
          </div>
        </header>
        <header class="search">
          <div class="search_head">
            <input type="text" placeholder="Search" class="search_input" />
          </div>
        </header>
        <header class="icons">
          <div class="icons_head">
            <div class="interesting">
              <router-link to="/interesting">
                <img class="interesting" src="images/interesting_u.png" />
              </router-link>
            </div>
            <div class="liked">
              <router-link to="/liked">
                <img class="liked" src="images/liked_u.png" />
              </router-link>
            </div>
            <div class="profile">
              <router-link to="/profile">
                <img
                  class="profile"
                  src="https://sun9-49.userapi.com/c858236/v858236552/1e5f9b/sSxu8b-y60w.jpg"
                />
              </router-link>
            </div>
          </div>
        </header>
      </header>
    </div>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, Avenir,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #8e8e8e;
  background-color: #fafafa;
  font-size: 14px;
  line-height: 18px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.head_grid {
  position: sticky;
  top: 0;
  background-color: white;
  border-style: none none solid none;
  border-color: #dbdbdb;
  border-width: 1px;
  padding-left: 18px;
  padding-right: 18px;
}

header {
  display: grid;
  grid-template-columns: 1fr 310px 310px 310px 1fr;
  grid-template-rows: 56px;
  grid-template-areas: ". logo search icons .";
}

header.logo {
  grid-area: logo;
  align-items: center;
  display: flex;
}

.logo_head {
  width: auto;
  height: 30px;
  display: block;
}

header.search {
  grid-area: search;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search_head {
  display: inline;
}

.search_input {
  width: 208px;
  height: 24px;
  text-align: center;
  border-style: solid;
  border-color: #dbdbdb;
  border-width: 1px;
  background-color: #fafafa;
  border-radius: 3px;
  color: #dbdbdb;
}

header.icons {
  grid-area: icons;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.icons_head {
  width: 120px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.interesting {
  width: 22px;
  height: 22px;
  display: block;
}

.liked {
  width: 22px;
  height: 22px;
  display: block;
}

.profile {
  width: 22px;
  height: 22px;
  display: block;
  border-radius: 50%;
}

@media screen and (max-width: 1000px) and (min-width: 570px) {
  header {
    grid-area: header;
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr minmax(210px, 310px) 1fr;
    grid-template-areas: " logo search icons";
  }
}

@media screen and (max-width: 570px) {
  header {
    grid-area: header;
    position: sticky;
    top: 0;
    display: grid;
    overflow: hidden;
    grid-template-columns: minmax(96px, 1fr) minmax(72px, 1fr);
    grid-template-rows: 56px;
    grid-auto-columns: 0px;
    grid-auto-rows: 0px;
    grid-template-areas: "logo icons";
  }
}
</style>

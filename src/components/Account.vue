<template>
  <div>
    <el-page-header @back="goBack" content="账号管理"></el-page-header>
    <button @click="addUser">增加用户mutation</button>
    <button @click="addUser2">增加用户action</button>
    <section class="selectPanel">
      <div>
        渠道:
        <span>
          <span v-for="qd in qudao" :key="qd.id">
            <input
              type="checkbox"
              name="qudao"
              :id="qd.id"
              v-model="formData.qudaos"
              :value="qd.id"
            />
            {{ qd.name }}
          </span>
        </span>
      </div>
      <div>
        标签:
        <span>
          <span v-for="tag in tags" :key="tag.tid">
            <input
              type="checkbox"
              name="tags"
              :id="tag.tid"
              v-model="formData.tags"
              :value="tag.tid"
            />
            {{ tag.name }}
          </span>
        </span>
      </div>
      <div>
        组别:
        <span>
          <span v-for="g in group" :key="g.gid">
            <input
              type="checkbox"
              name="group"
              :id="g.gid"
              v-model="formData.groups"
              :value="g.gid"
            />
            {{ g.name }}
          </span>
        </span>
      </div>
      <button @click="submit">确定</button>
    </section>
    <section class="accountList">
      <ul>
        <li>{{userList}}</li>
      </ul>
    </section>
    <div class="pageControl">
      <button @click="reload1">location.reload</button>
      <button @click="reload2">this.$router.go(0)</button>
      <button @click="reload3">provide/inject</button>
    </div>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log(to);
    next();
  },
  data: function() {
    return {
      qudao: [],
      tags: [],
      group: [],
      formData: {
        qudaos: [],
        tags: [],
        groups: []
      },
      test: {
        a: 1
      }
    };
  },
  methods: {
    async getInitData() {
      let res1 = await this.$axios.get("http://mockjs.com/api/posts");
      //let res2 = await this.$axios.get("http://mockjs.com/api/posts");
      //let res3 = await this.$axios.get("http://mockjs.com/api/posts");
      console.log(res1.data.posts[0]);
      this.qudao = [...res1.data.posts[0].qudao];
      this.tags = [...res1.data.posts[0].tag];
      this.group = [...res1.data.posts[0].group];
    },
    submit() {
      console.log(this.formData);
      console.log(this.formData.qudaos);
    },
    goBack() {
      window.history.go(-1);
    },
    addUser() {
      this.$store.commit("addUser", { name: `jay${Math.random()}` });
    },
    addUser2() {
      this.$store.dispatch("useMutationAddUser", {
        name: `jay${Math.random()}`
      });
    },
    reload1() {
      location.reload();
    },
    reload2() {
      this.$router.go(0);
    },
    reload3() {
      this.reload();
    }
  },
  inject: ["reload"],
  mounted() {
    this.getInitData();
    console.log(this.test);
  },
  created() {
    console.log(this.test);
    console.log("created is done!!!!!!!!!!!!!!!!!!!");
  },
  computed: {
    userList() {
      return this.$store.state.userList;
    }
  }
};
</script>

<style lang="scss" scoped></style>

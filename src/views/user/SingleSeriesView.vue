<template>
  <NavigationBar />
  <div>
    <p>{{ this.single_show.name }}</p>
    {{ this.single_show.summary }}
    <img :src="single_show.image" alt="" srcset="" />
  </div>
</template>

<script>
import NavigationBar from "@/components/user/NavigationBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["id"],
  components: {
    NavigationBar,
  },
  methods: {
    ...mapActions(["getOneShow"]),
  },
  created() {
    this.getOneShow(this.id);
  },
  computed: {
    ...mapGetters(["single_show"]),
  },
  mounted() {
    console.log(this.single_show);
  },
};
</script>

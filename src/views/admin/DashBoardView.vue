<template>
  <h3>Subscriptions</h3>
  <el-table :data="this.subscriptions" border style="width: 100%">
    <el-table-column prop="created_at" label="Sub Date" width="180" />
    <el-table-column prop="is_active" label="Sub Status" width="180" />
    <el-table-column prop="name" label="Username" />
    <el-table-column prop="email" label="Email" />
    <el-table-column prop="series_name" label="TV Show" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      subscriptions: [],
    };
  },
  methods: {
    getSubscriptions() {
      fetch(`http://localhost:4001/api/subscriptions`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.subscriptions = data;
        });
    },
  },
  mounted() {
    this.getSubscriptions();
  },
};
</script>

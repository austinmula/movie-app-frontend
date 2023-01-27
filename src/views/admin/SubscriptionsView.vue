<template>
  <h3>Subscriptions</h3>
  <el-table :data="this.subscriptions" border style="width: 100%">
    <el-table-column
      prop="created_at"
      label="Sub Date"
      width="180"
      :formatter="formatDate"
    >
      <!-- <template v-slot:prop="prop">
        {{ new Date(prop.created_at).toLocaleString() }}
      </template> -->
    </el-table-column>
    <el-table-column
      prop="is_active"
      label="Sub Status"
      width="180"
      align="center"
      :formatter="formatStatus"
      ><template #default="props">
        <el-tag v-if="props.row.is_active" class="ml-2" type="success"
          >Active</el-tag
        >
        <el-tag v-else class="ml-2" type="danger">Inactive</el-tag>
      </template>
    </el-table-column>

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
    formatDate(row) {
      return new Date(row.created_at).toLocaleString("en-US", {
        dateStyle: "long",
        timeStyle: "medium",
      });
    },
    formatStatus(row) {
      return row.is_active ? "Active" : "Inactive";
    },
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

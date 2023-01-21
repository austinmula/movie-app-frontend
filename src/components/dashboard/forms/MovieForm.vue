<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
// import type { FormInstance, FormRules } from "element-plus";

const formSize = ref("default");
const ruleFormRef = ref();
const ruleForm = reactive({
  name: "",
  summary: "",
  seasons: "",
  episodes: "",
  released: "",
  delivery: false,
  genre: [],
  imdb_score: "",
  rt_score: "",
  image: "",
  poster_img: "",
});

const rules = reactive({
  name: [
    { required: true, message: "Please input series name", trigger: "blur" },
  ],
  summary: [
    {
      required: true,
      message: "Please provide movie summary",
      trigger: "change",
    },
  ],
  seasons: [
    {
      required: true,
      message: "Enter number of seasons",
      trigger: "change",
    },
  ],
  episodes: [
    {
      required: true,
      message: "Enter number of episodes",
      trigger: "change",
    },
  ],
  imdb_score: [
    {
      required: true,
      message: "Enter imdb score",
      trigger: "change",
    },
  ],
  rt_score: [
    {
      required: true,
      message: "Enter rotten tomatoes score",
      trigger: "change",
    },
  ],
  released: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  genre: [
    {
      type: "array",
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  image: [
    {
      required: true,
      message: "Please select an image",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      postToServer(ruleForm, formEl);
    } else {
      console.log("error submit!", fields);
    }
  });
};

const postToServer = async (data, formEl) => {
  try {
    const response = await axios.post("http://localhost:4001/api/series", data);
    if (response.status === 200) {
      formEl.resetFields();
    }
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<template>
  <el-card>
    <h3>Create New Movie Entry</h3>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="Series name" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>

      <el-form-item label="Summary" prop="summary">
        <el-input v-model="ruleForm.summary" type="textarea" />
      </el-form-item>

      <el-row>
        <el-col :xs="24" :md="12">
          <el-form-item label="Seasons" prop="seasons">
            <el-input-number
              style="width: 100%"
              v-model="ruleForm.seasons"
              :min="1"
              :max="100"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :md="12">
          <el-form-item label="Episodes" prop="episodes">
            <el-input-number
              style="width: 100%"
              v-model="ruleForm.episodes"
              :min="1"
              :max="2000"
            />
          </el-form-item>
        </el-col>

        <el-col :xs="24" :md="24">
          <el-form-item prop="released" label="Release Date">
            <el-date-picker
              v-model="ruleForm.released"
              type="date"
              label="Pick a date"
              placeholder="Pick a date"
              style="width: 80%"
            />
          </el-form-item>
        </el-col>

        <el-col :xs="24" :md="12" :lg="8">
          <el-form-item label="IMDB Score" prop="imdb_score">
            <el-input-number
              style="width: 100%"
              v-model="ruleForm.imdb_score"
              :min="1"
              :max="10"
            />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :md="12" :lg="8">
          <el-form-item label="RTomatoes" prop="rt_score">
            <el-input-number
              style="width: 100%"
              v-model="ruleForm.rt_score"
              :min="1"
              :max="100"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="Image" prop="image">
        <el-input
          v-model="ruleForm.image"
          placeholder="enter url of poster image"
        />
      </el-form-item>
      <el-form-item label="Poster" prop="poster_img">
        <el-input
          v-model="ruleForm.poster_img"
          placeholder="enter url of poster image"
        />
      </el-form-item>

      <el-form-item label="Genre" prop="genre">
        <el-checkbox-group v-model="ruleForm.genre">
          <el-checkbox label="Online activities" name="genre" />
          <el-checkbox label="Promotion activities" name="genre" />
          <el-checkbox label="Offline activities" name="genre" />
          <el-checkbox label="Simple brand exposure" name="genre" />
          <el-checkbox label="Online activities" name="genre" />
          <el-checkbox label="Promotion activities" name="genre" />
          <el-checkbox label="Offline activities" name="genre" />
          <el-checkbox label="Simple brand exposure" name="genre" />
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

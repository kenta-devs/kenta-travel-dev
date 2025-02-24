<template>
    <div class="page">
        <el-input type="text" v-model="form.name"></el-input>
        <el-button type="primary" @click="addPet">新增</el-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'test',
    data() {
        return {
            form: {
                name: ''
            },
        }

    },
    mounted() {
    },
    methods: {
        addPet() {
            // 替换为您的Sanity项目ID
            const projectId = '4cwvrghn';

            // 替换为您的数据集名称
            const dataset = 'pet';

            const apiUrl = `https://api.sanity.io/v1/data/mutate/${projectId}/${dataset}`;

            // 新数据对象
            const newData = {
                _type: 'pet',
                name: 'New Data Title',
            };

            // 执行POST请求
            axios.post(apiUrl, {
                mutations: [
                    {
                        create: newData
                    }
                ]
            })
                .then(response => {
                    console.log('Data added successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error adding data:', error);
                });
        },
    }
}
</script>
<style lang="scss"></style>
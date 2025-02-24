<template lang="html">
    <el-popover placement="bottom-start" style="width:100%" trigger="manual" :visible-arrow="false"
        popper-class="select-wrap" v-model="visible">
        <div class="select-con">
            <div class="select-hd">Recent destinations</div>
            <div class="item-list history-list">
                <!-- <div class="item" v-for="(item, index) in historyList" :key="index"
                    @click="selectFn2(item.label)">
                    <i class="icon icon-history"></i><span>{{ item.label }}</span>
                </div> -->
            </div>
            <div class="select-hd">Popular destinations</div>
            <div class="item-list">
                <div class="item" v-for="(item, index) in hotList" :key="index"
                    @click="selectFn2(item.label)">
                    <i class="icon icon-location"></i><span>{{ item.label }}</span>
                </div>
            </div>
        </div>
        <el-input placeholder="Where are you going?" v-model="form.location" slot="reference"
            @click.stop.native="handleVisible"></el-input>
    </el-popover>
</template>
  
<script>
export default {
    data: () => ({
        visible: false,
        form:{
            location:''
        },
    }),
    methods: {
        handleVisible(){
            this.visible=!this.visible;
        },
    }
}
</script>
  
<style lang="scss" scoped>

</style>
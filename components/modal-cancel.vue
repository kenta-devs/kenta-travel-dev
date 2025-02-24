<template>
  <el-dialog
    :visible.sync="show"
    custom-class="c-modal-cancel"
    :title="curStep === 1 ? 'Cancel your trip' : ''"
    width="480px"
    append-to-body
    :show-close="false"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    center
  >
    <div v-if="curStep === 1">
      <div class="c-modal-cancel-text">Please fill out all the fields below to proceed.</div>
      <div class="c-modal-cancel-form">
        <el-form ref="formRef" :model="form" :rules="rules">
          <el-form-item prop="orderId">
            <el-input v-model="form.orderId" placeholder="Booking Number" />
          </el-form-item>
          <el-form-item prop="lastName">
            <el-input v-model="form.lastName" placeholder="Last name used for booking" />
          </el-form-item>
          <el-form-item prop="refund">
            <el-select v-model="form.refund" placeholder="Select a refund option" class="cmcf-select">
              <el-option label="Refund as travel credit" value="credit"></el-option>
              <el-option label="Refund my card" value="card"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="reason">
            <el-select v-model="form.reason" placeholder="Reason for cancellation" class="cmcf-select">
              <el-option label="Personal Circumstances Led to Cancellation" value="1"></el-option>
              <el-option label="Cancelled Due to Weather Conditions" value="2"></el-option>
              <el-option label="Chose a Different Destination/Date" value="3"></el-option>
              <el-option label="Budget Adjustments Required Cancellation" value="4"></el-option>
              <el-option label="Concerns Over Travel Safety/Restrictions" value="5"></el-option>
              <el-option label="Other" value="6"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="cmcf-btn">
          <el-button type="primary" :loading="loading" style="width: 100%;" @click="handleComplete">Complete Cancellation</el-button>
        </div>
        <div class="cmcf-tip">
          By clicking on "Complete Cancellation", you accept <br />
          <a class="cmcf-link">Refund Terms and Conditions</a>
        </div>
      </div>
    </div>
    <div v-else class="cmcs-result">
      <div class="cmcs-icon"><i class="el-icon-success" style="font-size: 80px; color: rgba(0, 188, 147, 1);" /></div>
      <div class="cmcs-title">We’ve received your request</div>
      <div class="cmcs-text">
        Your cancellation request is being processed, you will be<br />notified via email as soon as the refund has been proceed.
      </div>
      <div class="cmcs-btns">
        <el-button type="primary" plain @click="jumpHome">Back to homepage.</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
import { cancelOrderComplete } from '@/api/order'

export default {
  props:{
    step: String
  },
  data () {
    return {
      show: true,
      loading: false,
      curStep: this.step ? this.step * 1 : 1,
      form: {
        orderId: '',
        lastName: '',
        refund: '',
        reason: ''
      },
      rules: {
        orderId: [{ required: true, message: 'required', trigger: 'blur' }],
        lastName: [{ required: true, message: 'required', trigger: 'blur' }],
        refund: [{ required: true, message: 'required', trigger: 'change' }],
        reason: [{ required: true, message: 'required', trigger: 'change' }]
      }
    }
  },
  methods: {
    handleComplete () {
      this.$refs['formRef'].validate(async valid => {
        if (valid) {
          try {
            this.loading = true;
            await cancelOrderComplete(this.form);
            this.loading = false;
            this.curStep = 2;
          } catch (e) {
            this.loading = false;
          }
        }
      })
    },
    jumpHome () {
      location.href = '/';
    }
  }
}
</script>

<style lang="scss">
.c-modal-cancel {
  border-radius: 16px;
  height: 486px;
  .el-dialog__title {
    font-size: 24px;
  }
  .el-dialog__body {
    padding: 0 25px;
  }
  &-text {
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    color: rgba(26, 26, 26, 0.6);
  }
  &-form {
    margin-top: 28px;
  }
  .cmcf-tip {
    margin-top: 14px;
    font-size: 14px;
    font-weight: 300;
    text-align: center;
    color: rgba(26, 26, 26, 0.6);
  }
  .cmcf-btn {
    margin-top: 28px;
  }
  .cmcf-link {
    text-decoration: underline;
  }
  .cmcf-select {
    width: 100%;
  }
  .cmcs-result {
    margin-top: 70px;
    text-align: center;
  }
  .cmcs-title {
    margin-top: 24px;
    font-size: 24px;
    color: #1A1A1A;
  }
  .cmcs-text {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 300;
    line-height: 23px;
  }
  .cmcs-btns {
    margin-top: 24px;
  }
}
</style>

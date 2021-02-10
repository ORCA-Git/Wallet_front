<template>
    <div class="alert-modal">
      <div class="inner middle-item">
        <div class="alert-box">
          <div class="text">
              {{ alertmodal.text }}
          </div>
          <div class="button" @click="closemodal">
              CLOSE
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  computed: {
    alertmodal () {
      return this.$nuxt.$store.state.alertmodal
    }
  },
  methods: {
    closemodal () {
      if (this.alertmodal.direct) {
        this.$router.replace(this.alertmodal.direct)
      }
      this.$nuxt.$store.commit('SET_ALERT','')
    }
  },
  components: {
  }
}
</script>

<style lang="less">
    .alert-modal {
      width: 100%;
      height: 100%;
      position: fixed;
      z-index: 100000;
      left: 0px;
      top: 0px;
      background-color: rgba(0,0,0,0.5);
      .inner {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: 1000;
        .alert-box {
          width: 400px;
          padding: 30px;
          border-radius: 10px;
          background-color: #fff;
          text-align: center;
          .text {
            font-size: 1.4rem;
          }
          .button {
            padding-right: 15px;
            padding-left: 15px;
            height: 45px;
            line-height: 45px;
            border-radius: 10px;
            background-color: #111;
            cursor: pointer;
            color: #fff;
            display: inline-block;
            font-size: 1rem;
            font-weight: 400;
            margin-top: 10px;
          }
        }
      }
    }
</style>

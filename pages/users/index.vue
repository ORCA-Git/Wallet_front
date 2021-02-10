<template>
  <div class="container-fluid">

  </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                token: this.$nuxt.$store.state.token
            }
        },
        components: {
        },
        computed: {
            bearer () {
                return 'Bearer '.concat(this.token)
            },
            partners () {
              return this.$nuxt.$store.state.partners
            }
        },
        async mounted () {
        }
    }
</script>

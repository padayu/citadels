<template>
  <div>game view</div>
  <button>end turn</button>
  <button>leave game</button>
  <hand-display/>
</template>

<script>
// @ is an alias to /src

import HandDisplay from "@/components/HandDisplay.vue";

export default {
  name: 'GameView',
  components: {HandDisplay},
}
</script>
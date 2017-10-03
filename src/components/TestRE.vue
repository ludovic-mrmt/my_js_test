<template>
  <div>
    <p><label>Expression régulière</label> <input v-model="newRE"></p>
    <input v-model="newItem" @keyup.enter="checkItem">
    <button @click="checkItem">Tester une phrase</button>
    <!--displays list -->
    <ul id='bad'>
      <li class='listitem' v-for="item in badItems">{{ item }}</li>
    </ul>
    <ul id='good'>
      <li  class='listitem' v-for="item in goodItems">{{ item }}</li>
    </ul>
    <button @click="resetItems">Reset</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      goodItems: [],
      badItems: [],
      newItem: '',
      newRE: ''
    }
  },
  methods: {
    setRE () {
      this.listItems.push(this.newWord)
      this.newWord = ''
    },
    resetItems () {
      this.badItems = []
      this.goodItems = []
    },
    checkItem () {
      let re = new RegExp(this.newRE)
      if (re.test(this.newItem)) {
        this.propValue = this.newItem
        this.goodItems.push(this.newItem)
      } else {
        this.propValue = ''
        this.badItems.push(this.newItem)
      }
      this.newItem = ''
    }
  }

}
</script>
<style>
.listitem {
    list-style: none;
    padding: 16px 16px 16px 60px;
    border: 10px;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
#bad {
  text-decoration: line-through;
  color : red;
}
#good {
  color : green;
}

</style>

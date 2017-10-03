<template>
  <div>
    <input v-model="newItem" @keyup.enter="checkItem">
    <button @click="checkItem">Tester une phrase</button>
    <!--displays list -->
    <ul id='bad'>
      <li class='listitem' v-for="item in badItems">{{ item }}</li>
    </ul>
    <ul id='good'>
      <li  class='listitem' v-for="item in goodItems">{{ item }}</li>
    </ul>
    <p>commence avec un des mots suivants:</p>
    <ul>
      <li  class='listitem' v-for="item in listItems">{{ item }}</li>
    </ul>
    <input v-model="newWord"  @keyup.enter="setWord">
    <button @click="setWord">Ajouter un mot</button>

    <button @click="resetWords">Reset</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      listItems: ['Die', 'Das', 'Der'],
      goodItems: [],
      badItems: [],
      newItem: '',
      newWord: ''
    }
  },
  methods: {
    setWord () {
      this.listItems.push(this.newWord)
      this.newWord = ''
    },
    resetWords () {
      this.listItems = []
      this.badItems = []
      this.goodItems = []
    },
    checkItem () {
      let a = ''
      // ici vous fabriquez un 'a' en composant les éléments de la liste listItems
      // à l'aide d'une boucle A COMPLETER
      a = '^D'
      if (a === '') {
        // throw Error('Le string de RE est vide')
        return
      }
      let re = new RegExp(a)
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

<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="title">
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add Ingredient</label>
        <input type="text" name="add-ingredient" @keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddSmoothie',
  data() {
    return {
      title: '',
      another: '',
      ingredients: [],
      feedback: '',
    };
  },
  methods: {
    AddSmoothie() {
      console.log(this.title, this.ingredients);
    },
    addIng() {
      if (this.another) {
        this.ingredients.push(this.another);
        this.another = '';
        this.feedback = '';
      } else {
        this.feedback = 'You must provide a value to add ingredient';
      }
    },
  },
};
</script>

<style scoped>
  .add-smoothie{
    margin-top:60px;
    padding: 20px;
    max-width: 500px;
  }
  .add-smoothie h2{
    font-size: 2em;
    margin: 20px auto;
  }
  .add-smoothie .field {
    margin: 20px auto;
  }
</style>

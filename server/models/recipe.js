const mongoose = require('mongoose');
require('dotenv').config();

// Recipe Schema
var Schema = mongoose.Schema
const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: Number,
    difficulty: Number,
    ingredients: [{
        name: String,
        quantity: String
    }],
    description: String,
    image: String
});

const Recipe = module.exports = mongoose.model('Recipe', RecipeSchema);

module.exports.getRecipeById = function (id, callback) { 
    Recipe.findById(id, callback);
};

module.exports.getAllRecipes = function (callback) {  
    Recipe.find({}, callback);
};

module.exports.addRecipe = function (newRecipe, callback) { 
    newRecipe.save(callback);
};

module.exports.removeRecipe = function (id, callback) {
    Recipe.findOneAndRemove({ _id: id}, callback);
};

module.exports.updateRecipe = function (id, newData, callback) {
    Recipe.findOneAndUpdate({ _id: id}, newData, {upsert:true, new:true}, callback);
};
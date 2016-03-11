class RecipesController < ApplicationController

  def create
    new_recipe = Recipe.new(recipe_params)
    if new_recipe.save
      render json: { status: 200 }
    else
      render json: { status: 400 }
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :description)
  end

  def recipes
    Recipe.all
  end
  helper_method :recipes
end

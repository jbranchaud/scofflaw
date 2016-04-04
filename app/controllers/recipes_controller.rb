class RecipesController < ApplicationController

  def create
    new_recipe = Recipe.new(recipe_params)
    if new_recipe.save
      render json: {}, status: 200
    else
      errors = errors_to_json(new_recipe.errors)
      render json: { errors: errors }, status: 400
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

  def recipe
    if params[:id]
      Recipe.find(params[:id])
    end
  end
  helper_method :recipe

  def errors_to_json(errors)
    errors.each_with_object({}) do |error, hsh|
      hsh[error.first] = error.last
      hsh
    end
  end
end

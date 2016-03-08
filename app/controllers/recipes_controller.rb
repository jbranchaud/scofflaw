class RecipesController < ApplicationController

  private

  def recipes
    Recipe.all
  end
  helper_method :recipes
end

class NewRecipeForm
  include ActiveModel::Model

  def initialize(params)
    @params = params
  end

  def create
    require 'pry'; binding.pry;
  end

  private

  def create_recipe

  end

  def create_ingredients

  end
end

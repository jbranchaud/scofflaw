class IngredientType < ActiveRecord::Base
  has_one :ingredient

  validates_presence_of :name
end

class Ingredient < ActiveRecord::Base
  has_one :ingredient_type

  validates_presence_of :name, :description, :ingredient_type_id
end

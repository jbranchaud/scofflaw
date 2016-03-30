class Ingredient < ActiveRecord::Base
  belongs_to :ingredient_type

  validates_presence_of :name, :description, :ingredient_type_id
end

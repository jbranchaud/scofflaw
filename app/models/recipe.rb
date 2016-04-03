class Recipe < ActiveRecord::Base
  validates_presence_of :name, :description

  has_many :ingredient_amounts
end

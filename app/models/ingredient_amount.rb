class IngredientAmount < ActiveRecord::Base
  belongs_to :recipe
  belongs_to :ingredient
  belongs_to :amount_type

  def to_s
    "#{self.amount} #{self.amount_type.name} #{self.ingredient.name}"
  end
end

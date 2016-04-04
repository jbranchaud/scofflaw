class IngredientAmountDecorator
  include ActionView::Helpers::TextHelper

  attr_reader :ingredient_amount

  def self.wrap(ingredient_amounts)
    Array(ingredient_amounts).map do |ingredient_amount|
      new(ingredient_amount: ingredient_amount)
    end
  end

  def initialize(ingredient_amount:)
    @ingredient_amount = ingredient_amount
  end

  def display_name
    amount = ingredient_amount.amount
    amount_type_name = ingredient_amount.amount_type.name
    ingredient_name = ingredient_amount.ingredient.name

    if amount_type_name == 'none'
      "#{better_pluralize(amount, ingredient_name)}"
    else
      "#{better_pluralize(amount, amount_type_name)} #{ingredient_name}"
    end
  end

  private

  def better_pluralize(amount, word)
    formatted_amount = "%g" % BigDecimal.new(amount, 2)
    if amount == 1
      "#{formatted_amount} #{word.singularize}"
    else
      "#{formatted_amount} #{word.pluralize}"
    end
  end
end

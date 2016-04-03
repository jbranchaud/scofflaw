FactoryGirl.define do
  factory :ingredient_amount do
    recipe
    ingredient
    amount 1
    amount_type
  end
end

require 'rails_helper'

describe 'Ingredients' do
  describe '.create' do
    let(:garnish) { IngredientType.create!(name: 'garnish') }

    it 'creates a new ingredient record' do
      lime_wedge = Ingredient.create!(name: 'Lime Wedge', description: 'An 8th of a lime', ingredient_type_id: garnish.id)
      expect(lime_wedge).to be
    end

    context 'when the name is missing' do
      it 'raises a RecordInvalid error' do
        expect {
          Ingredient.create!(description: 'An 8th of a lime', ingredient_type_id: garnish.id)
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Name can't be blank")
      end
    end

    context 'when the description is missing' do
      it 'raises a RecordInvalid error' do
        expect {
          Ingredient.create!(name: 'Lime Wedge', ingredient_type_id: garnish.id)
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Description can't be blank")
      end
    end

    context 'when the ingredient_type is missing' do
      it 'raises a RecordInvalid error' do
        expect {
          Ingredient.create!(name: 'Lime Wedge', description: 'An 8th of a lime')
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Ingredient type can't be blank")
      end
    end
  end
end

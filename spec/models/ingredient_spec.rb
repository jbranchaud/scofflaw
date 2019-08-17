require 'rails_helper'

describe 'Ingredients' do
  describe '.create' do
    let(:garnish) { IngredientType.create!(name: 'garnish') }

    it 'creates a new ingredient record' do
      lime_wedge = Ingredient.create!(name: 'Lime Wedge', description: 'An 8th of a lime', ingredient_type_id: garnish.id)
      expect(lime_wedge.name).to eq 'Lime Wedge'
      expect(lime_wedge.description).to eq 'An 8th of a lime'
      expect(lime_wedge.ingredient_type.name).to eq 'garnish'
    end

    context 'when the name is missing' do
      it 'raises a RecordInvalid error' do
        expect {
          Ingredient.create!(description: 'An 8th of a lime', ingredient_type_id: garnish.id)
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Name can't be blank")
      end
    end

    context 'when the description is missing' do
      it 'the description defaults to a blank string' do
        lime_wedge = Ingredient.create!(name: 'Lime Wedge', ingredient_type_id: garnish.id)
        expect(lime_wedge.description).to eq ''
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

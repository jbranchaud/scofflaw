require 'rails_helper'

describe 'IngredientType' do
  describe '.create' do
    it 'creates a new IngredientType instance' do
      garnish = IngredientType.create(name: 'Garnish')
      expect(garnish).to be
    end

    context 'without a name' do
      it 'raises a RecordInvalid error' do
        expect {
          IngredientType.create!
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Name can't be blank")
      end
    end
  end
end

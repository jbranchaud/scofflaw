require 'rails_helper'

describe 'Items' do
  describe '.create' do
    let(:garnish) { ItemType.create!(name: 'garnish') }

    it 'creates a new item record' do
      lime_wedge = Item.create!(name: 'Lime Wedge', description: 'An 8th of a lime', item_type_id: garnish.id)
      expect(lime_wedge).to be
    end

    context 'when the name is missing' do
      it 'raises a RecordInvalid error' do
        expect {
          Item.create!(description: 'An 8th of a lime', item_type_id: garnish.id)
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Name can't be blank")
      end
    end

    context 'when the description is missing' do
      it 'raises a RecordInvalid error' do
        expect {
          Item.create!(name: 'Lime Wedge', item_type_id: garnish.id)
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Description can't be blank")
      end
    end

    context 'when the item_type is missing' do
      it 'raises a RecordInvalid error' do
        expect {
          Item.create!(name: 'Lime Wedge', description: 'An 8th of a lime')
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Item type can't be blank")
      end
    end
  end
end

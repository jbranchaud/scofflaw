require 'rails_helper'

describe 'ItemType' do
  describe '.create' do
    it 'creates a new ItemType instance' do
      garnish = ItemType.create(name: 'Garnish')
      expect(garnish).to be
    end

    context 'without a name' do
      it 'raises a RecordInvalid error' do
        expect {
          ItemType.create!
        }.to raise_error(ActiveRecord::RecordInvalid, "Validation failed: Name can't be blank")
      end
    end
  end
end

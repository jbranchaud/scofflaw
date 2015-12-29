require 'rails_helper'

describe 'ItemType' do
  describe '.new' do
    it 'creates a new ItemType instance' do
      garnish = ItemType.create(name: 'Garnish')
      expect(garnish).to be
    end

    context 'without a name' do
      it 'raises an error' do
        expect { ItemType.create! }.to raise_error ActiveRecord::RecordInvalid
      end
    end
  end
end

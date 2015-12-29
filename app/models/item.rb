class Item < ActiveRecord::Base
  has_one :item_type

  validates_presence_of :name, :description, :item_type_id
end

class ItemTypesController < ActionController::Base
  private

  def item_types
    ItemType.all
  end
  helper_method :item_types
end

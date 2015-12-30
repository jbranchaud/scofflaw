class ItemTypesController < ActionController::Base
  def create
    if item_type.update(item_type_params)
      redirect_to action: 'index'
    else
      flash[:alert] = error_message(item_type)
      render action: 'new'
    end
  end

  private

  def item_type_params
    params.require(:item_type).permit(:name)
  end

  def item_types
    ItemType.all
  end
  helper_method :item_types

  def item_type
    @item_type ||= ItemType.new
  end
  helper_method :item_type

  def error_message(item_type)
    first_message = item_type.errors.messages.first
    if first_message
      "#{first_message.first.to_s.capitalize} #{first_message.second.first}"
    end
  end
end

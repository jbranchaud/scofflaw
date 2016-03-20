class IngredientTypesController < ApplicationController
  def create
    if ingredient_type.update(ingredient_type_params)
      redirect_to action: 'index'
    else
      flash[:alert] = error_message(ingredient_type)
      render action: 'new'
    end
  end

  def react_create
    if ingredient_type.update(ingredient_type_params)
      render json: {}, status: 200
    else
      errors = ingredient_type.errors.messages.each_with_object({}) { |(attr_name,messages), errors| errors[attr_name.to_s] = "#{attr_name.to_s.capitalize} #{messages.first}" }
      render json: { errors: errors }, status: 400
    end
  end

  private

  def ingredient_type_params
    params.require(:ingredient_type).permit(:name)
  end

  def ingredient_types
    IngredientType.all
  end
  helper_method :ingredient_types

  def ingredient_type
    @ingredient_type ||= IngredientType.new
  end
  helper_method :ingredient_type

  def error_message(ingredient_type)
    first_message = ingredient_type.errors.messages.first
    if first_message
      "#{first_message.first.to_s.capitalize} #{first_message.second.first}"
    end
  end
end

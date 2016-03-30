class AddCascadeDeleteToIngredientsForIngredientTypes < ActiveRecord::Migration
  def up
    execute <<-SQL
      alter table ingredients
        drop constraint ingredients_ingredient_type_id_fkey;
      alter table ingredients
        add constraint ingredients_ingredient_type_id_fkey
        foreign key (ingredient_type_id)
        references ingredient_types (id) on delete cascade
      ;
    SQL
  end

  def down
    execute <<-SQL
      alter table ingredients
        drop constraint ingredients_ingredient_type_id_fkey;
      alter table ingredients
        add constraint ingredients_ingredient_type_id_fkey
        foreign key (ingredient_type_id)
        references ingredient_types (id)
      ;
    SQL
  end
end

class ChangeItemToIngredient < ActiveRecord::Migration
  def up
    execute <<-SQL
      alter table items rename to ingredients;
      alter sequence items_id_seq rename to ingredients_id_seq;
      alter table item_types rename to ingredient_types;
      alter sequence item_types_id_seq rename to ingredient_types_id_seq;
      alter table ingredients rename column item_type_id to ingredient_type_id;
      alter table ingredients
        rename constraint items_item_type_id_fkey to ingredients_ingredient_type_id_fkey;
      alter index items_pkey rename to ingredients_pkey;
      alter index item_types_pkey rename to ingredient_types_pkey;
    SQL
  end

  def down
    execute <<-SQL
      alter table ingredients rename to items;
      alter sequence ingredients_id_seq rename to items_id_seq;
      alter table ingredient_types rename to item_types;
      alter sequence ingredient_types_id_seq rename to item_types_id_seq;
      alter table items rename column ingredient_type_id to item_type_id;
      alter table items
        rename constraint ingredients_ingredient_type_id_fkey to items_item_type_id_fkey;
      alter index ingredients_pkey rename to items_pkey;
      alter index ingredient_types_pkey rename to item_types_pkey;
    SQL
  end
end

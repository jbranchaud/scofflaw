class AddDescriptionToRecipes < ActiveRecord::Migration
  def up
    execute <<-SQL
      alter table recipes
        add column description varchar not null;
    SQL
  end

  def down
    execute <<-SQL
      alter table recipes
        drop column description;
    SQL
  end
end

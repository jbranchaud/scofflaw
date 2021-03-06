# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160402211734) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amount_types", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "ingredient_amounts", force: :cascade do |t|
    t.integer  "ingredient_id",                                            null: false
    t.decimal  "amount",         precision: 6, scale: 2,                   null: false
    t.integer  "amount_type_id",                                           null: false
    t.integer  "recipe_id",                                                null: false
    t.datetime "created_at",                             default: "now()", null: false
    t.datetime "updated_at",                             default: "now()", null: false
  end

  create_table "ingredient_types", force: :cascade do |t|
    t.string   "name",                         null: false
    t.datetime "created_at", default: "now()", null: false
    t.datetime "updated_at", default: "now()", null: false
  end

  create_table "ingredients", force: :cascade do |t|
    t.string   "name",                                 null: false
    t.text     "description",        default: "",      null: false
    t.integer  "ingredient_type_id",                   null: false
    t.datetime "created_at",         default: "now()", null: false
    t.datetime "updated_at",         default: "now()", null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string   "name",                          null: false
    t.datetime "created_at",  default: "now()", null: false
    t.datetime "updated_at",  default: "now()", null: false
    t.string   "description",                   null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "ingredient_amounts", "amount_types", name: "ingredient_amounts_amount_type_id_fkey"
  add_foreign_key "ingredient_amounts", "ingredients", name: "ingredient_amounts_ingredient_id_fkey"
  add_foreign_key "ingredient_amounts", "recipes", name: "ingredient_amounts_recipe_id_fkey"
  add_foreign_key "ingredients", "ingredient_types", name: "ingredients_ingredient_type_id_fkey", on_delete: :cascade
end

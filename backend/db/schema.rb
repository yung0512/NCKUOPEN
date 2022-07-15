# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_07_14_151801) do
  create_table "admin_users", charset: "utf8mb4", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admin_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admin_users_on_reset_password_token", unique: true
  end

  create_table "competitions", charset: "utf8mb4", force: :cascade do |t|
    t.string "title", null: false
    t.date "start_at", null: false
    t.date "end_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "pending", null: false
  end

  create_table "order_game_players", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "order_game_id", null: false
    t.bigint "player_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_game_id"], name: "index_order_game_players_on_order_game_id"
    t.index ["player_id"], name: "index_order_game_players_on_player_id"
  end

  create_table "order_games", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "order_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "group_type_id", null: false
    t.bigint "game_type_id", null: false
    t.index ["game_type_id"], name: "index_order_games_on_game_type_id"
    t.index ["group_type_id"], name: "index_order_games_on_group_type_id"
    t.index ["order_id"], name: "index_order_games_on_order_id"
  end

  create_table "orders", charset: "utf8mb4", force: :cascade do |t|
    t.bigint "competition_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["competition_id"], name: "index_orders_on_competition_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "players", charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "identification_code", null: false
    t.string "mobile", null: false
    t.date "birthday", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "auth_token", null: false
    t.string "name", null: false
    t.string "mobile", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end

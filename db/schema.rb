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

ActiveRecord::Schema.define(version: 2022_06_12_161013) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "freelancer_id"
    t.string "booking_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "service_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "category_name"
    t.string "category_picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "freelancers", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "profile_picture", default: "https://res.cloudinary.com/dimfaeuml/image/upload/v1652014285/default_avatar_dnd2zs.png"
    t.string "cover_photo", default: "https://res.cloudinary.com/dimfaeuml/image/upload/v1652013288/default_cover_hgufdb.png"
    t.string "services_photos", default: "https://images.unsplash.com/photo-1641824142582-e5b723d28806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVmYXVsdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    t.string "location"
    t.string "account_type", default: "freelancer"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "options", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "freelancer_id"
    t.integer "user_id"
    t.integer "stars"
    t.string "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "service_name"
    t.integer "freelancer_id"
    t.integer "service_price"
    t.integer "category_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "profile_picture", default: "https://res.cloudinary.com/dimfaeuml/image/upload/v1652014285/default_avatar_dnd2zs.png"
    t.string "cover_photo", default: "https://res.cloudinary.com/dimfaeuml/image/upload/v1652013288/default_cover_hgufdb.png"
    t.string "account_type", default: "user"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end

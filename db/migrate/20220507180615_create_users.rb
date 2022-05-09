class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :profile_picture, :default => 'https://res.cloudinary.com/dimfaeuml/image/upload/v1652014285/default_avatar_dnd2zs.png'
      t.string :cover_photo, :default => 'https://res.cloudinary.com/dimfaeuml/image/upload/v1652013288/default_cover_hgufdb.png'
      t.string :account_type, :default => 'user'
      
      t.timestamps
    end
  end
end

class CreateFreelancers < ActiveRecord::Migration[6.1]
  def change
    create_table :freelancers do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :profile_picture, :default => 'https://res.cloudinary.com/dimfaeuml/image/upload/v1652014285/default_avatar_dnd2zs.png'
      t.string :cover_photo, :default => 'https://res.cloudinary.com/dimfaeuml/image/upload/v1652013288/default_cover_hgufdb.png'
      t.string :services_photos, :default => 'https://images.unsplash.com/photo-1641824142582-e5b723d28806?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGVmYXVsdCUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      t.string :location, :defult => 'location not specified'

      t.timestamps
    end
  end
end

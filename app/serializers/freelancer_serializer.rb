class FreelancerSerializer < ActiveModel::Serializer
  attributes :id, :username, :email,:profile_picture, :cover_photo, :services_photos, :location, :account_type
  has_many :services
  has_many :reviews
end

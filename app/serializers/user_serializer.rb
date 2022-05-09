class UserSerializer < ActiveModel::Serializer
  attributes :id, :username,:email,:password_digest, :profile_picture, :cover_photo, :account_type
  has_many :bookings
  has_many :reviews
end

class User < ApplicationRecord
    has_secure_password
    has_many :bookings, dependent: :destroy
    has_many :freelancers, through: :bookings
    has_many :reviews, dependent: :destroy

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true,uniqueness: true
end

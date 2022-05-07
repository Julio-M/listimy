class User < ApplicationRecord
    has_many :bookings, dependent: :destroy
    has_many :freelancers, through: :bookings
    has_many :reviews, dependent: :destroy
end

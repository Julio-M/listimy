class Freelancer < ApplicationRecord
    has_many :bookings, dependent: :destroy
    has_many :users, through: :bookings
    has_many :reviews, dependent: :destroy
    has_many :services,dependent: :destroy
    has_many :categories, through: :services
end

class User < ApplicationRecord
    has_secure_password
    has_many :bookings, dependent: :destroy
    has_many :freelancers, through: :bookings
    has_many :reviews, dependent: :destroy
    has_one_attached :image
    has_one_attached :cover

    def image_url
        if image.attached?
            image.blob.service_url
        end
    end

    def cover_url
        if cover.attached?
            cover.blob.service_url
        end
    end

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true,uniqueness: true
end

class Category < ApplicationRecord
    has_many :services,dependent: :destroy
    has_many :freelancers, through: :services
end

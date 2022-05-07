class Category < ApplicationRecord
    has_many :services
    has_many :freelancers, through: :services
end

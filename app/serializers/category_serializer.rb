class CategorySerializer < ActiveModel::Serializer
  attributes :id, :category_name, :category_picture
  has_many :services
end

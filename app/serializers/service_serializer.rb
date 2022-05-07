class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :service_name, :freelancer_id, :service_price, :category_id
end

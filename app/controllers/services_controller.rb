class ServicesController < ApplicationController
    before_action :find_service, only: %i[show]
    skip_before_action :authorize, only: %i[index show create]
    skip_before_action :authorize_freelancer, only: %i[create show index]
    
    def index
        services = Service.all
        render json: services
    end

    def show
        render json: @service
    end

    def create
        new_service = Service.create!(service_params)
        render json: new_service, status: :created
      end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_service
     @service = Service.where(freelancer_id:params[:id])
    end

    def service_params
        params.permit(:service_name, :service_price, :category_id,:freelancer_id)
    end
end

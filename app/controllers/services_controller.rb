class ServicesController < ApplicationController
    before_action :find_service, only: %i[show]
    before_action :find_fr_service, only: %i[destroy]
    skip_before_action :authorize, only: %i[index show create destroy]
    skip_before_action :authorize_freelancer, only: %i[create show index destroy]
    
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

    def destroy
        @fr_service.destroy
        head :no_content
    # render json: @use_variable_from_before_action, status :accepted
    end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_service
     @service = Service.where(freelancer_id:params[:id])
    end

    def find_fr_service
        @fr_service = Service.find(params[:id])
    end

    def service_params
        params.permit(:service_name, :service_price, :category_id,:freelancer_id)
    end
end

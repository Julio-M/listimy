class ServicesController < ApplicationController
    before_action :find_service, only: %i[show]
    skip_before_action :authorize, only: %i[index show]
    
    def index
        services = Service.all
        render json: services
    end

    def show
        render json: @service
    end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_service
     @service = Service.find(params[:id])
    end
end

class ServicesController < ApplicationController
    before_action :find_service, only: %i[show]
    skip_before_action :authorize, only: %i[index show]
    skip_before_action :authorize_freelancer, only: %i[create index]
    
    def index
        services = Service.all
        render json: services
    end

    def show
        render json: @service
    end

    def create
        if @current_user
            new_service = @current_user.services.create!(service_params)
            render json: new_service, status: :created
        else
            new_service = @current_freelancer.services.create!(service_params)
            render json: new_service, status: :created
        end
      end

    private
    # goes under private
    #to be used with show, update and destroy
    def find_service
     @service = Service.find(params[:id])
    end

    def service_params
        params.permit(:title, :instructions, :minutes_to_complete)
    end
end
